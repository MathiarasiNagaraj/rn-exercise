import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { COLORS } from '../utils/colors';
const DateInput = ({name,placeholder,onChange}) => {

    const [inputTime, setInputTime] = useState();
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const onChangeHandler = () => {
   
     
    }
    return (
        <View>
        <TextInput
          placeholder={placeholder}
          style={styles.inputBox}
          value={inputTime}
          onChange={onChangeHandler}
          onBlur={onChangeHandler}
          onFocus={() => setOpen(true)}
        />
        
        <DatePicker
          mode='time'
                modal
            
          open={open}
          date={date}
          onConfirm={(selectedDate) => {
            setOpen(false);
            
            const hours = selectedDate.getHours();
            const minutes = selectedDate.getMinutes();
            
            const formattedHours = String(hours).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            
            const formattedTime = `${formattedHours}:${formattedMinutes}`;
            
            setInputTime(formattedTime);
            onChange({ name, value:selectedDate });
          }}
          onCancel={() => {
            setOpen(false);
          }}
          date={date}
        />
      </View>
      
  )
}

export default DateInput
const styles = StyleSheet.create({
    inputBox: {
        width:130,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        color: COLORS.white,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor:COLORS.transparent,
        borderWidth: 0.5,
        borderColor:COLORS.white
    }
})