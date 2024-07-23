import { ButtonCart } from '../Cart'
import { ButtonType } from '../Cart/types'
import { InputNumber } from '../InputNumber'
import { Container } from './styles'

interface CatalogProperties {
  img: string
  alt: string
  type: string
  name: string
  description: string
}

export function Catalog({
  img,
  alt,
  type,
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
        <span>{type}</span>
      </header>
      <main>
        <span>{name}</span>
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
