const { Payment , mongoose }= require('../../../models/User/paymentModel')
const razorpay = require('../../../config/razorpay');

// Get all Payment records

const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find({});
        const totalCount = payments.length;
        if (totalCount === 0) {
            return res.status(404).json({ message: 'Payment records not found' });
        }
        res.json({
            Count: totalCount,
            Payments: payments
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Get Payment by MongoDB _id

const getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid payment ID' });
        }
        const payment = await Payment.findById(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment record not found' });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Get Payment Status / Details from Razorpay by Payment ID

const checkPaymentStatus = async (req, res) => {
    const { paymentId } = req.params;
    try {
        const payment = await razorpay.payments.fetch(paymentId);
        if (payment.status === 'failed' || payment.status === 'cancelled') {
            return res.json({ success: true, status: payment.status, message:  payment.error_reason, payment });
        }
        return res.json({ success: true, status: payment.status, payment });
    } catch (error) {
        return res.status(500).json({ success: false,  message: 'Internal server error', error: error.error.description});
    }
};


//Get Order Details by ID

const getOrderById = async (req, res) => {
    try {
        const { orderId }= req.params;  
        const order = await razorpay.orders.fetch(orderId)
        const payment = await Payment.findOne({ orderId: orderId });
        if(!payment){
            return res.status(404).json({ success: false, message: 'Payment record not found for this Order ID' });
        }
        res.json({ success: true, payment,order});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error', error: error.error.description});
    }
};

// Get Payment Records by ClientID

const getbyClientId = async (req, res) => {
    try {
        const payments = await Payment.find({ clientId: req.params.clientId });
        const totalCount = payments.length;
        if (totalCount === 0) {
            return res.status(404).json({ message: 'Payment records not found for this Client ID' });
        }
        res.json({
            Count: totalCount,
            Payments: payments
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Payment Records by TherapistID

const getByTherapistId = async (req, res) => {
    try {
        const payments = await Payment.find({ therapistId: req.params.therapistId });
        const totalCount = payments.length;
        if (totalCount === 0) {
            return res.status(404).json({ message: 'Payment records not found for this Therapist ID' });
        }
        res.json({
            Count: totalCount,
            Payments: payments
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllPayments,
    getPaymentById,
    checkPaymentStatus,
    getOrderById,
    getbyClientId,
    getByTherapistId
}

