import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import {Input} from '../components/Input';
import {COLORS} from '../utils/colors';
import {getOptions} from '../utils/commonUtils'
import {TextInput} from 'react-native-gesture-handler';
import DropDownInput from '../components/DropDownInput';
import CheckBoxInput from '../components/CheckBoxInput';
import DateInput from '../components/DateInput';
import { MEETING_ROOM } from '../constants/commonConstants';
import { ROOM_BOOKING_FORM } from '../config/formConfig';
export const Form =({formDetails, onSubmit}) => {
  const [formData, setFormData] = useState({});

  const onChangeHandler = (data) => {

    setFormData({ ...formData, [data.name]: data.value });

  }

  

 
  const onSubmitHandler = () => {

    onSubmit(formData)
  
  }

  const shortfields = formDetails.isHavingShortFields && formDetails.fields.map(field => {
    switch (field.type) {

      case 'time':
        return (
          <DateInput key={field.name} name={field.name} placeholder={field.placeholder} onChange={onChangeHandler} />
        );
      default:
        return null; // Or render a default component if type is unknown
    }
  });
  const fields =formDetails.fields.map( field => {
    switch (field.type) {
      case 'email-address':
      case 'default':
        return (
          <Input
            style={field.style}
            placeholder={field.placeholder}
            isPassword={field.isPassword}
            key={field.name}
            name={field.name}
            onChange={onChangeHandler}
          />
        );
      case 'dropDown':
     
   
        return (
          <DropDownInput
            style={field.style}
            onChange={onChangeHandler}
            placeholder={field.placeholder}
            options={field.options}
            name={field.name}
            key={field.name}
          />
        );
      case 'checkBox':
        return (
          <CheckBoxInput placeholder={field.placeholder} onChange={onChangeHandler} name={field.name} />
        );
      default:
        return null; // Or render a default component if type is unknown
    }
  });
  


  return (
    <View style={styles[formDetails.style]}>
      {fields}
      <View style={styles.wrapper}>
      {shortfields}
      </View>
      <Button buttonDetails={formDetails.buttons} onPress={onSubmitHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: COLORS.transparent,
    height: 400,
    width: '90%',
    borderRadius: 10,

    alignItems: 'center',
    alignSelf: 'center',
    gap: 25,
  },
  wrapper: {
    width:'90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookingFormStyle: {
    width: '90%',
    backgroundColor: COLORS.transparent,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:35,
    gap: 20,

    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
});
