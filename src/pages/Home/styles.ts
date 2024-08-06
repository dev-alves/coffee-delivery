import styled from 'styled-components'

const SectionItemsBase = styled.div`
  span {
    color: ${(props) => props.theme['base-text']};
    font-family: '${(props) => props.theme['text-m-regular'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-m-regular'].size};
    line-height: ${(props) => props.theme['text-m-regular'].lineHeight};
  }
`

export const Container = styled.main`
  h1 {
    display: inline-block;
    font-family: '${(props) => props.theme['text-title-l'].font}', sans-serif;
    size: ${(props) => props.theme['text-title-l'].size};
    font-weight: ${(props) => props.theme['text-title-l'].weight};
    line-height: ${(props) => props.theme['text-title-l'].lineHeight};
    margin-bottom: 3.375rem;
  }
`

export const InfoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin: 3.625rem 0rem 3.625rem 0rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: '${(props) => props.theme['text-title-xl'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-title-xl'].size};
    line-height: ${(props) => props.theme['text-title-xl'].lineHeight};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: '${(props) => props.theme['text-l-regular'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-l-regular'].size};
    line-height: ${(props) => props.theme['text-l-regular'].lineHeight};
  }

  section:first-child {
    margin-bottom: 4.125rem;
  }

  section:last-child {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25rem;
  }

  div img {
    display: block;
    width: 29.75rem;
    height: 22.5rem;
    margin-left: auto;
  }
`

export const ShoppingCartContainer = styled(SectionItemsBase)`
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.75rem;
  }
  align-items: center;

  svg {
    color: ${(props) => props.theme['base-white']};

    path {
      fill: ${(props) => props.theme['base-white']};
    }
  }
`

export const TimerContainer = styled(SectionItemsBase)`
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background: ${(props) => props.theme.yellow};
    margin-right: 0.75rem;
    svg {
      color: ${(props) => props.theme['base-white']};
      circle {
        fill: ${(props) => props.theme['base-white']};
      }

      line:first-of-type {
        fill: ${(props) => props.theme.yellow};
        stroke: ${(props) => props.theme.yellow};
      }
    }
  }
  align-items: center;
`

export const PackageContainer = styled(SectionItemsBase)`
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background: ${(props) => props.theme['base-text']};
    margin-right: 0.75rem;
    svg {
      color: ${(props) => props.theme['base-white']};
    }
  }
  align-items: center;
`

export const CoffeContainer = styled(SectionItemsBase)`
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background: ${(props) => props.theme.purple};
    margin-right: 0.75rem;
    svg {
      color: ${(props) => props.theme['base-white']};

      path:first-of-type {
        fill: ${(props) => props.theme['base-white']};
      }
    }
  }
  align-items: center;
`

export const CartContainer = styled.section`
  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    row-gap: 2.5rem;
  }
`
