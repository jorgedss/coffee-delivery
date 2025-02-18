import { CurrencyDollar, MapPin } from 'phosphor-react'
import {
  AddressContainer,
  ConfirmButton,
  FormContainer,
  FormContainerTitle,
  GeneralContainer,
  OrderContainer,
  OrderContainerTitle,
  CoffeesSelecteds,
  PaymentContainer,
  ValuesContainer,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { Order } from './Components/Orders'
import { useContext } from 'react'
import { CartContext, CartItem } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { AddressForm } from './Components/AddressForm/index'
import { PaymentChoice } from './Components/PaymentChoice'

const confirmOrderFormValidationSchema = zod.object({
  bairro: zod.string(),
  cep: zod.string(),
  cidade: zod.string(),
  complemento: zod.string(),
  numero: zod.number(),
  payment: zod.string(),
  rua: zod.string(),
  uf: zod.string(),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderData = OrderData

export function Checkout() {
  const { register, handleSubmit, setValue, setFocus } =
    useForm<ConfirmOrderData>()

  const { cartItems, clearCart } = useContext(CartContext)

  function totalPrice(cartItem: CartItem[]) {
    let totalSum = 0

    cartItem.map((item) => (totalSum += item.price * item.quantity))
    return totalSum
  }

  const navigate = useNavigate()

  function handleAddressForm(data: ConfirmOrderData) {
    if (!data.payment) {
      alert('Por favor, escolha um método de pagamento.')
    }

    navigate('/sucsess', { state: data })
  }

  return (
    <form onSubmit={handleSubmit(handleAddressForm)}>
      <GeneralContainer>
        <FormContainer>
          <FormContainerTitle> Complete seu pedido</FormContainerTitle>

          <AddressContainer>
            <header>
              <MapPin size={22} color={defaultTheme['yellow-dark']} />
              <div>
                <h1>Endereço de Entrega</h1>
                <h2>Informe o endereço onde deseja receber seu pedido</h2>
              </div>
            </header>

            <AddressForm
              setValue={setValue}
              setFocus={setFocus}
              register={register}
            />
          </AddressContainer>

          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} color={defaultTheme.purple} />
              <div>
                <h1>Pagamento</h1>
                <h2>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </h2>
              </div>
            </header>

            <PaymentChoice register={register} />
          </PaymentContainer>
        </FormContainer>

        <OrderContainer>
          <OrderContainerTitle> Cafés selecionados</OrderContainerTitle>
          <CoffeesSelecteds>
            {cartItems.map((item) => (
              <Order key={item.id} coffee={item} />
            ))}
          </CoffeesSelecteds>

          <ValuesContainer>
            <div className="values">
              Total de itens{' '}
              <span>
                R${' '}
                {totalPrice(cartItems).toFixed(2).toString().replace('.', ',')}
              </span>
            </div>
            <div className="values">
              Entrega <span>R$ 3,50</span>
            </div>
            <div className="total">
              Total
              <span>
                R$
                {(totalPrice(cartItems) + 3.5)
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </span>
            </div>
          </ValuesContainer>

          <ConfirmButton type="submit" onClick={() => clearCart()}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </OrderContainer>
      </GeneralContainer>
    </form>
  )
}
