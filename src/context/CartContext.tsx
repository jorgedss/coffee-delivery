import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeeFlavorsTypes } from '../pages/Home/Components/CoffeesCards'
import { produce } from 'immer'

export interface CartItem extends CoffeeFlavorsTypes {
  quantity: number
}

interface LocationProps {
  city: string
  state: string
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  location: LocationProps
  getLocationToHeader: (newCity: string, newState: string) => void
  addCoffeeToCart: (coffee: CartItem) => void
  changeQuantityInCart: (
    cartItemId: number,
    action: 'increment' | 'decrement',
  ) => void
  removeItemOfCart: (cartItemId: number) => void
  clearCart: () => void
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
  const [location, setLocation] = useState({ city: '', state: '' })

  function getLocationToHeader(newCity: string, newState: string) {
    setLocation({ city: newCity, state: newState })
  }

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
  function clearCart() {
    setCartItems([]) // Zera o carrinho
    localStorage.removeItem(COFFEE_LOCAL_STORAGE_KEY) // Remove o carrinho do localStorage
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
        location,
        getLocationToHeader,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
