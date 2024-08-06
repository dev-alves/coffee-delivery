import { createContext } from 'react'

export interface CoffeDataTypes {
  amount: number
  setAmountCoffes: (ammount: number) => void
}

export const CoffeContext = createContext({} as CoffeDataTypes)
