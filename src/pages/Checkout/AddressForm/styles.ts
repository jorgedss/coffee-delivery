import styled from 'styled-components'

export const AddressFormStyle = styled.div`
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
  input:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .optionalInput {
    position: absolute;
    font-size: 12px;
    font-style: italic;
    color: ${(props) => props.theme.label};
    top: 13px;
    right: 12px;
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
    position: relative;
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
