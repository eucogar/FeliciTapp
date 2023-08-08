import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/routes/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import {Provider} from 'react-redux'; // Importa Provider desde react-redux
import store from './store';
import {PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <PaperProvider>
            <MyStack />
          </PaperProvider>
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
