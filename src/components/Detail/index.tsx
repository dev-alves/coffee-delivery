import { ReactNode } from 'react'
import { Container, DetailContainer } from './styles'

interface DetailProps {
  title?: string
  children: ReactNode
}

export function Detail({ title, children }: DetailProps) {
  return (
    <Container>
      {title && <h1>{title}</h1>}
      <DetailContainer>{children}</DetailContainer>
    </Container>
  )
}
