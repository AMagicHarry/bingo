const stripe = require('stripe')(process.env.SECRET_KEY)

const payWithStripe = async (req, res) => {
    try {
        const { amount, token } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method: token.id,
            confirm: true,
        });

        res.json({ client_secret: paymentIntent.client_secret });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }

};



module.exports = {
    payWithStripe,
    payWithGPay
};
