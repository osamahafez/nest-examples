import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class CreditCardService {

    async checkout() {

        // initialize stripe instance with api secret key and the api version (found in stripe dashboard under developers section)
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2020-03-02'
        });

        // set item price and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099,
            currency: 'usd',
        });
          
        // send client secret to frontend to handle credit card payments
        return {client_secret: paymentIntent.client_secret};
    }
}
