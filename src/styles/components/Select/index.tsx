import { CreditCard } from 'phosphor-react'
import { SelectDefault } from './styles'
import { useState } from 'react'

interface SelectProps {
  upperCase?: boolean
  text: string
}

export function Select({ upperCase = true, text }: SelectProps) {
  const [selected, setSelect] = useState(false)

  function handleClick() {
    event.preventDefault()
    setSelect(true)
  }

  return (
    <SelectDefault onClick={handleClick} selected={selected}>
      <CreditCard size={22} /> {upperCase ? text.toUpperCase() : text}
    </SelectDefault>
  )
}
