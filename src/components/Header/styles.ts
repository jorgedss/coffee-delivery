import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 104px;
  background-color: ${(props) => props.theme.background};
  position: sticky;
  top: 0;
  z-index: 10;

  .container {
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .localAndCart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    height: 38px;
  }

  .local {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
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
