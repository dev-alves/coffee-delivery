import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ButtonPrimary } from './styles/components/ButtonPrimary'
import { ButtonRemove } from './styles/components/ButtonRemove'
import { ButtonCart } from './styles/components/ButtonCart'
import { ButtonType } from './styles/components/ButtonCart/types'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonPrimary text="Label" />
      <ButtonRemove text="Remover" />
      <ButtonCart type={ButtonType.FULL} amountValue={2} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
