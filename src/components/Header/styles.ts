import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    a:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['purple-dark']};
      font-family: '${(props) => props.theme['text-s-regular'].font}',
        sans-serif;
      font-size: ${(props) => props.theme['text-s-regular'].size};
      font-weight: ${(props) => props.theme['text-s-regular'].weight};
      color: ${(props) => props.theme['purple-dark']};
      background: ${(props) => props.theme['purple-light']};
      margin-right: 0.75rem;
      padding: 0.5rem;
      border-radius: 6px;
      text-decoration: none;

      svg {
        color: ${(props) => props.theme.purple};
        margin-right: 0.25rem;
      }
    }
  }
`
