import { NavLink } from 'react-router-dom'
import CoffeDeliveryLogo from '../../assets/coffe-delivery.svg'
import { Container } from './styles'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { ButtonFull } from '../Catalog/styles'
import { Coffe, CoffeContext } from '../../contexts/CoffeeContext'
import { useContext } from 'react'

export function Header() {
  const { coffes } = useContext(CoffeContext)
  const amountCoffes = coffes.reduce(
    (acc: number, curr: Coffe) => acc + curr.amount,
    0,
  )

  return (
    <Container>
      <img src={CoffeDeliveryLogo} alt="" />
      <nav>
        <NavLink to="/" title="localização atual">
          <MapPin size={22} /> <span>Manaus, Amazonas</span>
        </NavLink>
        <NavLink to="/cart" title="carrinho de compras">
          <ButtonFull>
            <div>
              <span>{amountCoffes}</span>
            </div>
            <ShoppingCartSimple size={22} />
          </ButtonFull>
        </NavLink>
      </nav>
    </Container>
  )
}
