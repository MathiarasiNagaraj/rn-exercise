import React from 'react';
import {Text, StyleSheet, SafeAreaView, StatusBar, View,Platform} from 'react-native';

import {colors} from '../../styles/colors';
/**
 * @description Header Component of the app
 * @returns Header Component of the app
 */
export const Header = ({title, icon, style, cart}) => {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      <View style={styles.innerWrapper}>
        {title && <Text style={styles.title}>{title}</Text>}
        {icon && icon}
        {cart && cart}
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    zIndex: 1000,
  },
  innerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    ...Platform.select({
      android: {    fontFamily:'Poppins-Regular',fontWeight: '900',},
      ios:{    fontWeight: '900',}
    }),
    color: colors.black,
  },
});
