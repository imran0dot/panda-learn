import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";
import { useEffect, useState } from "react";
import useAuth from '../../Hooks/useAuth'
import axios from "axios";
import { toast } from "react-hot-toast";


const CheckoutForm = ({ price, courseId }) => {
    const user = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [loading, setLoading] = useState(false);
    const [clintSecret, setClientSecret] = useState("");
    const [isDisable, setIsDisable] = useState(false);

    useEffect(() => {
        //get clint secrate from backednd
        if (price) {
            axios.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                }).catch(err => console.log(err));
        }
    }, [price])


    useEffect(() => {
        axios(`enroled/${courseId}`).then(res => {
            if(res.data === true){
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
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError("")
            console.log('[PaymentMethod]', paymentMethod);
        }


        //Confirm payment
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

        if (paymentIntent.status == "succeeded") {
            const paymentInfo = {
                name: user?.user?.displayName,
                email: user?.user?.email,
                transactionId: paymentIntent.id,
                price,
                courseId,
            }
            axios.post("/payments", paymentInfo).then((res) => {
                if (res.data.acknowledged == true) {
                    toast.success("Welcome")
                    setLoading(false);
                }

            
        })
    }
};
return (
    <div>
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
            isDisable={!stripe || !clintSecret || isDisable }>Enrole Now</SubmitBtn>
        </form>
        {
            cardError && <p className="text-red-600">{cardError}</p>
        }

    </div>
);
};

export default CheckoutForm;