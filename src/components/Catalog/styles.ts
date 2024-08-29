import styled from 'styled-components'

const BaseCatalogComponent = styled.div`
  width: 16rem;
  height: 18.375rem;
  background: ${(props) => props.theme['base-card']};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 37px;
  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 16px;

    img {
      position: relative;
      top: -14px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        padding: 4px 8px;
        border-radius: 100px;
        background: ${(props) => props.theme['yellow-light']};
        font-family: ${(props) => props.theme['tag-bold'].font};
        font-size: ${(props) => props.theme['tag-bold'].size};
        font-weight: ${(props) => props.theme['tag-bold'].weight};
        color: ${(props) => props.theme['yellow-dark']};
      }

      span:not(:last-of-type) {
        margin-right: 4px;
      }
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 35px;

    span {
      font-family: '${(props) => props.theme['text-title-s'].font}', sans-serif;
      font-size: ${(props) => props.theme['text-title-s'].size};
      font-weight: ${(props) => props.theme['text-title-s'].weight};
      color: ${(props) => props.theme['base-subtitle']};
      padding-bottom: 4px;
    }

    p {
      width: 13.5rem;
      text-align: center;
      font-family: '${(props) => props.theme['text-s-regular'].font}',
        sans-serif;
      font-size: ${(props) => props.theme['text-s-regular'].size};
      font-weight: ${(props) => props.theme['text-s-regular'].weight};
      color: ${(props) => props.theme['base-label']};
    }
  }

  footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 208px;

    span {
      font-family: '${(props) => props.theme['text-title-m'].font}', sans-serif;
      font-size: ${(props) => props.theme['text-title-m'].size};
      font-weight: ${(props) => props.theme['text-title-m'].weight};
      color: ${(props) => props.theme['base-text']};
      padding-right: 15px;
    }

    span:before {
      content: 'R$';
      font-family: '${(props) => props.theme['text-s-regular'].font}',
        sans-serif;
      font-size: ${(props) => props.theme['text-s-regular'].size};
      font-weight: ${(props) => props.theme['text-s-regular'].weight};
    }
  }
`
export const Container = styled(BaseCatalogComponent)``

const BaseInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
  height: 38px;
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

export const ContainerInput = styled(BaseInputContainer)``

export const Input = styled.input`
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
