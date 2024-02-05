import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home/Home';
import {Product} from './src/screens/Product/Product';
import {CartProvider} from './src/context/CartContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

 const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CartProvider>
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Main" component={Home} />
            <Drawer.Screen name="Product" component={Product} />
       
          </Drawer.Navigator>
        </NavigationContainer>
      </CartProvider>
    </GestureHandlerRootView>
  );
};

export default App;
