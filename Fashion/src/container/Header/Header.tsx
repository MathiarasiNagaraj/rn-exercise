import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
  StyleProp,
  ViewStyle
} from 'react-native';
import { colors } from '../../styles/colors';


interface HeaderProps{
  title?: string,
  style?: StyleProp<ViewStyle>
  icon: React.ReactNode,
  cart:React.ReactNode
}
/**
 * @description Reusable Header component of Home Screen
 * @param title title of the app
 * @param icon icon to be used in header
 * @param style custom style for header
 * @param cart component
 * @returns  Reusable Header
 */
export const Header :React.FC<HeaderProps>= ({title, icon, style, cart}) => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <SafeAreaView style={[styles.wrapper,style]}>
        <View style={[styles.innerWrapper,style]}>
          {title && <Text style={styles.title}>{title}</Text>}
          {icon && icon}
          {cart && cart}
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    
  },
  innerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.select({android: 25, ios: 10}),
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    ...Platform.select({
      android: {fontFamily: 'Poppins-Regular', fontWeight: '900'},
      ios: {fontWeight: '900'},
    }),
    color: colors.black,
  },
});
