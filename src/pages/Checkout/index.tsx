import DelivertImg from '../../assets/delivery.svg'
import { MapPin, Timer, CurrencyDollarSimple } from 'phosphor-react'
import {
  Container,
  ContainerAddress,
  ContainerDeliveryInfo,
  DeliveryCurrencyDollarSimpleContainer,
  DeliveryMapPinContainer,
  DeliveryTimerContainer,
} from './styles'
import { useLocation } from 'react-router-dom'

export function Checkout() {
  const { state } = useLocation()
  const { paymentMethod, bairro, rua, numero, cidade, uf } = state
  return (
    <Container>
      <ContainerAddress>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <ContainerDeliveryInfo>
          <DeliveryMapPinContainer>
            <div>
              <MapPin />
            </div>
            <p>
              Entrega em{' '}
              <span>
                {rua}, {numero}
              </span>{' '}
              <br />
              <span>
                {bairro} - {cidade}, {uf}
              </span>
            </p>
          </DeliveryMapPinContainer>
          <DeliveryTimerContainer>
            <div>
              <Timer />
            </div>
            <p>
              Previsão de entrega <br />
              <span>20 min - 30 min</span>
            </p>
          </DeliveryTimerContainer>
          <DeliveryCurrencyDollarSimpleContainer>
            <div>
              <CurrencyDollarSimple />
            </div>
            <p>
              Pagamento na entrega
              <br />
              <span>{paymentMethod}</span>
            </p>
          </DeliveryCurrencyDollarSimpleContainer>
        </ContainerDeliveryInfo>
      </ContainerAddress>
      <div>
        <img src={DelivertImg} alt="Delivery" />
      </div>
    </Container>
  )
}
