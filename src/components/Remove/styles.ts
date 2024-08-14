import styled from 'styled-components'

export const BaseButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.69rem;
  height: 2rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-family: ${(props) => props.theme['button-m-regular'].font}, sans-serif;
  font-size: ${(props) => props.theme['button-m-regular'].size};
  line-height: ${(props) => props.theme['button-m-regular'].lineHeight};
  font-weight: ${(props) => props.theme['button-m-regular'].weight};
  cursor: pointer;
  transition: 0.6s;

  svg {
    margin-right: 4px;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const Button = styled(BaseButtonRemove)``
