import styled from 'styled-components'

const BaseInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4.5rem;
  height: 2rem;
  padding: 0.5rem;
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
export const ButtonPlus = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme['base-button']};

  span {
    color: ${(props) => props.theme.purple};
    font-size: 0.875rem;
  }
`

export const InputContainer = styled(BaseInputContainer)``

export const Input = styled.input`
  text-align: center;
  margin-left: 4px;
  margin-right: 4px;
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
