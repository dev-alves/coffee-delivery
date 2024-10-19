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
    const coffeContext = coffes.filter((c) => c.id === coffe.id)[0]
    const coffeIndexContext = coffes.findIndex((c) => c === coffeContext)
    if (coffeContext) {
      coffes[coffeIndexContext] = coffe
      setCoffe([...coffes])
    } else {
      setCoffe([...coffes, coffe])
    }
  }

  function deleteItem(coffe: Coffe) {
    setCoffe(coffes.filter((c) => c.id !== coffe.id))
  }

  function resetState() {
    setCoffe([])
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContext.Provider
          value={{ coffes, setNewCoffe, deleteItem, resetState }}
        >
          <Router />
        </CoffeContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
