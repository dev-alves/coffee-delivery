import styled from 'styled-components'

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

export const PaymentInfoContainer = styled.div`
  display: flex;
  button:nth-child(even) {
    margin: 0 0.75rem;
  }
`

export const FormInfoPaymentContainer = styled(BaseFormInfoContainer)`
  margin-top: 0.75rem;
`
