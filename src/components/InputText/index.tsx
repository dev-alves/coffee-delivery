import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import { Container, Input } from './styles'
import { useFormContext } from 'react-hook-form'

interface InputTextProps {
  text: string
  name: string
  id: string
  size?: number
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
  const inputRef = useRef<HTMLInputElement>()

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.value !== '') {
      setCanShowText(false)
    } else {
      setCanShowText(true)
    }
  }

  function handleClick(event: MouseEvent) {
    if (
      event.target instanceof HTMLSpanElement ||
      event.target instanceof HTMLInputElement
    )
      inputRef?.current?.focus()
  }

  return (
    <Container size={size} onClick={handleClick}>
      <Input
        {...field}
        onChange={handleOnChange}
        name={name}
        placeholder={placeholder}
        id={id}
        maxLength={50}
        size={size}
        type={type}
        ref={(e) => {
          field.ref(e)
          if (e) {
            inputRef.current = e
          }
        }}
      />
      {canShowText && <span>{text}</span>}
    </Container>
  )
}
