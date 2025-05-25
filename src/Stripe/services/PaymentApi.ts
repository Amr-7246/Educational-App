import axios from 'axios';

export const createPaymentIntent = async (amount: number) => {
    try {
        const response = await axios.post('/api/Payment/create-payment-intent', {
            amount,
        });
        return response.data;
    } catch (error) {
        
        console.error('Error creating payment intent:', error);
        throw error; 
    }
};
