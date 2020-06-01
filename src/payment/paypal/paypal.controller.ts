import { Controller, Get, Res, Req } from '@nestjs/common';
import { PaypalService } from './paypal.service';

@Controller('payment/paypal')
export class PaypalController {
    
    constructor(private readonly paypalService: PaypalService) {}
    
    @Get()
    getPaypalData(@Req() req, @Res() res) {
        return this.paypalService.generatePaymentRequest(req, res);
    }
}
