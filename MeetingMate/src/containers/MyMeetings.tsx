import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MyBookingCard from '../components/MyBookingCard';
import {COLORS} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
export const MyMeetings = ({ MyBookingDetails }) => {
    const navigation = useNavigation();
  const onEditHandler = () => {};
    const onDeleteHandler = () => { };
    const onViewAllClickHandler = () => { 
        navigation.navigate('MyMeetings', { MyBookingDetails })
    };
  
  const updatedData=MyBookingDetails.map((meeting) => {

      
    return {
      ...meeting,
      title:meeting.meetingName,
        start: meeting.startTime.toDate(),
        end: meeting.endTime.toDate()
    };
  });
  const myBookings = (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={updatedData}
      contentContainerStyle={{paddingHorizontal: 20}}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      renderItem={item => (
          <MyBookingCard
              style={'wrapper'}
          data={item.item}
          onDeleteHandler={onDeleteHandler}
          onEditHandler={onEditHandler}
        />
      )}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>My Meetings</Text>
        <Text style={styles.underLineText} onPress={onViewAllClickHandler}>View All</Text>
      </View>
      {myBookings}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {

    marginVertical: 15,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 23,
    color: COLORS.white,
    fontWeight: '600',
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
  },
  underLineText: {
    textDecorationLine: 'underline',
    color: COLORS.white,
  },
});
