import { Minus, Plus } from 'phosphor-react'
import { Container, InputReadOnly, PlusAndMinusContainer } from './styles'

interface PlusAndMinusProps {
  handleIncrement: () => void
  handleDecrement: () => void
  amount: number
}

export function PlusAndMinus({
  handleIncrement,
  handleDecrement,
  amount,
}: PlusAndMinusProps) {
  return (
    <Container>
      <PlusAndMinusContainer>
        <Minus weight="bold" onClick={handleDecrement} />
        <InputReadOnly readOnly value={amount} />
        <Plus weight="bold" onClick={handleIncrement} />
      </PlusAndMinusContainer>
    </Container>
  )
}
