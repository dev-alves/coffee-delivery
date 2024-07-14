import { Button } from './styles'

interface ButtonPrimaryProps {
  text: string
  upperCase?: boolean
}

export function ButtonPrimary({ text, upperCase = true }: ButtonPrimaryProps) {
  return <Button>{upperCase ? text.toUpperCase() : text}</Button>
}
