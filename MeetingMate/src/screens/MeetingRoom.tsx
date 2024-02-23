import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {LinearGradientView} from '../containers/LinearGradientView';
import {useRoute, useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import {COLORS} from '../utils/colors';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenHeader from '../components/ScreenHeader';
import {Calendar} from 'react-native-big-calendar';
import { readMeetingbyRoomId } from '../services/firestore';

export const MeetingRoom = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {details} = route.params;


  const [events, setEvents] = useState([]);
    useEffect(() => {
      const getData = async() => {
        const data = await readMeetingbyRoomId(details.id);
        const updatedData = data.map((meeting) => {

      
          return {
            ...meeting,
            title:meeting.meetingName,
              start: meeting.startTime.toDate(),
              end: meeting.endTime.toDate()
          };
        });

        setEvents(updatedData);
       
      }

      getData()
    }, [details]);
  

  const onBookHandler = () => {
    navigation.navigate('Room Booking');
  };

  return (
    <LinearGradientView>
      <ScreenHeader title={'Meeting Room'} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: details.roomImg}} style={styles.roomImg} />
        <Text style={styles.title}>{details.name}</Text>
        <View style={styles.locationBox}>
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color={COLORS.white}
          />
          <Text style={styles.text}>
            {details.location},{details.branch}
          </Text>
        </View>

        <Text style={[styles.text, {alignSelf: 'flex-start'}]}>
          Facilities:
        </Text>
        <View style={styles.innerWrapper}>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="chair-rolling"
              size={20}
              style={styles.box}
              color={COLORS.white}
            />
            <Text style={styles.iconText}>{details.maxLimit}</Text>
          </View>
          {details.monitorAvailablity && (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="monitor"
                size={20}
                style={styles.box}
                color={COLORS.white}
              />
              <Text style={styles.iconText}>Monitor</Text>
            </View>
          )}
          {details.boardAvailablity && (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="human-male-board"
                size={20}
                style={styles.box}
                color={COLORS.white}
              />
              <Text style={styles.iconText}>White Board</Text>
            </View>
          )}

          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="wifi"
              size={20}
              style={styles.box}
              color={COLORS.white}
            />
            <Text style={styles.iconText}>{details.wifiName}</Text>
          </View>
        </View>
       
        <Text style={styles.text}>Today Meetings</Text>
     
     <Calendar
       swipeEnabled={false}
       ampm={true}
     showVerticalScrollIndicator={false}
         bodyContainerStyle={{paddingHorizontal:5,marginBottom:100}}
       events={events}
       headerContainerStyle={{display: 'none'}}
          height={800}
  scrollOffsetMinutes={1200}
       mode="day"
    
       hourStyle={{color: COLORS.white}}
       dayHeaderStyle={{ display: 'none' }}
       weekDayHeaderHighlightColor={'white'}
       />
      </ScrollView>
   
    
      <View style={styles.btnContainer}>
        <Button
          buttonDetails={{name: 'Book a Slot', style: 'bookBtn'}}
          onPress={onBookHandler}
        />
      </View>
    </LinearGradientView>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    height: 70,
    backgroundColor: COLORS.transparent,
    padding: 10,
  },
  icon: {
    height: 50,
    width: 50,

    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightTransparent,
  },
  iconText: {
    color: COLORS.white,
    fontSize: 12,
  },
  innerWrapper: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationBox: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  roomImg: {
    width: '100%',
    height: 240,
    borderRadius: 5,
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    color: COLORS.white,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.white,
    alignSelf: 'flex-start',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
    padding: 15,
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    height: '80%',
    width: '90%',
    backgroundColor: COLORS.transparent,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
  },
});
