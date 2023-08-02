import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../view/Login';
import {Register} from '../view/Register';
import {MyTabs} from './TabsNavigation';
import {Frases} from '../view/Frases';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {Home} from '../view/Home';

const Stack = createStackNavigator();

export const MyStack = () => {
  const {status} = useContext(AuthContext);
  useEffect(() => {
    console.log(status);
  }, [status]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {status === 'auth' ? (
        <>
          <Stack.Screen name="NewPass" component={MyTabs} />

          <Stack.Screen name="Home" component={Home} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Frases" component={Frases} />
          <Stack.Screen name="NewPass" component={MyTabs} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
