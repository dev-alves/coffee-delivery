import { ChangeEvent, useState } from 'react'
import { Container, Input } from './styles'
import { useFormContext } from 'react-hook-form'

interface InputTextProps {
  text: string
  name: string
  id: string
  size: number
  isRequired: boolean
}

export function InputText({
  text,
  name,
  id,
  isRequired = false,
  size,
}: InputTextProps) {
  const { register } = useFormContext()
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
        {...register(name)}
        onChange={handleOnChange}
        name={name}
        placeholder={placeholder}
        id={id}
        maxLength={50}
        size={size}
      />
      {canShowText && <span>{text}</span>}
    </Container>
  )
}
