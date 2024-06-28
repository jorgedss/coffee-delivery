import styled from 'styled-components'

export const GeneralContainer = styled.div`
  display: flex;
  max-width: 1120px;
  gap: 32px;
  margin: 40px auto 0;
  height: 100vh;
  span {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight: bold;
  }
`

export const AddressAndPayment = styled.div`
  max-width: 640px;
  width: 100%;
`

export const TextStyles = styled.div`
  h1 {
    color: ${(props) => props.theme.subtitle};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 2px;
  }

  h2 {
    color: ${(props) => props.theme.text};
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 32px;
  }
`

export const AddressContainer = styled(TextStyles)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  margin-bottom: 12px;

  header {
    display: flex;
    gap: 8px;
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 16px 12px;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';

  input {
    height: 42px;
    width: 100%;
    background-color: ${(props) => props.theme.input};
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.label};
    padding-left: 12px;
    box-sizing: border-box;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  #cep {
    grid-area: cep;
  }
  #rua {
    grid-area: rua;
  }
  #numero {
    grid-area: numero;
  }
  #complemento {
    grid-area: complemento;
  }
  #bairro {
    grid-area: bairro;
  }
  #cidade {
    grid-area: cidade;
  }
  #uf {
    grid-area: uf;
  }

  :focus {
    border: 2px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentContainer = styled(TextStyles)`
  padding: 40px;
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;

  header {
    display: flex;
    gap: 8px;
  }
`

export const ButtonsPayment = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`
export const ButtonPayment = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 6px;
  background-color: ${(props) => props.theme.button};

  height: 51px;
  width: 178.67px;

  font-family: 'Roboto mono';
  font-size: 12px;
  color: ${(props) => props.theme.text};

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }

  input {
    display: none;
  }

  &.teste {
    border: 1px solid red;
  }

  .selected {
    border: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`

export const CheckContainer = styled.div`
  max-width: 448px;
  width: 100%;
`
export const FinishOrder = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
`
export const Order = styled.section`
  display: flex;
  img {
    margin-right: 20px;
  }
`
