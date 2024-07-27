import {
  CoffeContainer,
  Container,
  PackageContainer,
  ShoppingCartContainer,
  TimerContainer,
} from './styles'
import CoffeLogoMain from '../../assets/coffe-logo-main.svg'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'

export function Home() {
  return (
    <Container>
      <div>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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
    </Container>
  )
}
