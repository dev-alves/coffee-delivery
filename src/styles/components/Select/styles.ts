import styled from 'styled-components'

interface StyleProps {
  selected?: boolean
}

export const BaseSelect = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.166rem;
  height: 3.1875rem;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.purple}` : 'none'};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  font-family: ${(props) => props.theme['button-m-regular'].font};
  font-weight: ${(props) => props.theme['button-m-regular'].weight};
  transition: 0.3s;

  svg {
    margin-right: 0.75rem;
    color: ${(props) => props.theme.purple};
  }

  svg path {
    fill: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const SelectDefault = styled(BaseSelect)``
