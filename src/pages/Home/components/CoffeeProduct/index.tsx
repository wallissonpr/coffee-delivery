import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ApiException } from '../../../../api/ApiException'
import { Coffees } from '../../../../api/coffees/CoffeesService'
import { ShoppingCartService } from '../../../../api/shoppingCart/ShoppingCartService'
import { GlobalContext } from '../../../../contexts/globalContext'
import {
  CoffeeCard,
  CoffeeCardFooter,
  CoffeeCardHeader,
  CoffeeCardInput,
  CoffeeContainer,
} from './styled'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface CoffeeProductProps {
  data: Coffees
}

export function CoffeeProduct({ data }: CoffeeProductProps) {
  const { setShoppingCartDB, shoppingCartDB } = useContext(GlobalContext)

  const newCartFormValidationSchema = zod.object({
    coffeeQuantity: zod.number().min(1).max(60),
  })

  type NewCartFormData = zod.infer<typeof newCartFormValidationSchema>

  const newCartForm = useForm<NewCartFormData>({
    resolver: zodResolver(newCartFormValidationSchema),
    defaultValues: {
      coffeeQuantity: 0,
    },
  })

  const { register, handleSubmit, watch, reset } = newCartForm
  const IsButtonDisable = !watch('coffeeQuantity')

  function handleCreateNewItemCart(dataForm: NewCartFormData) {
    const newDataForm = {
      ...dataForm,
      coffeePrice: data.price,
      coffeeName: data.title,
    }

    ShoppingCartService.createCart(newDataForm).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message)
      } else {
        if (shoppingCartDB !== undefined) {
          setShoppingCartDB([...shoppingCartDB, result])
        }
      }
    })

    reset()
  }

  return (
    <CoffeeContainer>
      <CoffeeCard>
        <form action="" onSubmit={handleSubmit(handleCreateNewItemCart)}>
          <CoffeeCardHeader>
            <img src={data.imgCoffees} alt="" />
            <span>{data.tags}</span>
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
          </CoffeeCardHeader>

          <CoffeeCardFooter>
            <label htmlFor="coffeeInput">
              R$ <strong>{data.price}</strong>
            </label>
            <CoffeeCardInput
              type="number"
              placeholder="0"
              id="coffeeQuantity"
              min={0}
              max={30}
              {...register('coffeeQuantity', { valueAsNumber: true })}
            />
            <button type="submit" disabled={IsButtonDisable}>
              <ShoppingCart size={23} weight="fill" />
            </button>
          </CoffeeCardFooter>
        </form>
      </CoffeeCard>
    </CoffeeContainer>
  )
}
