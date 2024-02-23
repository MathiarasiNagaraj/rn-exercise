import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { LinearGradientView } from '../containers/LinearGradientView'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenHeader from '../components/ScreenHeader';
import { RoomDetails } from '../components/RoomDetailCard';
import {useRoute, useNavigation} from '@react-navigation/native';
const Rooms = () => {
  const route = useRoute();
  const { rooms } = route.params;
  return (
      <LinearGradientView>
        <ScreenHeader title={'Meeting Rooms'}/>
        <FlatList
     
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 20,justifyContent:'center',}}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
        data={rooms}
        renderItem={({ item }) => <RoomDetails key={item.id} details={item} style={ 'cardFullContainer'} />}
        keyExtractor={item => item.name}
      />
    </LinearGradientView>
  )
}

export default Rooms