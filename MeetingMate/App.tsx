import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { StackNavigator } from './src/navigators/StackNavigator';
import { IndexScreens} from './src/constants/commonConstants';
import { LinearGradientView } from './src/containers/LinearGradientView';

const App = () => {
 
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationContainer>
        <StackNavigator screenDetails={IndexScreens} />

        </NavigationContainer>
   
    </GestureHandlerRootView>
  );
};

export default App;
