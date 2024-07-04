import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { BackgroundDiv, Confirmation, Container, Infos, Info } from './styles'
import deliveryman from '../../assets/deliveryman.svg'
import { defaultTheme } from '../../styles/themes/default'

export function Sucsess() {
  return (
    <Container>
      <Confirmation id="confirmation">
        <h1> Uhu! Pedido confirmado </h1>
        <h2> Agora é só aguardar que logo o café chegará até você</h2>
      </Confirmation>

      <BackgroundDiv id="background">
        <Infos>
          <Info>
            <MapPin
              weight="fill"
              size={16}
              color="white"
              style={{ backgroundColor: defaultTheme.purple }}
            />
            <div>
              Entrega em Rua João Daniel Martinelli, 102 <br />
              <span> Farrapos - Porto Alegre, RS </span>
            </div>
          </Info>
          <Info>
            <Timer
              weight="fill"
              size={16}
              color="white"
              style={{ backgroundColor: defaultTheme.yellow }}
            />
            <div>
              Previsão de entrega <br />
              <span>20 min - 30 min</span>
            </div>
          </Info>
          <Info>
            <CurrencyDollar
              size={16}
              color="white"
              style={{ backgroundColor: defaultTheme['yellow-dark'] }}
            />
            <div>
              Pagamento na entrega <br />
              <span>Cartão de Crédito</span>
            </div>
          </Info>
        </Infos>
      </BackgroundDiv>

      <img src={deliveryman} alt="" id="picture" />
    </Container>
  )
}
