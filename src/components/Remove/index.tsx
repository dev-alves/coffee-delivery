import { Trash } from 'phosphor-react'
import { Button } from './styles'
import { MouseEvent } from 'react'

interface ButtonRemoveProps {
  text: string
  upperCase?: boolean
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export function ButtonRemove({
  handleClick,
  text,
  upperCase = true,
}: ButtonRemoveProps) {
  return (
    <Button onClick={handleClick}>
      <Trash color="#8047F8" /> {upperCase ? text.toUpperCase() : text}
    </Button>
  )
}
