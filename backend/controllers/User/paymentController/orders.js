const razorpay = require('../../../config/razorpay');
const crypto = require('crypto');
const { Payment }= require('../../../models/User/paymentModel')

const newOrder = async (req, res) => {
    try {
        const { amount, currency, clientName, clientId, therapistName, therapistId, appointmentType, therapyType} = req.body;
        const options = {
            amount: amount * 100,
            currency: currency,
        };
        const order = await razorpay.orders.create(options);
        const payment = new Payment({
            orderId: order.id,
            amount: order.amount,
            clientName,
            clientId,
            therapistName,
            therapistId,
            appointmentType,
            therapyType
            
        });

        await payment.save(); 
        res.json(order)
    } catch (error) {
        res.status(500).json({Sucess : false, error : error.message});
    }
};

//To verify payment signature 

const verifyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body;

    if (!order_id || !payment_id || !signature) {
        return res.status(400).json({ success: false, message: 'Missing required fields: order_id, payment_id, signature' });
    }
    const body = order_id + '|' + payment_id;
    try{
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');
        
        const isAuthentic = expectedSignature === signature;
        const payment = await Payment.findOneAndUpdate(
            { orderId: order_id },
            { paymentId: payment_id, status: isAuthentic ? 'completed' : 'failed'},
            { new: true }
        );
        if (!payment) {
            return res.status(404).json({ success: false, message: 'Payment not found' });
        }
        if (isAuthentic) {
            res.json({ success: true, payment ,message: 'Payment verified successfully' });
        } else {
            res.status(400).json({ success: false, message: 'Payment verification failed' });
        }
    }catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }

};


const updatePaymentStatus = async (req, res) => {

    const { order_Id, payment_Id } = req.body;
    if (!order_Id || !payment_Id) {
        return res.status(400).json({ success: false, message: 'Missing required fields: order_Id, payment_Id' });
    }
    try {
        const payment = await razorpay.payments.fetch(payment_Id);
        if (payment.order_id!==order_Id){
            return res.status(400).json({ success: false, message:'Invalid Request'});
        }
        const update = await Payment.findOneAndUpdate(
            { orderId: order_Id },
            { paymentId: payment_Id, status: (payment.status ==="captured")?'completed':payment.status },
            { new: true }
        );

      if (!update) {
        return res.status(404).json({ success: false, message: 'Payment not found' });
      }
      res.json({ success: true, message: 'Payment details saved successfully'});
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error',error: error.message  });
    }
  };


module.exports = {
    newOrder,
    verifyPayment,
    updatePaymentStatus
}