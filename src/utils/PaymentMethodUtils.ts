import { PaymentMethod } from '../components/Select/typeSelect'

export class PaymentMethodUtils {
  static getValueFromEnum(paymentMethod: string) {
    switch (paymentMethod) {
      case 'CREDIT_CARD': {
        return PaymentMethod.CREDIT_CARD
      }

      case 'DEBIT_CARD': {
        return PaymentMethod.DEBIT_CARD
      }
      case 'MONEY': {
        return PaymentMethod.MONEY
      }
    }
  }
}
