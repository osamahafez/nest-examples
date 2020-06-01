import { Module } from '@nestjs/common';
import { PaypalService } from './paypal/paypal.service';
import { PaypalController } from './paypal/paypal.controller';

@Module({
  providers: [PaypalService],
  controllers: [PaypalController]
})
export class PaymentModule {}
