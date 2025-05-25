'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/utils/Payment/stripeClient';
import CheckoutForm from './components/Payment';
import GlobalNavBar from '../Ai/components/GlobalNavBar';
import { motion } from 'framer-motion';
import { createPaymentIntent } from './services/PaymentApi';

export default function CheckoutPage() {
const [clientSecret, setClientSecret] = useState('');

useEffect(() => {
    createPaymentIntent(2000)
        .then(data => {
            setClientSecret(data.clientSecret);
        })
        .catch(error => {
            console.error('Error creating payment intent:', error);
        });
}, []);

if (!clientSecret) return <p>Loading...</p>;

return (
    <>
        <motion.div  className=" page from-stone-900 to-black " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Elements options={{ clientSecret }} stripe={stripePromise}>
                    <CheckoutForm />
                    <GlobalNavBar/>
                </Elements>
        </motion.div>
    </>
);
}

