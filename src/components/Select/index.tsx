import { Bank, CreditCard, Money } from 'phosphor-react'
import { Container } from './styles'
import { MouseEvent } from 'react'
import { TypeSelect } from './typeSelect'

interface SelectProps {
  isSelect?: boolean
  setSelectedItem: (value: TypeSelect) => void
  type: TypeSelect
}

export function Select({
  type,
  setSelectedItem,
  isSelect = false,
}: SelectProps) {
  function handleClick(event: MouseEvent) {
    event.preventDefault()
    setSelectedItem(type)
  }

  const renderSelectItem = () => {
    switch (type) {
      case TypeSelect.CREDIT_CARD: {
        return (
          <Container
            onClick={(event: MouseEvent) => handleClick(event)}
            selected={isSelect}
          >
            <CreditCard size={22} /> <span>{type}</span>
          </Container>
        )
      }
      case TypeSelect.DEBIT_CARD: {
        return (
          <Container
            onClick={(event: MouseEvent) => handleClick(event)}
            selected={isSelect}
          >
            <Bank size={22} /> <span>{type}</span>
          </Container>
        )
      }
      case TypeSelect.MONEY: {
        return (
          <Container
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
