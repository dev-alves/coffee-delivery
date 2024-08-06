import {
  CoffeContainer,
  InfoContainer,
  CartContainer,
  PackageContainer,
  ShoppingCartContainer,
  TimerContainer,
  Container,
} from './styles'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { Catalog } from '../../styles/components/Catalog/indext'

import CoffeLogoMain from '../../assets/coffe-logo-main.svg'
import ExpressoTradicionalImg from '../../assets/expresso-tradicional.svg'
import ExpressoAmericanoImg from '../../assets/expresso-americano.svg'
import ExpressoCremosoImg from '../../assets/expresso-cremoso.svg'
import ExpressoGeladoImg from '../../assets/expresso-gelado.svg'
import CafeComLeiteImg from '../../assets/cafe-com-leite.svg'
import CapuccinoImg from '../../assets/capuccino.svg'
import LatteImg from '../../assets/latte.svg'
import MacchiatoImg from '../../assets/macchiato.svg'

import { FormProvider, useForm } from 'react-hook-form'

const api = [
  {
    id: 1,
    img: ExpressoTradicionalImg,
    alt: 'Expresso tradicional',
    types: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: 2,
    img: ExpressoAmericanoImg,
    alt: 'Expresso americano',
    types: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: 3,
    img: ExpressoCremosoImg,
    alt: 'Expresso cremoso',
    types: ['Tradicional'],
    name: 'Expresso cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: 4,
    img: ExpressoGeladoImg,
    alt: 'Expresso gelado',
    types: ['Tradicional', 'Gelado'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: 5,
    img: CafeComLeiteImg,
    alt: 'Café com Leite',
    types: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: 6,
    img: LatteImg,
    alt: 'Latte',
    types: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    id: 7,
    img: CapuccinoImg,
    alt: 'Capuccino',
    types: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: 8,
    img: MacchiatoImg,
    alt: 'Macchiato',
    types: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
]

export function Home() {
  const newCoffeForm = useForm()
  const { handleSubmit } = newCoffeForm

  function handleCoffeForm(data) {
    console.log(data)
  }

  return (
    <Container>
      <InfoContainer>
        <div>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </section>
          <section>
            <ShoppingCartContainer>
              <div>
                <ShoppingCartSimple />
              </div>
              <span>Compra simples e segura</span>
            </ShoppingCartContainer>
            <PackageContainer>
              <div>
                <Package />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </PackageContainer>
            <TimerContainer>
              <div>
                <Timer />
              </div>
              <span>Entrega rápida e rastreada</span>
            </TimerContainer>
            <CoffeContainer>
              <div>
                <Coffee />
              </div>
              <span>O café fresquinho até você</span>
            </CoffeContainer>
          </section>
        </div>
        <div>
          <img src={CoffeLogoMain} alt="" />
        </div>
      </InfoContainer>
      <h1>Nosso café</h1>
      <CartContainer>
        <FormProvider {...newCoffeForm}>
          <form onSubmit={handleSubmit(handleCoffeForm)}>
            {api.map((data) => (
              <Catalog
                key={data.id}
                id={data.id}
                img={data.img}
                alt={data.alt}
                types={data.types}
                name={data.name}
                description={data.description}
              />
            ))}
          </form>
        </FormProvider>
      </CartContainer>
    </Container>
  )
}
