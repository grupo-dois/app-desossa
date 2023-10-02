import axios from '../axios';

export async function getCattleCarcassExtractionByDay(): Promise<{ [key: string]: any }> {
  const { data } = await axios.get('bovinos/abates/diarios')

  return data
}
