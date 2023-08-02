import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../view/Home';
import {Proposito} from '../view/Proposito';
import {StackScreenProps} from '@react-navigation/stack';
import {Image} from 'react-native';
import {Diario} from '../view/Diario';

const Tab = createBottomTabNavigator();

interface Props extends StackScreenProps<any, any> {}

export const MyTabs = ({navigation}: Props) => {
  const view = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };
  useEffect(() => {
    view();
  }, []);
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        //activeBackgroundColor: '#A0D8B3',
        style: {
          borderTopWidth: 2,
          elevation: 0,
          backgroundColor: 'white',
          height: 60,
        },
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string;
          switch (route.name) {
            case 'Hoy':
              iconName = require('../img/contento.gif');
              break;
            case 'Propositos':
              iconName = require('../img/lista.gif');
              break;
            case 'Diario':
              iconName = require('../img/amabilidad.gif');
              break;
            default:
              iconName = 'happy-outline';
              break;
          }
          return <Image source={iconName} style={{height: 35, width: 35}} />;
        },
      })}>
      <Tab.Screen
        options={{title: 'Diario'}}
        name="Diario"
        component={Diario}
      />
      <Tab.Screen options={{title: 'Hoy'}} name="Hoy" component={Home} />
      <Tab.Screen
        options={{title: 'Propositos'}}
        name="Propositos"
        component={Proposito}
      />
    </Tab.Navigator>
  );
};
