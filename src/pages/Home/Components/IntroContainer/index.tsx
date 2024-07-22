import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoContainer, IntroContainerStyle } from './styles'
import { defaultTheme } from '../../../../styles/themes/default'

export function IntroContainer() {
  return (
    <IntroContainerStyle>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>

      <InfoContainer>
        <div className="infos">
          <ShoppingCart
            weight="fill"
            size={16}
            style={{ backgroundColor: defaultTheme['yellow-dark'] }}
            color={defaultTheme.background}
            className="svgs"
          />
          Compra simples e segura
        </div>

        <div className="infos">
          <Package
            weight="fill"
            size={16}
            style={{ backgroundColor: defaultTheme.text }}
            color={defaultTheme.background}
          />
          Embalagem mantém o café intacto
        </div>

        <div className="infos">
          <Timer
            weight="fill"
            size={16}
            style={{ backgroundColor: defaultTheme.yellow }}
            color={defaultTheme.background}
          />
          Entrega rápida e rastreada
        </div>

        <div className="infos">
          <Coffee
            weight="fill"
            size={16}
            style={{ backgroundColor: defaultTheme.purple }}
            color={defaultTheme.background}
          />
          O café chega fresquinho até você
        </div>
      </InfoContainer>
    </IntroContainerStyle>
  )
}
