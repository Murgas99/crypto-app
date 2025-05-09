import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pantallas principales de la aplicación
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

// Definición de los parámetros que cada pantalla puede recibir

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente principal de la aplicación que define la estructura de navegación
export default function App() {
  return (
    // Contenedor principal de navegación
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* muestra la lista de cripto*/}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/*muestra la informacion extendida de la cripto */}
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
