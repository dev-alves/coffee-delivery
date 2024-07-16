import { Minus, Plus } from 'phosphor-react'
import { InputContainer, Input } from './styles'
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
    setValue(Number(event.target.value))
  }

  return (
    <InputContainer>
      <Minus weight="bold" onClick={handleMinusAction} />
      <Input
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
        value={value}
        maxLength={2}
      />
      <Plus weight="bold" onClick={handlePlusAction} />
    </InputContainer>
  )
}