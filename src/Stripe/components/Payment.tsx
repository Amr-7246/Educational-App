'use client';

import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

// interface CheckoutFormProps {
//     clientSecret: string;
// }

export default function CheckoutForm() {
// * ############## Hooks
    const stripe = useStripe();
    const elements = useElements();
    const [status, setStatus] = useState('');
    const [amount, setAmount] = useState('');
// * ############## Hooks

// * ############## Logics
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        // ~ Confirm payment with PaymentElement
            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: window.location.href,
                },
                redirect: 'if_required',
            });
        // ~ Confirm payment with PaymentElement

        if (result.error) {
            setStatus(` ${result.error.message}`);
        } else if (result.paymentIntent?.status === 'succeeded') {
            setStatus(' Payment successful!');
        }
    };
// * ############## Logics

return (
    <div className="global-component font-mono bg-white">
        <div className="mb-6 text-center border-b-2 border-black pb-2 ">
            <h1 className="text-4xl font-black  text-black"> Payment Card</h1>
            <p className="text-sm text-black mt-2">Secure & Encrypted</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
                <label className="block text-black font-semibold mb-2">Amount to Pay</label>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-4 rounded-md bg-black text-white border placeholder:text-white focus:outline-none focus:ring-2"
                />
            </div>

            <div>
                <label className="block text-black font-semibold mb-2">Card Information</label>
                <div className="px-4 py-10 rounded-md  bg-black">
                    <PaymentElement options={{ layout: 'tabs' }} />
                </div>
            </div>

            {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!stripe}
                    className="button !bg-black !text-white hover:!bg-transparent hover:border-black hover:!text-black "
                >
                    Pay Now
                </button>
            {/* Submit Button */}

            {status && (
                <p className="text-center mt-4 text-green-300 font-medium animate-pulse">{status}</p>
            )}
        </form>
    </div>
);
}
