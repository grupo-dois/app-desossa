import axios from '../axios';
import { LoginUser } from '../types/LoginUser'

export function authenticate(loginUser: LoginUser) {
  axios.post('/auth/login', {
    usuario: loginUser.username,
    senha: loginUser.password,
  })
  .then((response: { [key: string]: any }) => {
    localStorage.setItem('token', response.data.access_token);
  })
}
