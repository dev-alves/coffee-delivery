import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ButtonPrimary } from './styles/components/Primary'
import { ButtonRemove } from './styles/components/Remove'
import { ButtonCart } from './styles/components/Cart'
import { ButtonType } from './styles/components/Cart/types'
import { Select } from './styles/components/Select'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonPrimary text="Label" />
      <ButtonRemove text="Remover" />
      <ButtonCart type={ButtonType.FULL} amountValue={2} />
      <Select text="Cartão de crédito" />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
