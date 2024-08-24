import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Coffe, CoffeContext } from './contexts/CoffeeContext'
import { useState } from 'react'

function App() {
  const [coffes, setCoffe] = useState<Coffe[]>([])

  function setNewCoffe(coffe: Coffe) {
    setCoffe([...coffes, coffe])
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContext.Provider value={{ coffes, setNewCoffe }}>
          <Router />
        </CoffeContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
