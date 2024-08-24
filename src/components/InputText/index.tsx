import { Input } from './styles'

interface InputTextProps {
  name: string
  id: string
  size: number
  isRequired: boolean
}

export function InputText({
  name,
  id,
  isRequired = false,
  size,
}: InputTextProps) {
  const placeholder = !isRequired ? 'Opcional' : ''
  return (
    <Input
      name={name}
      placeholder={placeholder}
      id={id}
      maxLength={50}
      size={size}
    />
  )
}
