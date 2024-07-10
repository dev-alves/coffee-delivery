import styled from 'styled-components'

export const BaseCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  transition: 0.3s;

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

export const Button = styled(BaseCartButton)``
