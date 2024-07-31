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

export function Home() {
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
        <Catalog
          img={ExpressoTradicionalImg}
          alt="Expresso tradicional"
          types={['Tradicional']}
          name="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
        />
        <Catalog
          img={ExpressoAmericanoImg}
          alt="Expresso americano"
          types={['Tradicional']}
          name="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
        />
        <Catalog
          img={ExpressoCremosoImg}
          alt="Expresso cremoso"
          types={['Tradicional']}
          name="Expresso Cremoso"
          description="Café expresso tradicional com espuma cremosa"
        />
        <Catalog
          img={ExpressoGeladoImg}
          alt="Expresso gelado"
          types={['Tradicional', 'Gelado']}
          name="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
        />
      </CartContainer>
    </Container>
  )
}
