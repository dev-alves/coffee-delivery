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
  price: number
}

export function Catalog({
  id,
  img,
  alt,
  types,
  name,
  description,
  price,
}: CatalogProperties) {
  const formatterBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const { register, setValue, getValues } = useForm()
  const inputRef = useRef<HTMLInputElement>()
  const { coffes, setNewCoffe, deleteItem } = useContext(CoffeContext)
  const inputNumberId = 'inputNumber#' + id
  const inputRegistered = register(inputNumberId)

  useEffect(() => {
    const coffeExists = coffes.filter((coffe) => coffe.id === id)
    setValue(
      inputNumberId,
      coffeExists.length > 0
        ? coffes.filter((coffe) => coffe.id === id)[0]?.amount
        : 0,
    )
  }, [inputNumberId, coffes, id, setValue])

  function handleIncrement(coffeId: number) {
    if (inputRef.current) {
      const { id, value } = inputRef.current
      const coffe = coffes.filter((c) => c.id === coffeId)[0]
      if (coffe) {
        coffe.amount++
        setNewCoffe(coffe)
      } else {
        setValue(id, Number(value) >= 0 ? Number(value) + 1 : 0)
      }
    }
  }

  function handleDecrement(coffeId: number) {
    if (inputRef.current) {
      const value = getValues(inputRef.current.id)
      if (value > 0) {
        const { id, value } = inputRef.current
        const coffe = coffes.filter((c) => c.id === coffeId)[0]
        if (coffe) {
          if (coffe.amount === 1) {
            deleteItem(coffe)
          } else {
            coffe.amount--
            setNewCoffe(coffe)
          }
        } else {
          setValue(id, Number(value) >= 0 ? Number(value) - 1 : 0)
        }
      }
    }
  }

  // TODO: Verificar se o elemento existe na lista e, se existir, incrementar o amount
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
          price,
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
        <span>{formatterBR.format(price).replace('R$', '')}</span>
        <ContainerInput>
          <Minus weight="bold" onClick={() => handleDecrement(id)} />
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
          <Plus weight="bold" onClick={() => handleIncrement(id)} />
        </ContainerInput>
        <Button>
          <ShoppingCartSimple size={22} onClick={handleAddNewItemOnCart} />
        </Button>
      </footer>
    </Container>
  )
}
