import { useContext, useEffect, useRef } from 'react'

import { Button, Container, ContainerInput, Input } from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { CoffeContext } from '../../contexts/CoffeeContext'

interface CatalogProperties {
  id: number
  img: string
  alt: string
  types: string[]
  name: string
  description: string
}

export function Catalog({
  id,
  img,
  alt,
  types,
  name,
  description,
}: CatalogProperties) {
  const formatterBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const { register, setValue, getValues } = useForm()
  const inputRef = useRef<HTMLInputElement>()
  const { setNewCoffe } = useContext(CoffeContext)
  const inputNumberId = 'inputNumber#' + id
  const inputRegistered = register(inputNumberId)

  useEffect(() => {
    setValue(inputNumberId, 0)
  }, [inputNumberId, setValue])

  function handleIncrement() {
    if (inputRef.current) {
      const { id, value } = inputRef.current
      setValue(id, Number(value) >= 0 ? Number(value) + 1 : 0)
    }
  }

  function handleDecrement() {
    if (inputRef.current) {
      const value = getValues(inputRef.current.id)
      if (value > 0) {
        setValue(inputRef.current.id, value - 1)
      }
    }
  }

  function handleAddNewItemOnCart() {
    if (inputRef.current) {
      const { value } = inputRef.current
      if (Number(value) > 0) {
        setNewCoffe({
          id: Number(id),
          img,
          alt,
          types,
          name,
          description,
          amount: Number(value),
        })
      }
    }
  }

  return (
    <Container>
      <header>
        <img src={img} alt={alt} />
        {types.length > 0 && (
          <div>
            {types.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        )}
      </header>
      <main>
        <div>
          <span>{name}</span>
        </div>
        <p>{description}</p>
      </main>
      <footer>
        <span>{formatterBR.format(9.9).replace('R$', '')}</span>
        <ContainerInput>
          <Minus weight="bold" onClick={handleDecrement} />
          <Input
            id={inputNumberId}
            {...inputRegistered}
            maxLength={2}
            ref={(e) => {
              inputRegistered.ref(e)
              if (e) {
                inputRef.current = e
              }
            }}
          />
          <Plus weight="bold" onClick={handleIncrement} />
        </ContainerInput>
        <Button>
          <ShoppingCartSimple size={22} onClick={handleAddNewItemOnCart} />
        </Button>
      </footer>
    </Container>
  )
}
