import { useContext, useState } from 'react'
import {
  Buttons,
  CardContainer,
  CartButton,
  CoffeeDescription,
  CoffeeName,
  CoffeeType,
  Controls,
  ControlsAndCart,
  CupImage,
  Price,
  PriceAndShop,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../../context/CartContext'

export interface CoffeeFlavorsTypes {
  id: number
  name: string
  typeOfCoffee: string[]
  description: string
  price: number
  picture: string
}

interface CoffeeProps {
  coffee: CoffeeFlavorsTypes
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useContext(CartContext)

  function incrementQuantity() {
    setQuantity(quantity + 1)
  }

  function decrementQuantity() {
    setQuantity(quantity - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity, // adiciona o valo da quantidade armazenada no estado
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CardContainer>
      <CupImage src={coffee.picture} />

      <div className="container">
        {coffee.typeOfCoffee.map((coffee) => (
          <CoffeeType key={coffee}> {coffee.toUpperCase()} </CoffeeType>
        ))}
      </div>

      <CoffeeName>{coffee.name}</CoffeeName>

      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <PriceAndShop>
        <div>
          R$
          <Price> {coffee.price.toFixed(2).toString().replace('.', ',')}</Price>
        </div>

        <ControlsAndCart>
          <Controls>
            <Buttons onClick={decrementQuantity} disabled={quantity < 2}>
              <Minus weight="bold" size={14} />
            </Buttons>
            <span>{quantity}</span>
            <Buttons onClick={incrementQuantity}>
              <Plus weight="bold" size={14} />
            </Buttons>
          </Controls>
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} color="white" />
          </CartButton>
        </ControlsAndCart>
      </PriceAndShop>
    </CardContainer>
  )
}
