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
import { useContext, useState } from 'react'
import { CartContext, CartItem } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

const confirmOrderFormValidationSchema = zod.object({
  bairro: zod.string(),
  cep: zod.string().max(8),
  cidade: zod.string(),
  complemento: zod.string(),
  numero: zod.number(),
  payment: zod.string(),
  rua: zod.string(),
  uf: zod.string().max(2),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderData = OrderData

export function Checkout() {
  const { register, handleSubmit, setValue, setFocus } =
    useForm<ConfirmOrderData>()

  const { cartItems } = useContext(CartContext)
  const [inputValue, setInputValue] = useState('')

  function handleChangeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

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
  const checkCEP = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, '')
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setValue('rua', data.logradouro)
        setValue('cidade', data.localidade)
        setValue('bairro', data.bairro)
        setValue('uf', data.uf)
        setFocus('numero')
      })
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

            <AddressForm>
              <input
                id="cep"
                placeholder="CEP"
                required
                {...register('cep')}
                onBlur={checkCEP}
              />
              <input
                id="rua"
                type="text"
                placeholder="Rua"
                required
                {...register('rua')}
              />
              <input
                id="numero"
                type="number"
                placeholder="Número"
                required
                {...register('numero')}
              />
              <div id="complemento">
                <input
                  value={inputValue}
                  type="text"
                  placeholder="Complemento"
                  {...(register('complemento'),
                  { onChange: handleChangeInputValue })}
                />
                {inputValue.length === 0 && (
                  <span className="optionalInput">Opcional</span>
                )}
              </div>

              <input
                id="bairro"
                type="text"
                placeholder="Bairro"
                required
                {...register('bairro')}
              />
              <input
                id="cidade"
                type="text"
                placeholder="Cidade"
                required
                {...register('cidade')}
              />
              <input
                id="uf"
                type="text"
                placeholder="UF"
                required
                {...register('uf')}
              />
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
                  value="Cartão de crédito"
                  {...register('payment')}
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
                  value="Cartão de débito"
                  {...register('payment')}
                />
                <label htmlFor="debit">
                  <Bank size={16} color={defaultTheme.purple} />
                  CARTÃO DE DÉBITO
                </label>
              </PaymentChoiceButton>

              <PaymentChoiceButton>
                <input
                  type="radio"
                  id="money"
                  value="Dinheiro"
                  {...register('payment')}
                />
                <label htmlFor="money">
                  <CurrencyDollar size={16} color={defaultTheme.purple} />
                  DINHEIRO
                </label>
              </PaymentChoiceButton>
              {}
            </PaymentChoice>
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
                R${' '}
                {(totalPrice(cartItems) + 3.5)
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </span>
            </div>
          </ValuesContainer>

          <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
        </OrderContainer>
      </GeneralContainer>
    </form>
  )
}
