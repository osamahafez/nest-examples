import { Injectable, Redirect } from '@nestjs/common';
import paypal from 'paypal-rest-sdk';

@Injectable()
export class PaypalService {
    
    generatePaymentRequest(req, res) {

        // these configurations come from my account on developer.paypal.com (using eng.osama.m.hafez@gmail.com)
        // under nest-paypal-test project
        // REFACTOR: change fields to environmental variables
        const paypal_config = {
            mode: 'sandbox', // sandbox or live
            client_id: 'AXcb-JP8ghRyec6wg0847hB_C-eK-aBKT7vJjME6q9VE7RYehXoWgJ4HhA9OjwtcAux0a5y0HujBX2AO',
            client_secret: 'EL5WznHOZnX--BE4dbs6wU-b43of8CRH63dXx4b8q4UCAQTIJ0h61YD7bTPTx-6NwwQWiLZerAU8vGXw',
        }

        paypal.configure(paypal_config);

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:8080/payment/paypal/execute",
                "cancel_url": "http://localhost:8080/payment/paypal/cancel"
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

    executePaymentRequest(req, res) {
        
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
}
