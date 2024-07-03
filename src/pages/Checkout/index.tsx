// import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { CurrencyDollar, MapPin } from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  FormContainer,
  FormContainerTitle,
  GeneralContainer,
  OrderContainer,
  OrderContainerTitle,
  PaymentChoice,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
// import { defaultTheme } from '../../styles/themes/default'

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

          <PaymentChoice>
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
          </PaymentChoice>
        </form>
      </FormContainer>

      <OrderContainer>
        <OrderContainerTitle> Cafés selecionados</OrderContainerTitle>
      </OrderContainer>
    </GeneralContainer>
  )
}
