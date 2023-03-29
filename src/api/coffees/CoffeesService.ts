import { Api } from '../ApiConfig'
import { ApiException } from '../ApiException'

export interface Coffees {
  id: number
  title: string
  tags: string
  subtitle: string
  imgCoffees: string
  price: string
}

const getAll = async (): Promise<Coffees[] | ApiException> => {
  try {
    const { data } = await Api().get('/coffees')
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar a API.')
  }
}
const getById = async (id: number): Promise<Coffees | ApiException> => {
  try {
    const { data } = await Api().get(`/coffees/${id}`)
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar a API.')
  }
}
const create = async (
  dataToCreate: Omit<Coffees, 'id'>,
): Promise<Coffees | ApiException> => {
  try {
    const { data } = await Api().post<any>('/coffees', dataToCreate)
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o Registro.')
  }
}
const updateById = async (
  id: string,
  dataToUpdate: Coffees,
): Promise<Coffees[] | ApiException> => {
  try {
    const { data } = await Api().put(`coffees/${id}`, dataToUpdate)
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.')
  }
}
const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    await Api().get(`/coffees/${id}`)
    return undefined
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o Registro.')
  }
}

export const CoffeesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
