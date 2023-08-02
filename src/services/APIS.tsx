import {LoginUser} from '../model/Login';
import {UserRegister} from '../model/UserRegister';

const APIS = 'http://192.168.1.170:3000/api/';

export const Login = async (user: LoginUser) => {
  const res = await fetch(`${APIS}users/login`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });

  return await res.json();
};

export const Register = async (user: UserRegister) => {
  const res = await fetch(`${APIS}users`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });

  return await res.json();
};

export const Imagenes = async (user: string, Imagen: string[]) => {
  const res = await fetch(`${APIS}users/imagenes`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({email: user, image: Imagen}),
  });

  return await res.json();
};

export const GetImagenes = async (user: string) => {
  const res = await fetch(`${APIS}imagenes`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({email: user}),
  });

  return await res.json();
};
