import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";
import { useEffect, useState } from "react";
import useAuth from '../../Hooks/useAuth'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ price, courseId, sitNumber }) => {
    const user = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [loading, setLoading] = useState(false);
    const [enroled, setEnrole] = useState(false);
    const [clintSecret, setClientSecret] = useState("");
    const [isDisable, setIsDisable] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        //get clint secrate from backednd
        if (price) {
            axios.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                }).catch(err => toast.error(err.message));
        }
    }, [price])

    useEffect(() => {
        axios(`enroled/${courseId}`).then(res => {
            if (res.data === true) {
                setEnrole(true);
                setIsDisable(true);
            }
        });

    }, [loading])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error);
        } else {
            setCardError(null);
        }


        // Confirm payment
        const { paymentIntent, error: confirmPaymentError } = await stripe.confirmCardPayment(clintSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.user?.displayName || "Unknown",
                    email: user?.user?.email || "Anonymous ",
                },
            },
        })

        if (confirmPaymentError) {
            setCardError(confirmPaymentError)
        }

        if (paymentIntent?.status == "succeeded") {
            setLoading(false);
            const paymentInfo = {
                name: user?.user?.displayName,
                email: user?.user?.email,
                date: new Date(),
                transactionId: paymentIntent.id,
                price,
                courseId,
            }

            axios.patch(`/course/${courseId}`, {sitNumber: parseInt(sitNumber)}). then(res => console.log(res.data));

            axios.post("/payments", paymentInfo).then((res) => {
                if (res.data.acknowledged == true) {
                    toast.success("Welcome")
                    navigate("/dashboard/my-classes")
                }
            })
        }
    };
    return (
        <div>
            {
                enroled ? <div className="text-center font-bold text-3xl p-3 bg-red-500">You Alredy Enroled</div> : <div>

                    <form onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                        <SubmitBtn

                            loading={loading}
                            isDisable={!stripe || !clintSecret || isDisable}>Enrole Now</SubmitBtn>
                    </form>
                    {
                        cardError && <p className="text-red-600">{cardError.message}</p>
                    }
                </div>
            }

        </div>
    );
};

export default CheckoutForm;