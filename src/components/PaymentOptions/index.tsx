import { CurrencyDollar } from 'phosphor-react'
import { FormInfoPaymentContainer, PaymentInfoContainer } from './styles'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethod } from '../Select/typeSelect'
import { Select } from '../Select'

export function PaymentOptions() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>()

  const {
    formState: { errors },
  } = useFormContext()

  return (
    <FormInfoPaymentContainer>
      <header>
        <div>
          <CurrencyDollar />
        </div>
        <div>
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>
      <PaymentInfoContainer>
        {Object.values(PaymentMethod).map((payment) => {
          return (
            <Select
              key={payment}
              registerElementName={'paymentMethod'}
              type={payment}
              setSelectedItem={setSelectedPaymentMethod}
              isSelect={selectedPaymentMethod === payment}
              errorMessage={errors.paymentMethod?.message?.toString()}
            />
          )
        })}
      </PaymentInfoContainer>
    </FormInfoPaymentContainer>
  )
}
