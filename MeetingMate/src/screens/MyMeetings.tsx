import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { LinearGradientView } from '../containers/LinearGradientView'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenHeader from '../components/ScreenHeader';
import {useRoute, useNavigation} from '@react-navigation/native';
import MyBookingCard from '../components/MyBookingCard';

const MyMeetings = () => {
    const route = useRoute();
    const { MyBookingDetails } = route.params;

    const onEditHandler = () => {};
    const onDeleteHandler = () => { };
    const myBookings = (
        <FlatList

          showsHorizontalScrollIndicator={false}
          data={MyBookingDetails}
         contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
          renderItem={item => (
              <MyBookingCard
                  style={'fullwrapper'}
                  data={item.item}
                  
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
            />
          )}
        />
      );
  return (
      <LinearGradientView>
         <ScreenHeader title={'My Meetings'}/>
         {myBookings}
    </LinearGradientView>
  )
}

export default MyMeetings
export const styles = StyleSheet.create({
    container: {
       paddingVertical:20
   }
})