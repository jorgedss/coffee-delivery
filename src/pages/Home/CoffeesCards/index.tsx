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

type CoffeeFlavorsTypes = {
  id: number
  name: string
  typeOfCoffee: string[]
  description: string
  price: number
  picture: string
}

export function CoffeeCard({
  // id,
  name,
  typeOfCoffee,
  description,
  price,
  picture,
}: CoffeeFlavorsTypes) {
  return (
    <CardContainer>
      <CupImage src={picture} />

      <div className="container">
        {typeOfCoffee.map((coffee) => (
          <CoffeeType key={coffee}> {coffee.toUpperCase()} </CoffeeType>
        ))}
      </div>

      <CoffeeName>{name}</CoffeeName>

      <CoffeeDescription>{description}</CoffeeDescription>

      <PriceAndShop>
        <div>
          R$ <Price> {price.toFixed(2).toString().replace('.', ',')}</Price>
        </div>

        <ControlsAndCart>
          <Controls>
            <Buttons>
              <Minus weight="bold" size={14} />
            </Buttons>
            <span>1</span>
            <Buttons>
              <Plus weight="bold" size={14} />
            </Buttons>
          </Controls>
          <CartButton>
            <ShoppingCart weight="fill" size={22} color="white" />
          </CartButton>
        </ControlsAndCart>
      </PriceAndShop>
    </CardContainer>
  )
}
