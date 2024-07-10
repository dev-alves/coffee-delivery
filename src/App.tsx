import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ButtonPrimary } from './styles/components/ButtonPrimary'
import { ButtonRemove } from './styles/components/ButtonRemove'
import { ButtonCart } from './styles/components/ButtonCart'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonPrimary text="Label" />
      <ButtonRemove text="Remover" />
      <ButtonCart />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
