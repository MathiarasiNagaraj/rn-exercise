import React, { useState } from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { COLORS } from '../utils/colors';

export const Input = ({
  type,
  maxLength,
  autoCapitalize,
  autoComplete,
  placeholder,
  style,
  isPassword,
  onChange,
  name
}) => {
  const [text, setText] = useState();

  return (

    <TextInput
      style={styles[style]}
      cursorColor={COLORS.white}
      keyboardType={type}
      maxLength={maxLength}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onChangeText={(text)=>onChange({name,value:text})}
      placeholderTextColor={COLORS.white}
      secureTextEntry={isPassword}
      />

  );
};
const styles = StyleSheet.create({
  email: {
    color:COLORS.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.white,
    paddingLeft:20,
    fontSize: 15,
    width:'90%',
    height: 50,
  },
  text: {
    color:COLORS.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.white,
    paddingLeft:20,
    fontSize: 15,
    width:'90%',
    height: 50,
  }
});
