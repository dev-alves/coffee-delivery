import { createContext } from 'react'

export interface Coffe {
  id: number
  img: string
  alt: string
  types: string[]
  name: string
  description: string
  amount: number
}
export interface CoffeDataTypes {
  coffes: Coffe[]
  setNewCoffe: (coffes: Coffe) => void
}

export const CoffeContext = createContext({} as CoffeDataTypes)
