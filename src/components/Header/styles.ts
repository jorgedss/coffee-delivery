import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 1120px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 38px;
  }

  .local {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 8px;

    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
  }

  #cart {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    padding: 8px;
    position: relative;
  }
  #quantity {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 0px;
    right: 0px;

    background-color: ${(props) => props.theme['yellow-dark']};
    padding: 8px;

    color: white;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;

    position: absolute;
    transform: translate(50%, -50%);
  }
`
