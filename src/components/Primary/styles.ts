import styled from 'styled-components'

export const BaseLabelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  height: 2.875rem;
  border-radius: 6px;
  border: none;
  font-family: ${(props) => props.theme['button-g-bold'].font}, sans-serif;
  cursor: pointer;
`

export const Button = styled(BaseLabelButton)`
  size: ${(props) => props.theme['button-g-bold'].size};
  line-height: ${(props) => props.theme['button-g-bold'].lineHeight};
  color: ${(props) => props.theme['base-white']};
  font-weight: ${(props) => props.theme['button-g-bold'].weight};
  background: ${(props) =>
    props.disabled ? props.theme['base-label'] : props.theme.yellow};
  transition: 0.3s;

  &:hover {
    background: ${(props) =>
      props.disabled ? props.theme['base-label'] : props.theme['yellow-dark']};
  }
`
