import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 4px 32px;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.button};

  div {
    display: flex;
    gap: 20px;
  }
  img {
    width: 64px;
    height: 64px;
  }
`
export const Price = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 0;
  right: 0;
  margin-top: 8px;
  margin-right: 4px;
`

export const Controls = styled.div`
  flex-direction: column;
  h1 {
    font-size: 16px;
    color: ${(props) => props.theme.subtitle};
    font-weight: 400;
  }

  div {
    display: flex;
    gap: 8px;
  }
`

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  gap: 4px;
  padding: 0 8px;
  height: 32px;

  background-color: ${(props) => props.theme.button};

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: ${(props) => props.theme.purple};
  }

  button:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const MinusPlus = styled(ButtonStyle)`
  span {
    color: ${(props) => props.theme.title};
    font-size: 16px;
  }
`

export const TrashButton = styled(ButtonStyle)`
  span {
    color: ${(props) => props.theme.text};
    font-size: 12px;
  }

  button {
    display: flex;
    gap: 4px;
  }

  &:hover {
    background-color: ${(props) => props.theme.hover};

    span {
      color: ${(props) => props.theme.subtitle};
    }

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
