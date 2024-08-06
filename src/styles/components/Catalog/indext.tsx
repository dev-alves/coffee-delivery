import { useContext, useEffect } from 'react'
import { ButtonCart } from '../Cart'
import { ButtonType } from '../Cart/types'
import { Container, ContainerInput, Input } from './styles'
import { Minus, Plus } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CoffeContext } from '../../../contexts/CoffeeContext'

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

  const { register, setValue, getValues } = useFormContext()
  const { setAmountCoffes } = useContext(CoffeContext)
  const inputNumberId = 'inputNumber#' + id

  useEffect(() => {
    const newValue = getValues(inputNumberId) > 0 ? getValues(inputNumberId) : 0
    setValue(inputNumberId, newValue)
  })

  function handlePlusClick(e) {
    const value = getValues(e.target.id)
    setValue(e.target.id, value >= 0 ? value + 1 : 0)
    setAmountCoffes(
      Object.values(getValues()).reduce(
        (acc, currentValue) => currentValue + acc,
        0,
      ),
    )
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
          <Minus weight="bold" id={inputNumberId} />
          <Input
            id={inputNumberId}
            {...register(inputNumberId)}
            maxLength={2}
          />
          <Plus weight="bold" onClick={handlePlusClick} id={inputNumberId} />
        </ContainerInput>
        <ButtonCart type={ButtonType.DEFAULT} amountValue={2} />
      </footer>
    </Container>
  )
}
