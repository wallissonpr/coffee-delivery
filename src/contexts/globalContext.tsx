import { createContext, ReactNode, useEffect, useState } from 'react'
import { ApiException } from '../api/ApiException'
import { Coffees, CoffeesService } from '../api/coffees/CoffeesService'
import {
  ShoppingCartProps,
  ShoppingCartService,
} from '../api/shoppingCart/ShoppingCartService'

interface GlobalContextType {
  coffeesCatalog: Coffees[] | undefined
  shoppingCartDB: ShoppingCartProps[] | undefined
  shoppingCartItens: number
  setShoppingCartDB: (data: ShoppingCartProps[]) => void
}

interface GlobalContextProviderProps {
  children: ReactNode
}
export const GlobalContext = createContext({} as GlobalContextType)

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [coffeesCatalog, setCoffeesCatalog] = useState<Coffees[]>()
  const [shoppingCartDB, setShoppingCartDB] = useState<ShoppingCartProps[]>()
  const [shoppingCartItens, setShoppingCartItens] = useState(0)

  useEffect(() => {
    CoffeesService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message)
      } else {
        setCoffeesCatalog(result)
      }
    })
  }, [])

  useEffect(() => {
    ShoppingCartService.getAllCart().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message)
      } else {
        setShoppingCartDB(result)
      }
    })
  }, [])

  useEffect(() => {
    if (shoppingCartDB) {
      const totalItens = shoppingCartDB.reduce((total, item) => {
        return total + item.coffeeQuantity
      }, 0)
      setShoppingCartItens(totalItens)
    }
  }, [shoppingCartDB])

  return (
    <GlobalContext.Provider
      value={{
        coffeesCatalog,
        shoppingCartDB,
        shoppingCartItens,
        setShoppingCartDB,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
