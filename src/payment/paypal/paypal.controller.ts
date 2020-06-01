import { Controller, Get, Res, Req } from '@nestjs/common';
import { PaypalService } from './paypal.service';

@Controller('payment/paypal')
export class PaypalController {
    
    constructor(private readonly paypalService: PaypalService) {}
    
    @Get('generate')
    generatePaypalRequest(@Req() req, @Res() res) {
        return this.paypalService.generatePaypalRequest(req, res);
    }

    @Get('execute')
    executePaypalRequest(@Req() req, @Res() res) {
        return this.paypalService.executePaypalRequest(req, res);
    }

    @Get('cancel')
    cancelPaypalRequest(@Req() req, @Res() res) {
        return this.paypalService.cancelPaypalRequest(req, res);
    }
}
