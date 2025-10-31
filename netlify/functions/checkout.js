const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { amount } = JSON.parse(event.body);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price_data: { currency: 'usd', product_data: { name: 'Wormhole 5D Entry' }, unit_amount: amount }, quantity: 1 }],
    mode: 'payment',
    success_url: 'https://wormhole5d.github.io/Wormhole5d/success.html',
    cancel_url: 'https://wormhole5d.github.io/Wormhole5d/',
  });

  return { statusCode: 200, body: JSON.stringify({ id: session.id }) };
};
