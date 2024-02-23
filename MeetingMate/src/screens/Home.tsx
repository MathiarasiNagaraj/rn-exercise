import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import FloatingButton from '../components/FloatingButton'
import { Header } from '../components/Header'
import { RoomDetails } from '../components/RoomDetailCard'
import { SearchBar } from '../components/SearchBar'
import { MEETING_ROOM } from '../constants/commonConstants'
import { LinearGradientView } from '../containers/LinearGradientView'
import { MeetingRooms } from '../containers/MeetingRooms'
import { MyMeetings } from '../containers/MyMeetings'
import { COLLECTIONS, readAllRooms, readMeetingbyUserId, } from '../services/firestore'
import {useNavigation} from '@react-navigation/native';
export const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [meetings, setMeetings] = useState([])
  const navigation = useNavigation();
  useEffect(() => {
   const getData= async () => {
     const data = await readAllRooms();
     const meetingDetails = await readMeetingbyUserId("Mathi");
     setRooms(data);

     setMeetings(meetingDetails)
   }
  
getData()
  }, [])
  const onFormNavigationHandler = () => {
      navigation.navigate('Room Booking')
  }
  return (
    <LinearGradientView>
   <Header/>
    <View style={styles.container}>
        <SearchBar />
        <MyMeetings  MyBookingDetails={meetings}/>
        <MeetingRooms rooms={ rooms} />

      </View>
      <FloatingButton onPress={onFormNavigationHandler}/>
      </LinearGradientView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,

   }
})