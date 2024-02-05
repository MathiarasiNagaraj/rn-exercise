import React from 'react';
import {Text, StyleSheet, SafeAreaView,StatusBar} from 'react-native';

import { colors } from '../../styles/colors';
/**
 * @description Header Component of the app
 * @returns Header Component of the app
 */
export const Header = ({title,icon,style,cart}) => {
  return (
    <SafeAreaView style={[styles.wrapper,style]}>
      {title && <Text style={styles.title}  >{ title}</Text>}
     {icon&&icon}
      {cart && cart}
      <StatusBar backgroundColor={colors.white} barStyle= "dark-content"  />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
   
    zIndex: 1000,
  
    // marginBottom:200
 
   
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 27,
    color:colors.black
  }
  
});
