import axios from '../axios';
import { LoginUser } from '../types/LoginUser'

export async function authenticate(loginUser: LoginUser): Promise<number> {
  const code = await axios.post('/auth/login', {
    usuario: loginUser.username,
    senha: loginUser.password,
  })
  .then((response: { [key: string]: any }) => {
    localStorage.setItem('token', response.data.access_token);
    return response.status
  })
  .catch((error: { [key: string]: any }) => {
    return error.statusCode
  })

  return code
}

export function logout() {
  localStorage.removeItem('token');
}
