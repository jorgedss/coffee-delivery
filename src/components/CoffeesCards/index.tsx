import {
  Buttons,
  CardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeeType,
  Controls,
  ControlsAndCart,
  CupImage,
  Price,
  PriceAndShop,
} from './styles'
import cup from '../../assets/cup.svg'
import { Minus, Plus } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function CoffeeCard() {
  return (
    <CardContainer>
      <CupImage src={cup} />

      <CoffeeType> TRADICIONAL </CoffeeType>

      <CoffeeName>Expresso Tradicional</CoffeeName>

      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>

      <PriceAndShop>
        <div>
          R$ <Price> 9,90</Price>
        </div>

        <ControlsAndCart>
          <Controls>
            <Buttons>
              <Minus weight="bold" size={14} color={defaultTheme.purple} />
            </Buttons>
            <span>1</span>
            <Buttons>
              <Plus weight="bold" size={14} color={defaultTheme.purple} />
            </Buttons>
          </Controls>
        </ControlsAndCart>
      </PriceAndShop>
    </CardContainer>
  )
}
