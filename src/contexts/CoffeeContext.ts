import { createContext } from 'react'

export interface Coffe {
  id: number
  img: string
  alt: string
  types: string[]
  name: string
  description: string
  price: number
  amount: number
}
export interface CoffeDataTypes {
  coffes: Coffe[]
  setNewCoffe: (coffe: Coffe) => void
  deleteItem: (coffe: Coffe) => void
}

export const CoffeContext = createContext({} as CoffeDataTypes)
