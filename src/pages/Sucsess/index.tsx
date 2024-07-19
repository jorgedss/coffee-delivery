import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Confirmation, Container, Infos, Info } from './styles'
import deliveryman from '../../assets/deliveryman.svg'
import { defaultTheme } from '../../styles/themes/default'
import { useLocation } from 'react-router-dom'
import { OrderData } from '../Checkout'

interface LocationType {
  state: OrderData
}

export function Sucsess() {
  const { state } = useLocation() as LocationType
  console.log(state)

  return (
    <Container>
      <Confirmation id="confirmation">
        <h1> Uhu! Pedido confirmado </h1>
        <h2> Agora é só aguardar que logo o café chegará até você</h2>
      </Confirmation>

      <Infos id="infos">
        <Info>
          <MapPin
            weight="fill"
            size={16}
            color="white"
            style={{ backgroundColor: defaultTheme.purple }}
          />
          <div>
            Entrega em {state.rua}, {state.numero} <br />
            <span>
              {state.bairro} - {state.cidade}, {state.uf}{' '}
            </span>
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
            <span>{state.payment}</span>
          </div>
        </Info>
      </Infos>

      <img src={deliveryman} alt="" id="picture" />
    </Container>
  )
}
