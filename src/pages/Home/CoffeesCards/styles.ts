import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;

  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  background-color: ${(props) => props.theme.card};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 20px 20px;
`

export const CupImage = styled.img`
  max-width: 120px;
  max-height: 120px;
  margin-top: -20px;
`
export const CoffeeType = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  padding: 4px 8px;
  border-radius: 100px;

  margin-top: 12px;
`

export const CoffeeName = styled.div`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 20px;
  color: ${(props) => props.theme.subtitle};

  margin-top: 16px;
`

export const CoffeeDescription = styled.div`
  color: ${(props) => props.theme.label};
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`

export const PriceAndShop = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  margin-top: 33px;

  div {
    color: ${(props) => props.theme.text};
  }
`

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 24px;
  color: ${(props) => props.theme.text};
`

export const ControlsAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8.5px 8px;
  font-size: 16px;
  background-color: ${(props) => props.theme.button};
  border-radius: 6px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    margin: 0 4px;
  }
`

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};
  padding: 8px;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
