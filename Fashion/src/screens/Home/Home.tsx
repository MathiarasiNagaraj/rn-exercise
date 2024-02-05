

import React from 'react';
import {TabBar} from '../../navigators/TabBar/TabBar';
import {Header} from '../../container/Header/Header';
import { TITLE } from '../../constants/commonConstants';
import { globalStyles } from '../../styles/globalStyle';
import { colors } from '../../styles/colors';
import Cart from '../../components/Cart/Cart';
import { Text, View } from 'react-native';
import MainSection from '../../container/MainSection/MainSection';
import BottomNavigator from '../../navigators/BottomNavigator/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../../navigators/DrawerNavigator/DrawerNavigator';

/**
 * @description Home Screen of Fashion Page
 * @returns Home Page of the Fashion App
 */
export const Home = ({navigation}) => {
  return (
    <>
      
      <BottomNavigator navigation={navigation} />
 
 
      </>
  );
};


