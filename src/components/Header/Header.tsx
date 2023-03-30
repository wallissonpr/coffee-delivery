import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../contexts/globalContext'
import {
  HeaderContainer,
  HeaderNav,
  HeaderGeoLocation,
  HeaderShoppingCart,
  HeaderShoppingCartTotal,
} from './styled'
export function Header() {
  const { shoppingCartDB } = useContext(GlobalContext)

  const shoppingCartItens = shoppingCartDB?.map((qtd) => qtd.coffeeQuantity)

  console.log(shoppingCartItens)
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
            {shoppingCartItens && shoppingCartItens.length > 0 && (
              <HeaderShoppingCartTotal>
                {shoppingCartItens.reduce((total, qty) => total + qty)}
              </HeaderShoppingCartTotal>
            )}
          </NavLink>
        </HeaderShoppingCart>
      </HeaderNav>
    </HeaderContainer>
  )
}
