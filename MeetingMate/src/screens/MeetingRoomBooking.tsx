import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ROOM_BOOKING_FORM} from '../config/formConfig';
import {Form} from '../containers/Form';
import {COLORS} from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToAndroidCal} from '../utils/calender';
import {LinearGradientView} from '../containers/LinearGradientView';
import {useNavigation} from '@react-navigation/native';
import {addData, COLLECTIONS} from '../services/firestore';
import ScreenHeader from '../components/ScreenHeader';
export const MeetingRoomBooking = () => {
  const onSubmitHandler = async formdata => {
    await addData(COLLECTIONS.Meetings, formdata);

    // addToAndroidCal(
    //   formdata.meetingName,
    //   formdata.startTime,
    //   formdata.endTime,
    //   formdata.roomName,
    // );
  };
  const navigation = useNavigation();

  const goBackHandler = () => {
    navigation.goBack();
  };
  return (
    <LinearGradientView>
     <ScreenHeader title={'Room Booking'}/>
      <View style={styles.container}>
        <Form formDetails={ROOM_BOOKING_FORM} onSubmit={onSubmitHandler} />
      </View>
    </LinearGradientView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
marginTop:50,
    alignItems: 'center',
  },
});
