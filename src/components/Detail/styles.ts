import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  h1 {
    font-family: '${(props) => props.theme['text-title-xs'].font}', sans-serif;
    font-size: ${(props) => props.theme['text-title-xs'].size};
    font-weight: ${(props) => props.theme['text-title-xs'].weight};
    line-height: ${(props) => props.theme['text-title-xs'].lineHeight};
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const DetailContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`
