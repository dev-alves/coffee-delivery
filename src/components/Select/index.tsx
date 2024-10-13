import { Bank, CreditCard, Money } from 'phosphor-react'
import { Container } from './styles'
import { MouseEvent } from 'react'
import { PaymentMethod } from './typeSelect'
import { useFormContext } from 'react-hook-form'

interface SelectProps {
  registerElementName: string
  isSelect?: boolean
  setSelectedItem: (value: PaymentMethod) => void
  type: PaymentMethod
  isRequired?: boolean
  errorMessage?: string
}

export function Select({
  isRequired = true,
  registerElementName,
  type,
  setSelectedItem,
  isSelect = false,
  errorMessage,
}: SelectProps) {
  const { register, clearErrors, setValue } = useFormContext()
  function handleClick(event: MouseEvent) {
    const paymentMethodEnumValue = Object.entries(PaymentMethod).find(
      ([, value]) => value === type,
    )?.[0]
    event.preventDefault()
    setSelectedItem(type)
    setValue(registerElementName, paymentMethodEnumValue)
    clearErrors(registerElementName)
  }

  const renderSelectItem = () => {
    switch (type) {
      case PaymentMethod.CREDIT_CARD: {
        return (
          <Container
            $haserror={
              errorMessage && typeof errorMessage !== 'undefined'
                ? 'true'
                : 'false'
            }
            {...register(registerElementName, { required: isRequired })}
            onClick={(event: MouseEvent) => handleClick(event)}
            selected={isSelect}
          >
            <CreditCard size={22} /> <span>{type}</span>
          </Container>
        )
      }

      case PaymentMethod.DEBIT_CARD: {
        return (
          <Container
            $haserror={
              errorMessage && typeof errorMessage !== 'undefined'
                ? 'true'
                : 'false'
            }
            {...register(registerElementName)}
            onClick={(event: MouseEvent) => handleClick(event)}
            selected={isSelect}
          >
            <Bank size={22} /> <span>{type}</span>
          </Container>
        )
      }
      case PaymentMethod.MONEY: {
        return (
          <Container
            $haserror={
              errorMessage && typeof errorMessage !== 'undefined'
                ? 'true'
                : 'false'
            }
            {...register(registerElementName)}
            onClick={(event: MouseEvent) => handleClick(event)}
            selected={isSelect}
          >
            <Money size={22} /> <span>{type}</span>
          </Container>
        )
      }
    }
  }
  return renderSelectItem()
}
