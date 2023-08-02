import {UserRegister} from '../model/UserRegister';
import {LoginUser} from '../model/Login';
import React, {createContext, useEffect, useReducer} from 'react';
import {authReducer, AuthState} from '../store/user/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import AuthService from '../services/authService';
import UserService from '../services/UserService';
import {imagenes} from '../model/Imagenes';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  img: any;
  status: 'checking' | 'auth' | 'no-auth';
  signUp: (data: UserRegister) => any;
  signIn: (data: LoginUser) => any;
  Imagenes: (data: imagenes) => any;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {
    checkToken().then();
  }, []);
  const {RegisterEmailAndPassword} = AuthService();
  const {saveUser} = UserService();
  const checkToken = async () => {
    const data = await AsyncStorage.getItem('user');
    !data
      ? dispatch({type: 'no-auth'})
      : dispatch({
          type: 'signUp',
          payload: {
            user: JSON.parse(data),
          },
        });
  };
  const Imagenes = async (data: imagenes) => {
    try {
      console.log('data', data);
      await AsyncStorage.setItem('img', JSON.stringify(data));
      console.log('guarda');
    } catch (error) {
      dispatch({type: 'addError', payload: error});
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  const signUp = async (data: UserRegister) => {
    try {
      await RegisterEmailAndPassword(data).then(() => saveUser(data));
    } catch (error: any) {
      dispatch({type: 'addError', payload: error});
      Alert.alert(error.message);
    }
  };
  const signIn = async (data: LoginUser) => {
    try {
      await RegisterEmailAndPassword(data);
    } catch (error) {
      dispatch({type: 'addError', payload: error});
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('user');
    dispatch({type: 'loaded'});
    setTimeout(() => {
      dispatch({type: 'logout'});
    }, 1000);
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      // @ts-ignore
      value={{...state, signUp, signIn, logOut, Imagenes, removeError}}>
      {children}
    </AuthContext.Provider>
  );
};
