import styled from 'styled-components'

export const GeneralContainer = styled.div`
  display: flex;
  align-items: flex-start; //para a div de finalização de pedido não esticar
  max-width: 1080px;
  justify-content: space-between;
  margin: 40px auto 40px;
  padding-top: 78px;
`
// Títulos dos containers

const BaseTitle = styled.span`
  font-family: 'Baloo 2';
  font-weight: bold;
  line-height: 23px;
  font-size: 18px;
  color: ${(props) => props.theme.subtitle};
  display: flex;
  position: absolute;
`

export const FormContainerTitle = styled(BaseTitle)`
  margin-top: -38px;
`

export const OrderContainerTitle = styled(BaseTitle)`
  margin-left: -40px;
  margin-top: -78px;
`

// Container do formulário de endereço e pagamento

export const FormContainer = styled.div`
  header {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
  }

  h1 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.subtitle};
  }

  h2 {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.text};
  }
`

const BaseFormStyle = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  width: 640px;
  margin-bottom: 12px;
`

export const AddressContainer = styled(BaseFormStyle)``

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
    padding: 12px;
    font-size: 14px;
    width: 100%;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme.input};
    color: ${(props) => props.theme.text};
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
`

export const PaymentContainer = styled(BaseFormStyle)`
  display: flex;
  flex-direction: column;
`
export const PaymentChoice = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`
export const PaymentChoiceButton = styled(PaymentChoice)`
  label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 51px;
    width: 178.67px;
    border-radius: 6px;

    font-size: 12px;
    font-family: monospace;

    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.button};

    svg {
      margin-right: 12px;
    }
  }

  label:hover {
    background-color: ${(props) => props.theme.hover};
    transition: 0.2s;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
    transition: 0.2s;
  }
`

// Order container
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 408px;
  width: 100%;
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.card};
`
export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 12px;

  div {
    display: flex;
    justify-content: space-between;
  }

  .values {
    color: ${(props) => props.theme.text};
    font-size: 16px;
  }
  .total {
    color: ${(props) => props.theme.subtitle};
    font-size: 20px;
    font-weight: bold;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border-radius: 6px;

  font-weight: bold;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: 0.2s;
  }
`

export const CoffeesSelecteds = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 256px;
  overflow: auto;
  gap: 24px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.button};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.label};
    border-radius: 5px;
  }
`
