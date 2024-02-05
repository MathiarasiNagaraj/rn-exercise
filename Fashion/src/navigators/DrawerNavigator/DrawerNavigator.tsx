// CustomDrawerContent.js

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const DrawerNavigator = ({navigation}) => {
  return (
    <DrawerContentScrollView>
    <Text>Custom drawer</Text>
    </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
