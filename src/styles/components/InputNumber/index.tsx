import { Minus, Plus } from 'phosphor-react'
import { Container, Input } from './styles'
import { ChangeEvent, useState } from 'react'

export function InputNumber() {
  const [value, setValue] = useState(0)
  function handleMinusAction() {
    setValue((state) => (state > 0 ? state - 1 : state))
  }

  function handlePlusAction() {
    setValue((state) => state + 1)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value)
    setValue(value >= 0 ? value : 0)
  }

  return (
    <Container>
      <Minus weight="bold" onClick={handleMinusAction} />
      <Input
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
        value={value}
        maxLength={2}
      />
      <Plus weight="bold" onClick={handlePlusAction} />
    </Container>
  )
}
