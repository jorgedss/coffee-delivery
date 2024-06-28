import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  AddressAndPayment,
  AddressContainer,
  AddressForm,
  ButtonPayment,
  ButtonsPayment,
  CheckContainer,
  FinishOrder,
  GeneralContainer,
  Order,
  PaymentContainer,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import coffee from '../../assets/CoffeeMini.svg'

export function Checkout() {
  return (
    <GeneralContainer>
      <AddressAndPayment>
        <span>Complete seu pedido</span>

        <form action="">
          <AddressContainer>
            <header>
              <MapPin size={22} color={defaultTheme['yellow-dark']} />
              <div>
                <h1> Endereço de Entrega</h1>
                <h2>Informe o endereço onde deseja receber seu pedido</h2>
              </div>
            </header>

            <AddressForm>
              <input type="number" name="cep" id="cep" placeholder="CEP" />
              <input type="text" name="rua" id="rua" placeholder="Rua" />
              <input
                type="number"
                name="numero"
                id="numero"
                placeholder="Número"
              />
              <input
                type="text"
                name="complemento"
                id="complemento"
                placeholder="Complemento (Opcional)"
              />

              <input
                type="text"
                name="bairro"
                id="bairro"
                placeholder="Bairro"
              />
              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Cidade"
              />
              <input type="text" name="uf" id="uf" placeholder="UF" />
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
            <ButtonsPayment>
              <ButtonPayment>
                <CreditCard size={16} color={defaultTheme.purple} />
                <input type="radio" />
                CARTÃO DE CRÉDITO
              </ButtonPayment>

              <ButtonPayment>
                <Bank color={defaultTheme.purple} size={16} />
                CARTÃO DE DÉBITO
              </ButtonPayment>

              <ButtonPayment>
                <Money color={defaultTheme.purple} size={16} />
                DINEHIRO
              </ButtonPayment>
            </ButtonsPayment>
          </PaymentContainer>
        </form>
      </AddressAndPayment>

      <CheckContainer>
        <span>Cafés selecionados</span>
        <FinishOrder>
          <article>
            <Order>
              <img src={coffee} />
            </Order>
          </article>
        </FinishOrder>
      </CheckContainer>
    </GeneralContainer>
  )
}
