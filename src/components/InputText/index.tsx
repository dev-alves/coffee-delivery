import { ChangeEvent, useState } from 'react'
import { Container, Input } from './styles'
import { useFormContext } from 'react-hook-form'

interface InputTextProps {
  text: string
  name: string
  id: string
  size: number
  isRequired?: boolean
  type?: string
}

export function InputText({
  text,
  name,
  id,
  isRequired = true,
  size,
  type = 'text',
}: InputTextProps) {
  const { register } = useFormContext()
  const field = register(name, { valueAsNumber: type === 'number' })
  const placeholder = !isRequired ? 'Opcional' : ''
  const [canShowText, setCanShowText] = useState(true)

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.value !== '') {
      setCanShowText(false)
    } else {
      setCanShowText(true)
    }
  }

  return (
    <Container>
      <Input
        {...field}
        onChange={handleOnChange}
        name={name}
        placeholder={placeholder}
        id={id}
        maxLength={50}
        size={size}
        type={type}
      />
      {canShowText && <span>{text}</span>}
    </Container>
  )
}
