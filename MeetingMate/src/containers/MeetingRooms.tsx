import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RoomDetails} from '../components/RoomDetailCard';
import {MEETING_ROOM} from '../constants/commonConstants';
import {Room} from '../interfaces/commonInterface';
import {COLORS} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
export const MeetingRooms = ({ rooms }) => {
  const navigation = useNavigation();
  const onViewAllClickHandler = () => { 
    navigation.navigate('Rooms',{rooms})
  };
  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Meeting Rooms</Text>
        <Text style={styles.underLineText } onPress={onViewAllClickHandler}>View All</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
        data={rooms}
        renderItem={({item}) => <RoomDetails key={item.id} details={item} style={'cardContainer'} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
const styles = StyleSheet.create({
 
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
