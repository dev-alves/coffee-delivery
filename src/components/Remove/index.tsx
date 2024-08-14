import { Trash } from 'phosphor-react'
import { Button } from './styles'

interface ButtonRemoveProps {
  text: string
  upperCase?: boolean
}

export function ButtonRemove({ text, upperCase = true }: ButtonRemoveProps) {
  return (
    <Button>
      <Trash color="#8047F8" /> {upperCase ? text.toUpperCase() : text}
    </Button>
  )
}
