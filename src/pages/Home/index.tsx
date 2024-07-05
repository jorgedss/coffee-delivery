import {
  CoffeesList,
  HomeContainer,
  InfoContainer,
  IntroContainer,
  ListContainer,
} from './styles'
import coffeImage from '../../assets/coffeeImage.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { CoffeeCard } from './CoffeesCards'

import { coffeeFlavors } from '../../Data/coffeesList'

export function Home() {
  const teste = coffeeFlavors

  console.log(teste)

  return (
    <div>
      <HomeContainer>
        <div className="general">
          <IntroContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
          </IntroContainer>
          <img src={coffeImage} alt="" />
        </div>
      </HomeContainer>
      <CoffeesList>
        <h1>Nossos cafés</h1>
        <ListContainer>
          <CoffeeCard
            id={coffeeFlavors[0].id}
            name={coffeeFlavors[0].name}
            typeOfCoffee={coffeeFlavors[0].typeOfCoffee}
            description={coffeeFlavors[0].description}
            price={coffeeFlavors[0].price}
            picture={coffeeFlavors[0].picture}
          />
        </ListContainer>
      </CoffeesList>
    </div>
  )
}
