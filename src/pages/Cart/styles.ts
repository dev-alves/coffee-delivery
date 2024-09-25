import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;
`

const BaseFormInfoContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  header {
    display: flex;
    svg {
      margin-right: 0.5rem;
      color: ${(props) => props.theme['yellow-dark']};
    }
    h1 {
      font-family: '${(props) => props.theme['text-m-regular'].font}',
        sans-serif;
      font-size: ${(props) => props.theme['text-m-regular'].size};
      font-weight: ${(props) => props.theme['text-m-regular'].weight};
      line-height: ${(props) => props.theme['text-m-regular'].lineHeight};
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-family: '${(props) => props.theme['text-s-regular'].font}',
        sans-serif;
      font-size: ${(props) => props.theme['text-s-regular'].size};
      font-weight: ${(props) => props.theme['text-s-regular'].weight};
      line-height: ${(props) => props.theme['text-s-regular'].lineHeight};
      color: ${(props) => props.theme['base-text']};
    }
    margin-bottom: 2rem;
  }
`

export const FormInfoAddressContainer = styled(BaseFormInfoContainer)``

export const FormInfoPaymentContainer = styled(BaseFormInfoContainer)`
  margin-top: 0.75rem;
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
`

export const OrderAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 39.3215rem;
  & > h1 {
    font-family: '${(props) => props.theme['text-title-xs'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-title-xs'].size};
    font-weight: ${(props) => props.theme['text-title-xs'].weight};
    line-height: ${(props) => props.theme['text-title-xs'].lineHeight};
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const AddressInputsContainer = styled.div`
  div:not(:last-child) {
    margin-bottom: 1rem;
  }

  div input:nth-child(2) {
    margin-left: 0.75rem;
  }

  div input:not(:last-child):not(:first-child) {
    margin: 0 0.75rem;
  }
`

export const PaymentInfoContainer = styled.div`
  display: flex;
  button:nth-child(even) {
    margin: 0 0.75rem;
  }
`

export const DetailsOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  height: 31.125rem;
  h1 {
    font-family: '${(props) => props.theme['text-title-xs'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-title-xs'].size};
    font-weight: ${(props) => props.theme['text-title-xs'].weight};
    line-height: ${(props) => props.theme['text-title-xs'].lineHeight};
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const FormInfoDetailsOrder = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const CoffesContainer = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-spacing: 24px;
  }
  hr {
    margin: 24px 0;
    border: 1px ${(props) => props.theme['base-button']} solid;
  }
`

export const CoffeAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  img {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }

  div span div {
    display: flex;
    flex-direction: column;
  }
`

export const CoffeAmountDetailsContainer = styled.div`
  display: flex;
  div {
    span {
      font-family: ${(props) => props.theme['text-m-regular'].font};
      font-weight: ${(props) => props.theme['text-m-regular'].weight};
      font-size: ${(props) => props.theme['text-m-regular'].size};
      display: inline-block;
      margin-bottom: 8px;
    }
  }
`

export const CoffesInputsContainer = styled.div`
  display: flex;
`

export const CoffePlusAndMinusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
  height: 32px;
  padding: 0.9rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.purple};
    &:hover {
      color: ${(props) => props.theme['base-title']};
    }
  }
`

export const CoffeValueContainer = styled.div`
  span {
    font-family: '${(props) => props.theme['text-m-bold'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-m-bold'].size};
    font-weight: ${(props) => props.theme['text-m-bold'].weight};
    color: ${(props) => props.theme['base-text']};
  }

  span:before {
    content: 'R$';
    font-family: '${(props) => props.theme['text-m-bold'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-m-bold'].size};
    font-weight: ${(props) => props.theme['text-m-bold'].weight};
    color: ${(props) => props.theme['base-text']};
  }
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &:first-child {
    flex-direction: column;
  }
`
