import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-image: url('src/assets/Background.svg');
  background-size: auto;
  height: 544px;

  .general {
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
  }
  img {
    width: 476px;
    height: 360px;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 48px;
    margin-right: 56px;
  }

  p {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.subtitle};
  }
`
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
  margin-top: 66px;
  font-size: 16px;
  color: ${(props) => props.theme.text};

  svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
  }

  .infos {
    display: flex;
    align-items: center;
    gap: 5.5px;
  }
`
export const CoffeesList = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  h1 {
    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;

    margin-top: 32px;
    margin-bottom: 54px;
  }
`
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;

  .testando {
    width: 50px;
    height: 100px;
  }
`
