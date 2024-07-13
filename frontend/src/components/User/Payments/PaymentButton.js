import React, { useState } from 'react';
import axios from 'axios';
import {  BASE_USER } from '../../../utils/constants';

const RAZORPAY_KEY_ID = 'rzp_test_Csz5mNjOu2Dwz7'

// can move this to src/utils/loadRazorpay.js and import here
// import loadRazorpay from '../utils/loadRazorpay';
const loadRazorpay = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};
// export default loadRazorpay;

const PaymentButton = () => {
  //hardcoded data for testing purpose please update this
  const [paymentData, setPaymentData] = useState({
    amount: 900,
    currency: 'INR',
    clientName: 'Jake',
    clientId: '123439',
    therapistName: 'Paul',
    therapistId: '123',
    appointmentType: 'Group',
    therapyType: 'Depression'
  });

  const handlePayment = async () => {
    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Payment processing error. Please check your internet connection and try again.');
      return;
    }
    try {
      const response = await axios.post(BASE_USER+'/Neworder', paymentData);
      const order = response.data;

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Around Within',
        description: 'Test Transaction',
        order_id: order.id,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6fb58034307f07517c9e0c497e461fc4e31eb7bf01576cfcb2c328b28bd1eb1d',
        handler: async (response) => {
          const paymentDetails = {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature
          };
          try {
            const verifyResponse = await axios.post(BASE_USER+'/verifyPayment', paymentDetails);
            
            const verifyResult = verifyResponse.data;
            if (verifyResult.success) {
              // set redirect to payment success page
              alert('Payment successful');
            } else {
              alert('Payment verification failed');
            }
          } catch (error) {
            console.error('Error verifying payment:', error);
            alert('Payment verification failed');
          }
        },
        //user details will be filled automatically if availiable here
        prefill: {
          name: paymentData.clientName,
          email: 'email@example.com',
          contact: '9999999999'
        },
        theme: { color: '#B3F0FF'}
      };
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', async (response) => {
        try {
          const paymentDetails = {
            order_Id: response.error.metadata.order_id,
            payment_Id: response.error.metadata.payment_id,
          };
          const updateResponse = await axios.post(BASE_USER+'/updatePaymentStatus', paymentDetails);
          const updateResult = updateResponse.data;
          if (updateResult.success) {
            console.log('Payment failed, Status has been updated.');
          } else {
            console.error('Payment failed, Failed to update payment status');
          }
        } catch (error) {
          console.error('Error updating payment status:', error.response,error.response.data);
        }
      });
      rzp.open();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
    }
  };

  return (
    <button onClick={handlePayment}>Make Payment</button>
  );
};

export default PaymentButton;
