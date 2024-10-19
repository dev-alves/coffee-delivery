import styled from 'styled-components'
import {
  CurrencyDollarSimpleContainer,
  MapPinContainer,
  TimerContainer,
} from '../Home/styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 3.75rem;
`
export const ContainerAddress = styled.div`
  h1 {
    font-family: '${(props) => props.theme['text-title-l'].font}', sans-serif;
    font-weight: ${(props) => props.theme['text-title-l'].weight};
    line-height: ${(props) => props.theme['text-title-l'].lineHeight};
    font-size: ${(props) => props.theme['text-title-l'].size};
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-family: '${(props) => props.theme['text-l-regular'].font}', sans-serif;
    font-weight: ${(props) => props.theme['text-l-regular'].weight};
    line-height: ${(props) => props.theme['text-l-regular'].lineHeight};
    font-size: ${(props) => props.theme['text-l-regular'].size};
    color: ${(props) => props.theme['base-subtitle']};
  }

  margin-right: 6.375rem;
`
export const ContainerDeliveryInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 2rem;

  margin-top: 2.5rem;
  border: 1px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  padding: 2.5rem;
  p {
    font-family: '${(props) => props.theme['text-m-regular'].font}', sans-serif;
    font-weight: ${(props) => props.theme['text-m-regular'].weight};
    line-height: ${(props) => props.theme['text-m-regular'].lineHeight};
    font-size: ${(props) => props.theme['text-m-regular'].size};
    color: ${(props) => props.theme['base-text']};
  }
`

export const ContainerTitleInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const DeliveryMapPinContainer = styled(MapPinContainer)`
  span:first-of-type {
    font-weight: bold;
  }
`

export const DeliveryTimerContainer = styled(TimerContainer)`
  span {
    font-weight: bold;
  }
`

export const DeliveryCurrencyDollarSimpleContainer = styled(
  CurrencyDollarSimpleContainer,
)`
  span {
    font-weight: bold;
  }
`
