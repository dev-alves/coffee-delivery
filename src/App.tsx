import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeContext } from './contexts/CoffeeContext'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)

  function setAmountCoffes(value: number) {
    setAmount(value)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContext.Provider value={{ amount, setAmountCoffes }}>
          <Router />
        </CoffeContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
