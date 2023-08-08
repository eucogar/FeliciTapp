import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../view/Login';
import {Register} from '../view/Register';
import {MyTabs} from './TabsNavigation';
import {Frases} from '../view/Frases';
import {useEffect} from 'react';

import {Home} from '../view/Home';
import {useSelector} from 'react-redux';
import useAuth from '../hook/useAuth';

const Stack = createStackNavigator();

export const MyStack = () => {
  const {isAuthenticated} = useSelector(state => state.auth);
  const {checkSession} = useAuth();
  useEffect(() => {
    console.log('State', isAuthenticated);
    checkSession().then();
  }, [isAuthenticated]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated === 'auth' ? (
        <>
          <Stack.Screen name="NewPass" component={MyTabs} />
          <Stack.Screen name="Frases" component={Frases} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
