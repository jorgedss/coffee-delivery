// import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { Bank, CreditCard, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  FormContainer,
  FormContainerTitle,
  GeneralContainer,
  OrderContainer,
  OrderContainerTitle,
  PaymentChoice,
  PaymentChoiceButton,
  PaymentContainer,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'

export function Checkout() {
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
        <OrderContainerTitle> Cafés selecionados</OrderContainerTitle>
      </OrderContainer>
    </GeneralContainer>
  )
}
