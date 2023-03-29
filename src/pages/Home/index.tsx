import { useContext } from 'react'

import { GlobalContext } from '../../contexts/globalContext'
import { CoffeeProduct } from './components/CoffeeProduct'
import {
  BannerContainer,
  BannerImg,
  BannerListTrends,
  BannerSlogan,
  CoffeeMenu,
  CoffeesList,
} from './styled'

export function Home() {
  const { coffeesCatalog } = useContext(GlobalContext)

  return (
    <div>
      <BannerContainer>
        <BannerSlogan>
          <h1>Encontre o café perfeito para qualquer hora do dia </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BannerListTrends>
            <ul>
              <li>
                <img src="/src/assets/imgs/banner/cart-market.svg" alt="" />
                <span>Compra simples e segura</span>
              </li>
              <li>
                <img src="/src/assets/imgs/banner/clock.svg" alt="" />
                <span>Entra rápida e rastreada</span>
              </li>
            </ul>
            <ul>
              <li>
                <img src="/src/assets/imgs/banner/package.svg" alt="" />
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <img src="/src/assets/imgs/banner/coffee.svg" alt="" />
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </BannerListTrends>
        </BannerSlogan>
        <BannerImg src="/src/assets/imgs/banner-img.svg" alt="" />
      </BannerContainer>

      <CoffeeMenu>
        <div>
          <h1>Nossos Cafés</h1>
        </div>
        <CoffeesList>
          {coffeesCatalog?.map((coffee) => {
            return <CoffeeProduct key={coffee.id} data={coffee} />
          })}
        </CoffeesList>
      </CoffeeMenu>
    </div>
  )
}
