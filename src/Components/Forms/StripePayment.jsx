import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import SubmitBtn from '../../shared/sharedComponents/SubmitBtn';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-hot-toast';
import { getDataFromStore } from '../../Hooks/useFackDb';
import { useNavigate } from "react-router-dom";

const StripePayment = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const cart = getDataFromStore();
    const navigate = useNavigate();
    const [key, setKey] = useState("")

    useEffect(() => {
        const amount = +data?.totalPrice;
        if (amount) {
            axios.post("/payments", {
                amount,
            }).then(res => setKey(res.data.clientSecret));
        }
    }, [data])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!stripe || !elements) {
              setLoading(false);
            return;
        }
        if (error) {
           toast.error(error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // Confirm payment
        const { paymentIntent, error: confirmPaymentError } = await stripe.confirmCardPayment(key, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user?.displayName || "Unknown",
                    email: user?.email || "Unknown email",
                },
            },
        })

        if (paymentIntent?.status == "succeeded") {
            const paymentInfo = {
                name: user?.displayName,
                email: user?.email,
                items: cart,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,
                paymentId: paymentIntent.id,
                status: paymentIntent.status,
            }
            axios.post("/add-payment", {paymentInfo}).then(res => 
                {
                    console.log(res);
                    if(res.data.acknowledged === true){
                        toast.success("payment success full");
                        navigate("/");
                        localStorage.removeItem("cartItems");
                        setLoading(false);
                    }
                })
        } else {
           toast.error(confirmPaymentError)
        }
    }

    const CARD_OPTIONS = {
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
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_OPTIONS} />
            <div className="p-3 mt-5">
                <p>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
            </div>
            <div className="flex items-center justify-center [&>*:nth-child(n)]:w-full mt-10">
                <SubmitBtn loading={loading}>Place Order</SubmitBtn>
            </div>
        </form>
    );
};

export default StripePayment;