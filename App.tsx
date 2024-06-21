import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Details from './src/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name='Details'
          component={Details}
          initialParams={{ name: 'defaultName' }} // Example of setting initialParams
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
