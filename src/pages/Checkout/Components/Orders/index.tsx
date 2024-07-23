import { useContext } from 'react'
import { CartContext, CartItem } from '../../../../context/CartContext'
import { Container, Controls, MinusPlus, Price, TrashButton } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

interface ItemCartProps {
  coffee: CartItem
}

export function Order({ coffee }: ItemCartProps) {
  const { changeQuantityInCart, removeItemOfCart } = useContext(CartContext)

  function incrementQuantity(event: React.MouseEvent<HTMLButtonElement>) {
    event?.preventDefault()
    changeQuantityInCart(coffee.id, 'increment')
  }
  function decrementQuantity(event: React.MouseEvent<HTMLButtonElement>) {
    event?.preventDefault()
    changeQuantityInCart(coffee.id, 'decrement')
  }
  return (
    <Container>
      <div>
        <img src={coffee.picture} alt="" />
        <Controls>
          <h1>{coffee.name}</h1>
          <div>
            <MinusPlus>
              <button
                disabled={coffee.quantity < 2}
                onClick={(event) => decrementQuantity(event)}
              >
                <Minus size={14} />
              </button>
              <span> {coffee.quantity}</span>
              <button onClick={(event) => incrementQuantity(event)}>
                <Plus size={14} />
              </button>
            </MinusPlus>

            <TrashButton>
              <button onClick={() => removeItemOfCart(coffee.id)}>
                <Trash size={14} />
                <span>REMOVER</span>
              </button>
            </TrashButton>
          </div>
        </Controls>
      </div>
      <Price>R$ {coffee.price.toFixed(2).toString().replace('.', ',')}</Price>
    </Container>
  )
}
