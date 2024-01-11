// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/homeScreen/HomeScreen';
import InputScreen from './src/screen/inputScreen/InputScreenProdutos';
import InputScreenUser from './src/screen/inputsScreenUser/inputScreenUser';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InputProdutos" component={InputScreen} />
        <Stack.Screen name="InputUser" component={InputScreenUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
