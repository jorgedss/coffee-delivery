import { Bank, CreditCard, CurrencyDollar } from 'phosphor-react'
import { PaymentChoiceButton, PaymentChoiceStyle } from './styles'
import { defaultTheme } from '../../../../styles/themes/default'
import { UseFormRegister } from 'react-hook-form'
import { FormDataTypes } from '../AddressForm'

interface PaymentDataTypes extends FormDataTypes {
  payment: string
}
interface PaymentProps {
  register: UseFormRegister<PaymentDataTypes>
}

export function PaymentChoice({ register }: PaymentProps) {
  return (
    <PaymentChoiceStyle>
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
    </PaymentChoiceStyle>
  )
}
