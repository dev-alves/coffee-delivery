import styled from 'styled-components'

const BaseCatalogComponent = styled.div`
  width: 16rem;
  height: 19.375rem;
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
    padding-bottom: 45px;

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
    align-items: center;
    justify-content: space-between;
    width: 208px;

    span {
      font-family: '${(props) => props.theme['text-title-m'].font}', sans-serif;
      font-size: ${(props) => props.theme['text-title-m'].size};
      font-weight: ${(props) => props.theme['text-title-m'].weight};
      color: ${(props) => props.theme['base-text']};
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
