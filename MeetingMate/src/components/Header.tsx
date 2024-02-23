import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
export const Header = () => {
    const navigation = useNavigation();
    const myImage = require('../assets/images/AppLogo.png');
    const onAccountClickHandler = () => {
        navigation.navigate('MyAccount')
    }
  return (
      <View style={styles.wrapper}>
          <Image source={myImage} alt='logo' style={styles.logo} />
          <MaterialCommunityIcons name="account-circle" size={35} color={COLORS.white} onPress={ onAccountClickHandler} />
</View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
alignItems:'center'
    },
    logo: {
        height:65,
        width: 210,

    }

})