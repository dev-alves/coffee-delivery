import { NavLink } from 'react-router-dom'
import CoffeDeliveryLogo from '../../assets/coffe-delivery.svg'
import { Container } from './styles'
import { ButtonCart } from '../../styles/components/Cart'
import { ButtonType } from '../../styles/components/Cart/types'
import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <img src={CoffeDeliveryLogo} alt="" />
      <nav>
        <NavLink to="/" title="localização atual">
          <MapPin size={22} /> <span>Manaus, Amazonas</span>
        </NavLink>
        <NavLink to="/teste" title="carrinho de compras">
          <ButtonCart type={ButtonType.FULL} />
        </NavLink>
      </nav>
    </Container>
  )
}
