import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { LinearGradientView } from '../containers/LinearGradientView';
import { BookByScan } from '../screens/BookByScan';
import {Home} from '../screens/Home';
import {Login} from '../screens/Login';
import { Main } from '../screens/Main';
import { MeetingRoom } from '../screens/MeetingRoom';
import { MeetingRoomBooking } from '../screens/MeetingRoomBooking';
import MyAccount from '../screens/MyAccount';
import MyMeetings from '../screens/MyMeetings';
import Rooms from '../screens/Rooms';
import Search from '../screens/Search';


export const StackNavigator = ({screenDetails}) => {
  const components = {
  Home:Home,
    Login: Login,
    MeetingRoom: MeetingRoom,
    MeetingRoomBooking: MeetingRoomBooking,
    Search: Search,
    Rooms: Rooms,
MyMeetings:MyMeetings,
    BookByScan: BookByScan,
    MyAccount:MyAccount
  };

  const Stack = createStackNavigator();
  const screen = screenDetails.map(details => (

    <Stack.Screen 
      
      name={details.name}
      component={components[details.component]}
      key={details.name}
      />

  ));
  return <Stack.Navigator screenOptions={{headerShown:false}} >{screen}</Stack.Navigator>;
};
