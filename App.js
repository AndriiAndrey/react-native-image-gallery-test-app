import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/redux-store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FullView from './src/screens/FullView';
import Album from './src/screens/Album';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const App = props => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3949ab" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3949ab',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="FullView" component={FullView} />
      </Stack.Navigator>
    </>
  );
};

const MainApp = props => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

export default MainApp;
