import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";
import { useEffect, useState } from "react";
import useAuth from '../../Hooks/useAuth'
import axios from "axios";


const CheckoutForm = ({ price, loading }) => {
    const user = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clintSecret, setClientSecret] = useState("");

    useEffect(() => {
        //get clint secrate from backednd
        if (price) {
            axios.post('/create-payment-intent', {price})
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    console.log("CLINT SECREATE", res)
                }).catch(err => console.log(err));
        }
    }, [price])

    const handleSubmit = async (event) => { 
        event.preventDefault();

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

        if(confirmPaymentError){
            setCardError(confirmPaymentError)
        }

        console.log(paymentIntent);
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
                    <SubmitBtn isDisable={!stripe || !clintSecret}>Enrole Now</SubmitBtn>
            </form>
            {
                cardError && <p className="text-red-600">{cardError}</p>
            }

        </div>
    );
};

export default CheckoutForm;