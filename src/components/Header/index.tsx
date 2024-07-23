import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { cartQuantity, location } = useContext(CartContext)

  return (
    <HeaderContainer>
      <div className="container">
        <a href="/">
          <img src={logoCoffeeDelivery} alt="" />
        </a>

        <div className="localAndCart">
          <div className="local">
            <MapPin size={22} weight="fill" color="#8047F8" />

            {location.city && (
              <span>
                {location.city}, {location.state}
              </span>
            )}
          </div>

          <NavLink to="/checkout" id="cart">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            {cartQuantity > 0 && <span id="quantity"> {cartQuantity} </span>}
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}
