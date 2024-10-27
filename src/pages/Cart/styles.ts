import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 2rem;
  justify-content: space-between;
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
`

export const FooterInfoLabels = styled.div`
  font-family: ${(props) => props.theme['text-s-regular'].font};
  font-size: ${(props) => props.theme['text-s-regular'].size};
  line-height: ${(props) => props.theme['text-s-regular'].lineHeight};
  font-weight: ${(props) => props.theme['text-s-regular'].weight};
  div:nth-child(even) {
    margin: 12px 0;
  }
  div:last-of-type {
    font-family: '${(props) => props.theme['text-l-bold'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-l-bold'].size};
    font-weight: ${(props) => props.theme['text-l-bold'].weight};
    color: ${(props) => props.theme['base-text']};
  }
`

export const FooterInfoValues = styled.div`
  text-align: right;
  font-family: ${(props) => props.theme['text-m-regular'].font};
  font-size: ${(props) => props.theme['text-m-regular'].size};
  line-height: ${(props) => props.theme['text-m-regular'].lineHeight};
  font-weight: ${(props) => props.theme['text-m-regular'].weight};

  div:nth-child(even) {
    margin: 12px 0;
  }

  div:not(last-of-type):before {
    content: 'R$';
    color: ${(props) => props.theme['base-text']};
  }

  div:last-of-type {
    &::before {
      content: 'R$';
    }
    font-family: '${(props) => props.theme['text-l-bold'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-l-bold'].size};
    font-weight: ${(props) => props.theme['text-l-bold'].weight};
    color: ${(props) => props.theme['base-text']};
  }
`

export const FooterButtonSubmitContainer = styled.div`
  padding-top: 24px;
  button {
    width: 100%;
  }
`

export const PlusAndMinusAndRemoveContainer = styled.div`
  display: flex;
`
