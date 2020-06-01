import { Injectable, Redirect } from '@nestjs/common';
import paypal from 'paypal-rest-sdk';

@Injectable()
export class PaypalService {
    
    generatePaypalRequest(req, res) {

        // these configurations come from my gmail account on developer.paypal.com
        // under nest-paypal-test project
        const paypal_config = {
            mode: (process.env.NODE_ENV == 'development') ? 'sandbox' : 'live',
            client_id: process.env.PAYPAL_CLIENT_ID,
            client_secret: process.env.PAYPAL_CLIENT_SECRET,
        }

        paypal.configure(paypal_config);

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": `${process.env.APP_URL}/payment/paypal/execute`,
                "cancel_url": `${process.env.APP_URL}/payment/paypal/cancel`
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "100",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "100"
                },
                "description": "This is the payment description."
            }]
        };
        
        
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } 
            else {
                for (let i=0; i<payment.links.length; i++) {
                    //Redirect user to this endpoint for redirect url
                    if (payment.links[i].rel === 'approval_url') {
                        console.log(payment.links[i].href);
                        res.redirect(payment.links[i].href);
                    }
                }
                console.log("Create Payment Response");
                console.log(payment);
            }
        });

    }

    executePaypalRequest(req, res) {
        
        const execute_payment_json = {
            "payer_id": req.query.PayerID,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "100"
                }
            }]
        };
        
        const paymentId = req.query.paymentId;
        
        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log("Get Payment Response");
                console.log(JSON.stringify(payment));
            }
        });
    }

    cancelPaypalRequest(req, res) {
        res.send('Payment Cancelled');
    }
}
