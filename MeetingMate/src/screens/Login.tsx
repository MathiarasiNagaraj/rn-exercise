import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IndexScreens } from '../constants/commonConstants';
import { LinearGradientView } from '../containers/LinearGradientView';
import { Form } from '../containers/Form';
import { LOGIN_FORM } from '../config/formConfig';
import { BlurView } from '@react-native-community/blur';
export const Login = () => {
  const navigate = useNavigation();
  const onLoginHandler = (data) => {
navigate.navigate('Home')
  };
  return (
    <LinearGradientView>
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        {/* <BlurView  style={{ flex: 1 }} blurAmount={0}> */}
    <ScrollView   contentContainerStyle={{flex:1,justifyContent:'center'} } >
        <Form formDetails={LOGIN_FORM} onSubmit={ onLoginHandler} />
          </ScrollView>
          {/* </BlurView> */}
      </KeyboardAvoidingView>
      </LinearGradientView>
  );
};

const styles = StyleSheet.create({});
