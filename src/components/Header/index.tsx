import { NavLink } from 'react-router-dom'
import CoffeDeliveryLogo from '../../assets/coffe-delivery.svg'
import { Container } from './styles'
import { ButtonCart } from '../../styles/components/Cart'
import { ButtonType } from '../../styles/components/Cart/types'
import { MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { amount } = useContext(CoffeContext)

  return (
    <Container>
      <img src={CoffeDeliveryLogo} alt="" />
      <nav>
        <NavLink to="/" title="localização atual">
          <MapPin size={22} /> <span>Manaus, Amazonas</span>
        </NavLink>
        <NavLink to="/teste" title="carrinho de compras">
          <ButtonCart type={ButtonType.FULL} amountValue={amount} />
        </NavLink>
      </nav>
    </Container>
  )
}
