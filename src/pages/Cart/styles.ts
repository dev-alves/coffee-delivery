import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;
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

const BaseFormInfoContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
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
  display: flex;
  flex-direction: column;
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
  div:nth-child(2) > button:nth-child(1) {
    margin: 0 0.75rem;
  }
`
