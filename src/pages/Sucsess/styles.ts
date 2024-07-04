import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 526px 492px;
  grid-column-gap: 102px;
  grid-row-gap: 28px;
  grid-template-areas:
    'confirmation .'
    'bg picture';

  max-width: 1120px;
  margin: 80px auto;

  #confirmation {
    grid-area: confirmation;
  }

  #background {
    grid-area: bg;
  }

  #picture {
    grid-area: picture;
  }
`

export const Confirmation = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 42px;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.subtitle};
  }
`

export const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 526px;
  height: 270px;
  border-radius: 6px 36px;
  background-image: linear-gradient(#dbac2c, #8047f8);
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 525px;
  height: 269px;
  padding: 39px;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: bold;
  }
`
