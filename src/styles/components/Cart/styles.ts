import styled from 'styled-components'

export const BaseCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;
`

export const Button = styled(BaseCartButton)`
  background: ${(props) => props.theme['purple-dark']};
  svg {
    color: ${(props) => props.theme['base-card']};
  }

  svg path {
    fill: ${(props) => props.theme['base-card']};
  }

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

export const ButtonFull = styled(BaseCartButton)`
  position: relative;
  background: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  svg path {
    fill: ${(props) => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 100%;
    background: ${(props) => props.theme['yellow-dark']};
    top: -5px;
    right: -5px;
    font-size: ${(props) => props.theme['text-s-bold'].size};
    line-height: ${(props) => props.theme['text-s-bold'].lineHeight};
    font-weight: ${(props) => props.theme['text-s-bold'].weight};
    color: ${(props) => props.theme['base-white']};
  }
`
