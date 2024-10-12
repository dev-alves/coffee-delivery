import { MouseEvent } from 'react'
import { Button } from './styles'

interface ButtonPrimaryProps {
  text: string
  upperCase?: boolean
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => void
}

export function ButtonPrimary({
  handleSubmit,
  text,
  upperCase = true,
}: ButtonPrimaryProps) {
  return (
    <Button onClick={handleSubmit}>
      {upperCase ? text.toUpperCase() : text}
    </Button>
  )
}
