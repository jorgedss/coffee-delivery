import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeeFlavorsTypes } from '../pages/Home/Components/CoffeesCards'
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

const COFFEE_LOCAL_STORAGE_KEY = 'coffeeDelivery:cart'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_LOCAL_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    } else {
      return []
    }
  })

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

  useEffect(() => {
    localStorage.setItem(COFFEE_LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

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
