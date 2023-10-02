import axios from '../axios';
import { Profile } from '../types/Profile';

export async function getProfile(): Promise<Profile | null> {
  const profile = await axios.get<Profile>('/profile')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })

  return profile
}
