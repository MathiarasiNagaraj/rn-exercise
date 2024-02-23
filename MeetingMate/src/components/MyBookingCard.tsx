import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../utils/colors';

const MyBookingCard = ({ data ,onEditHandler,onDeleteHandler,style}) => {
    const duration = ''
console.log(data)
  return (
      <View style={styles[style]}>
          <Text style={styles.title}>
              {data.meetingName}
          </Text>
          <Text style={styles.text}>
          <MaterialCommunityIcons
                  name={'map-marker'}
                  size={20}
                  style={{marginLeft:10}}
                  color={COLORS.white}
              />   
               <Text style={styles.text}>
              {  data.roomName}
          </Text>
              {data.location}
          </Text >
          <Text style={styles.text}>
          <MaterialCommunityIcons
                  name={'clock'}
                  size={20}
                  style={{marginLeft:10}}
                  color={COLORS.white}
              />
              {data.start.getHours()+':'+data.start.getMinutes()}
          </Text>
          <Text style={styles.text}>
              <MaterialCommunityIcons
                  name={'timer-sand'}
                  size={18}
                  color={COLORS.white}
                  style={{marginLeft:10}}
              />
              {duration}
          </Text>
          <View style={styles.btnWrapper
        }>
              <Button buttonDetails={{ name: 'Edit Meeting ', style: 'editBtn' }} onPress={onEditHandler} />
              <Button buttonDetails={{ name:'Delete Meeting',style:'deleteBtn' }} onPress={onDeleteHandler}/>
          </View>
</View>
  )
}

export default MyBookingCard
const styles = StyleSheet.create({
    wrapper: {
        width:300,
        alignSelf: 'center',
        alignContent:'center',
        backgroundColor: COLORS.transparent,
        borderRadius: 5,
        padding:15,
        borderWidth: 0.5,
        borderColor:COLORS.white,
    },
    fullwrapper: {
        width:'90%',
        alignSelf: 'center',
        alignContent:'center',
        backgroundColor: COLORS.transparent,
        borderRadius: 5,
        height:200,
        padding:15,
        borderWidth: 0.5,
        borderColor:COLORS.white,
    },
    btnWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    title: {
        fontSize: 19,
        color: COLORS.white,
       fontWeight:'600'
    },
    text: {
        fontSize: 16,
        color: COLORS.white,

    }
})
