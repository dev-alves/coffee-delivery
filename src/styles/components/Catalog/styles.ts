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
    position: relative;
    padding-bottom: 16px;

    img {
      position: relative;
      top: -14px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 4px;
      border-radius: 100px;
      background: ${(props) => props.theme['yellow-light']};
      font-family: ${(props) => props.theme['tag-bold'].font};
      font-size: ${(props) => props.theme['tag-bold'].size};
      font-weight: ${(props) => props.theme['tag-bold'].weight};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 33px;

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
