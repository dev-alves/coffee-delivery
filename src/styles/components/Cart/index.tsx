import { ShoppingCartSimple } from 'phosphor-react'
import { Button, ButtonFull } from './styles'
import { ButtonType } from './types'

interface ButtonCartProps {
  type: ButtonType
  amountValue?: number
}

export function ButtonCart({ type, amountValue }: ButtonCartProps) {
  switch (type) {
    case ButtonType.DEFAULT: {
      return (
        <Button>
          <ShoppingCartSimple size={22} />
        </Button>
      )
    }

    case ButtonType.FULL: {
      return (
        <ButtonFull>
          <div>
            <span>{amountValue}</span>
          </div>
          <ShoppingCartSimple size={22} />
        </ButtonFull>
      )
    }

    default:
      throw new Error('Button type is wrong')
  }
}
