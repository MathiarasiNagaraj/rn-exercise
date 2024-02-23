import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../utils/colors';
import {Input} from './Input';
import {useNavigation} from '@react-navigation/native';
export const SearchBar = () => {
  const navigation = useNavigation();
  const onQRHandler = () => {
    navigation.navigate('Scan and book')
  }
  const onFocusHandler = () => {
    navigation.navigate('Search')
  }
  return (
    <View style={styles.searchBar}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons name="magnify" size={23} color={COLORS.white} />
        <TextInput placeholder={'Search Rooms'} onFocus={ onFocusHandler} />
      </View>
      <MaterialCommunityIcons
        name="qrcode-scan"
        size={23}
        color={COLORS.white}
        style={{ alignItems: 'flex-end' }}
        onPress={onQRHandler}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    width: '92%',
    flexDirection: 'row',

    alignSelf: 'center',

    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: COLORS.transparent,
  },
});
