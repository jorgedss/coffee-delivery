// import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { Bank, CreditCard, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  ConfirmButton,
  FormContainer,
  FormContainerTitle,
  GeneralContainer,
  OrderContainer,
  OrderContainerTitle,
  CoffeesSelecteds,
  PaymentChoice,
  PaymentChoiceButton,
  PaymentContainer,
  ValuesContainer,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { Order } from './Orders'
import { useContext } from 'react'
import { CartContext, CartItem } from '../../context/CartContext'

export function Checkout() {
  const { cartItems } = useContext(CartContext)

  function totalPrice(cartItem: CartItem[]) {
    let totalSum = 0

    cartItem.map((item) => (totalSum += item.price * item.quantity))
    return totalSum
  }

  return (
    <GeneralContainer>
      <FormContainer>
        <FormContainerTitle> Complete seu pedido</FormContainerTitle>
        <form action="">
          <AddressContainer>
            <header>
              <MapPin size={22} color={defaultTheme['yellow-dark']} />
              <div>
                <h1>Endereço de Entrega</h1>
                <h2>Informe o endereço onde deseja receber seu pedido</h2>
              </div>
            </header>

            <AddressForm>
              <input id="cep" type="number" placeholder="CEP" required />
              <input id="rua" type="text" placeholder="Rua" required />
              <input id="numero" type="number" placeholder="Número" required />
              <input id="complemento" type="text" placeholder="Complemento" />
              <input id="bairro" type="text" placeholder="Bairro" required />
              <input id="cidade" type="text" placeholder="Cidade" required />
              <input id="uf" type="text" placeholder="UF" required />
            </AddressForm>
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

            <PaymentChoice>
              <PaymentChoiceButton>
                <input
                  type="radio"
                  id="credit"
                  name="payment"
                  value="creditCard"
                />
                <label htmlFor="credit">
                  <CreditCard size={16} color={defaultTheme.purple} />
                  CARTÃO DE CRÉDITO
                </label>
              </PaymentChoiceButton>

              <PaymentChoiceButton>
                <input
                  type="radio"
                  id="debit"
                  name="payment"
                  value="debitCard"
                />
                <label htmlFor="debit">
                  <Bank size={16} color={defaultTheme.purple} />
                  CARTÃO DE DÉBITO
                </label>
              </PaymentChoiceButton>

              <PaymentChoiceButton>
                <input type="radio" id="money" name="payment" value="money" />
                <label htmlFor="money">
                  <CurrencyDollar size={16} color={defaultTheme.purple} />
                  CARTÃO DE CRÉDITO
                </label>
              </PaymentChoiceButton>
            </PaymentChoice>
          </PaymentContainer>
        </form>
      </FormContainer>

      <OrderContainer>
        <form action="submit">
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
                R${' '}
                {(totalPrice(cartItems) + 3.5)
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </span>
            </div>
          </ValuesContainer>

          <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
        </form>
      </OrderContainer>
    </GeneralContainer>
  )
}
