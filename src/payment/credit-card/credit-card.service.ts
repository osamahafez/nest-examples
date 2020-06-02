import { Injectable } from '@nestjs/common';
const Stripe = require('stripe');

@Injectable()
export class CreditCardService {

    async checkout() {

        const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099,
            currency: 'usd',
        });
          
        return {client_secret: paymentIntent.client_secret};
    }
}
