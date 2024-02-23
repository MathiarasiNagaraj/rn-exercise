import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../utils/colors';
import { getOptions } from '../utils/commonUtils';

const DropDownInput = ({style,onChange,placeholder,options,name}) => {

      const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [optionList, setOptionList] = useState([]);
  useEffect(() => {
  
    const getOptionsList = async () => {
      const option= await getOptions(options);
     
      setOptionList(option);
    }
    getOptionsList();

},[])
  return (

    <Dropdown
      
    style={[styles.dropdown, isFocus && { borderColor: 'white' }]}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
      data={optionList}
      search
    
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder={placeholder}
    searchPlaceholder="Search..."
    value={value}
    onFocus={() => setIsFocus(true)}
    onBlur={() => setIsFocus(false)}
    onChange={item => {
      setValue(item.value);
onChange({name,value:item.value})
      setIsFocus(false);
    }}
   
  />
  )
}

export default DropDownInput

const styles=StyleSheet.create({dropdown: {
    height: 50,
    borderColor: COLORS.white,
  width: '90%',
    color:COLORS.white,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color:COLORS.white
  },
  selectedTextStyle: {
    fontSize: 16,
    color:COLORS.white
  },
  iconStyle: {
    width: 30,
    height: 20,
tintColor:COLORS.white,

  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },})