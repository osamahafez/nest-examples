import { Controller, Get } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';

@Controller('payment/credit-card')
export class CreditCardController {

    constructor(private readonly creditCardService: CreditCardService) {}

    @Get('checkout')
    checkout() {
        return this.creditCardService.checkout();
    }
}
