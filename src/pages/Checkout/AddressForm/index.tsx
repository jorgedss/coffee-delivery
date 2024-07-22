import { useState } from 'react'
import { AddressFormStyle } from './styles'
import {
  UseFormRegister,
  UseFormSetFocus,
  UseFormSetValue,
} from 'react-hook-form'

interface FormDataTypes {
  bairro: string
  cep: string
  cidade: string
  complemento: string
  numero: number
  payment: string
  rua: string
  uf: string
}

interface AddressFromProps {
  register: UseFormRegister<FormDataTypes>
  setValue: UseFormSetValue<FormDataTypes>
  setFocus: UseFormSetFocus<FormDataTypes>
}
export function AddressForm({
  register,
  setFocus,
  setValue,
}: AddressFromProps) {
  const [inputValue, setInputValue] = useState('')

  function handleChangeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
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
    <AddressFormStyle>
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
          {...(register('complemento'), { onChange: handleChangeInputValue })}
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
    </AddressFormStyle>
  )
}
