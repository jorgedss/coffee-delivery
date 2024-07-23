import styled from 'styled-components'

export const PaymentChoiceStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`
export const PaymentChoiceButton = styled(PaymentChoiceStyle)`
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
