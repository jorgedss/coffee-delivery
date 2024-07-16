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
  changeQuantityInCart: (
    cartItemId: number,
    action: 'increment' | 'decrement',
  ) => void
  removeItemOfCart: (cartItemId: number) => void
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

  function changeQuantityInCart(
    cartItemId: number,
    action: 'increment' | 'decrement',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeExistInCart >= 0) {
        const item = cartItems[coffeeExistInCart]
        draft[coffeeExistInCart].quantity =
          action === 'increment' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeItemOfCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeExistInCart >= 0) {
        draft.splice(coffeeExistInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeQuantityInCart,
        removeItemOfCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
