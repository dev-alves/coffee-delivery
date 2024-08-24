import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;
  width: 40rem;
  height: 39.3215rem;

  h1 {
    font-family: '${(props) => props.theme['text-title-xs'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-title-xs'].size};
    font-weight: ${(props) => props.theme['text-title-xs'].weight};
    line-height: ${(props) => props.theme['text-title-xs'].lineHeight};
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const Address = styled.div`
  display: flex;

  div:first-of-type {
    margin-right: 0.5rem;
  }

  div:nth-child(2) {
    margin-bottom: 2rem;
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-family: '${(props) => props.theme['text-m-regular'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-m-regular'].size};
    font-weight: ${(props) => props.theme['text-m-regular'].weight};
    line-height: ${(props) => props.theme['text-m-regular'].lineHeight};
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: '${(props) => props.theme['text-s-regular'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-s-regular'].size};
    font-weight: ${(props) => props.theme['text-s-regular'].weight};
    line-height: ${(props) => props.theme['text-s-regular'].lineHeight};
    color: ${(props) => props.theme['base-text']};
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

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
