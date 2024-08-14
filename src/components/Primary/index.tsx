import { Container } from './styles'

interface ButtonPrimaryProps {
  text: string
  upperCase?: boolean
}

export function ButtonPrimary({ text, upperCase = true }: ButtonPrimaryProps) {
  return <Container>{upperCase ? text.toUpperCase() : text}</Container>
}
