import { ButtonCart } from '../Cart'
import { ButtonType } from '../Cart/types'
import { InputNumber } from '../InputNumber'
import { Container } from './styles'

interface CatalogProperties {
  img: string
  alt: string
  types: string[]
  name: string
  description: string
}

export function Catalog({
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
        <InputNumber />
        <ButtonCart type={ButtonType.DEFAULT} amountValue={2} />
      </footer>
    </Container>
  )
}
