import { Button } from './styles'

interface ButtonPrimaryProps {
  text: string
  upperCase?: boolean
  handleSubmit: () => void
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
