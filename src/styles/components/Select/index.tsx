import { CreditCard } from 'phosphor-react'
import { SelectDefault } from './styles'
import { MouseEvent } from 'react'

interface SelectProps {
  upperCase?: boolean
  isSelect?: boolean
  setSelectedItem: (value: boolean) => void
  text: string
}

export function Select({
  upperCase = true,
  text,
  setSelectedItem,
  isSelect = false,
}: SelectProps) {
  function handleClick(event: MouseEvent) {
    event.preventDefault()
    setSelectedItem(true)
  }

  return (
    <SelectDefault
      onClick={(event: MouseEvent) => handleClick(event)}
      selected={isSelect}
    >
      <CreditCard size={22} /> {upperCase ? text.toUpperCase() : text}
    </SelectDefault>
  )
}
