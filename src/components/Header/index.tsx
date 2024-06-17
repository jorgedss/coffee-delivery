import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoCoffeeDelivery} alt="" />
      </a>

      <div>
        <div className="local">
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span> João Pessoa, PB </span>
        </div>
        <NavLink to="/checkout" id="cart">
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
          <span id="quantity"> 0 </span>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
