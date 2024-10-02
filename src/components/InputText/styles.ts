import styled from 'styled-components'

const BaseInputText = styled.input`
  width: ${(props) => Number(props.size) / 16}rem;
  height: 2.625rem;
  padding: 0.75rem;
  border: none;
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  outline: none;
  font-family: ${(props) => props.theme['text-s-regular'].font};
  line-height: ${(props) => props.theme['text-s-regular'].lineHeight};
  font-weight: ${(props) => props.theme['text-s-regular'].weight};

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    font-family: ${(props) => props.theme['text-s-regular'].font};
    font-style: italic;
    text-align: right;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Input = styled(BaseInputText)``

export const Container = styled.div`
  display: inline-block;
  position: relative;
  span {
    position: absolute;
    top: 12px;
    left: 12px;
    font-family: ${(props) => props.theme['text-s-regular'].font};
    color: ${(props) => props.theme['base-label']};
  }
`
