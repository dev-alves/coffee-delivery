import { NavLink } from 'react-router-dom'
import CoffeDeliveryLogo from '../../assets/coffe-delivery.svg'
import { Container } from './styles'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { ButtonFull } from '../Catalog/styles'

export function Header() {
  return (
    <Container>
      <img src={CoffeDeliveryLogo} alt="" />
      <nav>
        <NavLink to="/" title="localização atual">
          <MapPin size={22} /> <span>Manaus, Amazonas</span>
        </NavLink>
        <NavLink to="/teste" title="carrinho de compras">
          <ButtonFull>
            <div>
              <span>{0}</span>
            </div>
            <ShoppingCartSimple size={22} />
          </ButtonFull>
        </NavLink>
      </nav>
    </Container>
  )
}
