import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const PlusAndMinusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
  height: 32px;
  padding: 0.9rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.purple};
    &:hover {
      color: ${(props) => props.theme['base-title']};
    }
  }
`

export const InputReadOnly = styled.input`
  text-align: center;
  width: 1.25rem;
  height: 1.25rem;
  border: none;
  outline: none;
  background: ${(props) => props.theme['base-button']};
  font-family: ${(props) => props.theme['text-m-regular'].font};
  line-height: ${(props) => props.theme['text-m-regular'].lineHeight};
  font-weight: ${(props) => props.theme['text-m-regular'].weight};
  font-size: ${(props) => props.theme['text-m-regular'].size};
`
