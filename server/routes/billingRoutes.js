const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe_payments', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 50000,
            currency: 'inr',
            description: 'Rs.500 for 50 credits',
            source: req.body.id
        })

        console.log(charge);
        req.user.credits += 50;
        const user = await req.user.save();

        res.send(user);
    })

}