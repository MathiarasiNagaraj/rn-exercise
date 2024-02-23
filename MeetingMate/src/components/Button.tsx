import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { COLORS } from '../utils/colors';

const Button = ({buttonDetails, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[buttonDetails.style]}>
      <Text style={styles.btnText}>{buttonDetails.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: COLORS.vividCyan,
        height: 50,
        elevation:10,
        width: '90%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,

  },
  viewScheduleBtn: {
    backgroundColor: COLORS.vividCyan,
    padding: 8,
    width: '100%',
    alignSelf:'center',
    paddingHorizontal:24,
    borderRadius: 10,
    alignItems: 'center',
  marginTop:10
  },
  scanBtn: {
    backgroundColor: COLORS.vividCyan,
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  BookBtn: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.vividCyan,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
  bookBtn: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.vividCyan,
    justifyContent: 'center',
    alignItems:'center'
  },
    btnText: {
        color: COLORS.white,
        fontWeight: '500',
        fontSize:16
      
    },
  editBtn: {

    padding: 10,
borderRadius:10,
    color: COLORS.darkCyan,
    backgroundColor:COLORS.transparent,
    fontWeight: '500',
    fontSize:14
    },
  deleteBtn: {
    padding: 10,
    borderRadius:10,

    backgroundColor:COLORS.transparent,
    color: COLORS.red,
    fontWeight: '500',
    fontSize:14
    }
});
