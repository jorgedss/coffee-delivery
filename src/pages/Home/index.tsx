import { CoffeesList, HomeContainer, ListContainer } from './styles'
import coffeImage from '../../assets/coffeeImage.svg'

import { CoffeeCard } from './CoffeesCards'

import { coffeeFlavors } from '../../Data/coffeesList'
import { IntroContainer } from './IntroContainer'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <div className="general">
          <IntroContainer />

          <img src={coffeImage} alt="" />
        </div>
      </HomeContainer>
      <CoffeesList>
        <h1>Nossos cafés</h1>
        <ListContainer>
          {coffeeFlavors.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </ListContainer>
      </CoffeesList>
    </div>
  )
}
