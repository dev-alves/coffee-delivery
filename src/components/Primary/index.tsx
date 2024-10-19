import { Button } from './styles'

interface ButtonPrimaryProps {
  text: string
  upperCase?: boolean
  handleSubmit: () => void
  disabled?: boolean
}

export function ButtonPrimary({
  handleSubmit,
  text,
  upperCase = true,
  disabled = false,
}: ButtonPrimaryProps) {
  return (
    <Button onClick={handleSubmit} disabled={disabled}>
      {upperCase ? text.toUpperCase() : text}
    </Button>
  )
}
