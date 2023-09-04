import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import SubmitBtn from '../../shared/sharedComponents/SubmitBtn';
import { useEffect } from 'react';

const StripePayment = () => {
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const responce = axios.post("/payments", {
            amount: 20000,
        })
        console.log(responce);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if (!stripe || !elements) {
            return;
        }
        if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
    };

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
                <SubmitBtn>Place Order</SubmitBtn>
            </div>
        </form>
    );
};

export default StripePayment;