// const stripe = require('stripe')(process.env.SECRET_KEY)
// const PaymentModel = require('../models/Payment');

// const payWithStripe = async (req, res) => {
//     try {
//         const { amount, token } = req.body;
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: 'usd',
//             payment_method: token.id,
//             confirm: true,
//         });
//         res.status(200).json({ status: 'Success', client_secret: paymentIntent.client_secret });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: "false", error: 'Internal Server Error' });
//     }
// };



// const getPayments = async (req, res, next) => {
//     try {
//         const payments = await PaymentModel.find({});
//         res.status(200).json(payments);
//     } catch (error) {
//         return next({ message: 'Internal Server Error' });
//     }
// };



// const addPayment = async (req, res, next) => {
//     const { ticket, ticketsBought, transactionNumber } = req.body
//     if (!ticket || !ticketsBought || !transactionNumber) {
//         return next({ message: 'All fields are required' })
//     }
//     try {
//         const payments = await PaymentModel.find({
//             purshaser:req.user.name,
//             ticket,
//             ticketsBought,
//             transactionNumber
//         });
//         res.status(200).json(payments);
//     } catch (error) {
//         return next({ message: 'Internal Server Error' });
//     }
// };



// const deletePayment = async (req, res, next) => {
//     try {
//         const paymentId = req.params.id;
//         await PaymentModel.findByIdAndDelete(paymentId);
//         res.status(200).json("Payment successfully deleted");
//     } catch (error) {
//         return next({ message: 'Internal Server Error' });
//     }
// };

// const updatePayment = async (req, res, next) => {
//     try {
//         const paymentId = req.params.id;
//         const updatedPaymentDetails = req.body;
//         await PaymentModel.findByIdAndUpdate(paymentId, updatedPaymentDetails, { new: true });
//         res.status(200).json('Payment successfully updated');
//     } catch (error) {
//         return next({ message: 'Internal Server Error' });
//     }
// };

// module.exports = {
//     getPayments,
//     deletePayment,
//     updatePayment,
//     payWithStripe,
//     addPayment
// };

