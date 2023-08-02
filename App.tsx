import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/routes/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import {PaperProvider} from 'react-native-paper';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <PaperProvider>
          <MyStack />
        </PaperProvider>
      </AppState>
    </NavigationContainer>
  );
}
