import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ButtonPrimary } from './styles/components/Primary'
import { ButtonRemove } from './styles/components/Remove'
import { ButtonCart } from './styles/components/Cart'
import { ButtonType } from './styles/components/Cart/types'
import { Select } from './styles/components/Select'
import { InputText } from './styles/components/InputText'
import { InputNumber } from './styles/components/InputNumber'

function App() {
  function setSelect(value: boolean) {
    console.log('>> selecionou', value)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonPrimary text="Label" />
      <ButtonRemove text="Remover" />
      <ButtonCart type={ButtonType.FULL} amountValue={2} />
      <Select text="Cartão de crédito" setSelectedItem={setSelect} />
      <InputText />
      <InputNumber />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
