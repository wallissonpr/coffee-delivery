import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../contexts/globalContext'
import {
  HeaderContainer,
  HeaderNav,
  HeaderGeoLocation,
  HeaderShoppingCart,
} from './styled'
export function Header() {
  const { shoppingCartDB } = useContext(GlobalContext)
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src="/src/assets/imgs/logotipo-icon.svg" alt="" />
      </NavLink>

      <HeaderNav>
        <HeaderGeoLocation>
          <MapPin size={20} weight="fill" /> <span>Fortaleza, CE</span>
        </HeaderGeoLocation>

        <HeaderShoppingCart>
          <NavLink to={'/checkout'}>
            <ShoppingCart size={20} weight="fill" />
            {shoppingCartDB?.map((qtd) => {
              return qtd.coffeeQuantity
            })}
          </NavLink>
        </HeaderShoppingCart>
      </HeaderNav>
    </HeaderContainer>
  )
}
