import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../utils/colors';
const CheckBoxInput = ({placeholder,onChange,name}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const onChangeHandler = () => {
    onChange({name,value:toggleCheckBox})
}

    return (
        <View style={styles.wrapper}>
            
    <CheckBox
                disabled={false}
                onTintColor={COLORS.white}
                onCheckColor={COLORS.white}
                onFillColor={COLORS.white}
   
style={{borderColor:COLORS.white}}
        tintColor={COLORS.white}
      value={toggleCheckBox}
                onValueChange={(newValue) => {
                    setToggleCheckBox(newValue)
                    onChange({ name, value: newValue })
                }}
            />
            <Text style={styles.placeholder} >{placeholder }</Text>
            </View>
  )
}

export default CheckBoxInput

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        width: '90%',
   gap:20,
        alignItems:'center'
        
    },
    placeholder: {
        fontSize: 16,
        color:COLORS.white
    }
})