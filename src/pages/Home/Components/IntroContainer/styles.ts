import styled from 'styled-components'

export const IntroContainerStyle = styled.div`
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
