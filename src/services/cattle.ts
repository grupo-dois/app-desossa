import axios from '../axios';
import { Cattle as CattleType } from '../types/Cattle'

export async function getCattleCarcassExtractionByDay(): Promise<{ [key: string]: any }> {
  const { data } = await axios.get('bovinos/abates/diarios')

  return data
}

export async function getAllCattle(): Promise<CattleType[]> {
  const { data } = await axios.get('bovinos/abates/diarios')

  return data
}
