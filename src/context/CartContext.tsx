import { createContext, ReactNode, useState } from 'react'
import { CoffeeFlavorsTypes } from '../pages/Home/CoffeesCards'
import { produce } from 'immer'

export interface CartItem extends CoffeeFlavorsTypes {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
}
interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeIsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeIsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeIsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
