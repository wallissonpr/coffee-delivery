import { Api } from '../ApiConfig'
import { ApiException } from '../ApiException'

export interface ShoppingCartProps {
  id: number
  coffeePrice: string
  coffeeQuantity: number
  coffeeName: string
}

const getAllCart = async (): Promise<ShoppingCartProps[] | ApiException> => {
  try {
    const { data } = await Api().get('/shoppingCart')
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar a API.')
  }
}
const getCartById = async (
  id: number,
): Promise<ShoppingCartProps | ApiException> => {
  try {
    const { data } = await Api().get(`/shoppingCart/${id}`)
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar a API.')
  }
}
const createCart = async (
  dataToCreate: Omit<ShoppingCartProps, 'id'>,
): Promise<ShoppingCartProps | ApiException> => {
  try {
    const { data } = await Api().post<any>('/shoppingCart', dataToCreate)
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o Registro.')
  }
}
const updateCartById = async (
  id: number,
  dataToUpdate: ShoppingCartProps,
): Promise<ShoppingCartProps[] | ApiException> => {
  try {
    const { data } = await Api().put(`shoppingCart/${id}`, dataToUpdate)
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.')
  }
}
const deleteCartById = async (
  id: number,
): Promise<undefined | ApiException> => {
  try {
    await Api().get(`/shoppingCart/${id}`)
    return undefined
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o Registro.')
  }
}

export const ShoppingCartService = {
  getAllCart,
  getCartById,
  createCart,
  updateCartById,
  deleteCartById,
}
