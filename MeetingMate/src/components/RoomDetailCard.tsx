import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Room} from '../interfaces/commonInterface';
import {COLORS} from '../utils/colors';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface RoomDetailsProps {
  details: Room;
}
export const RoomDetails: React.FC<RoomDetailsProps> = ({ details, style}) => {
  const navigation = useNavigation();
  const onViewScheduleHandler = () => {
    navigation.navigate('Room Details', {details});
  };
  return (
    <View style={styles[style]}>
      <Image source={{uri: details.roomImg}} style={styles.cardImg} />
      <View style={styles.cardContentWrapper}>
<View style={styles.titleBox}>
        <Text style={styles.cardTitle}>{details.name}</Text>
        </View>
        <Text style={styles.cardPlace}>Max Seats: {details.maxLimit}</Text>
        <Text>
          <MaterialCommunityIcons
            name="map-marker"
            size={22}
            color={COLORS.white}
          />{' '}
          <Text style={styles.cardText}>{details.location} ,{details.branch}</Text>
        </Text>
      
        <View style={[styles.cardBox]}>
         
          <View style={[styles.round, { backgroundColor: details.availability ? COLORS.green : COLORS.red }]} />   
          <Text style={[ styles.cardBoldText,{ color: details.availability ? COLORS.green : COLORS.red }]}>
          {details.availability ? '  Available' : '  Busy'}
          </Text>
        
        </View>
        
      
        <Button
          buttonDetails={{name: 'More Info', style: 'viewScheduleBtn'}}
          onPress={onViewScheduleHandler}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.transparent,
    width: 300,
    borderWidth: 0.5,
    borderColor: COLORS.white,
    borderRadius: 10,
    height:380
  },
  cardFullContainer: {
    backgroundColor: COLORS.transparent,
    width: 370,

    borderWidth: 0.5,
    borderColor: COLORS.white,
    borderRadius: 10,
    height:380
  },
  cardBoldText: {
    fontSize:16,
    fontWeight:'800'
  },
  cardImg: {
    width: '100%',
    height: '55%',
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius:10

  },
  cardContentWrapper: {
    flexWrap: 'wrap',
    gap: 3,
    width: '100%',
    paddingRight:20,
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  titleBox: {
    width: '80%',
    paddingRight:10
  },
  innerWrapper: {
    flexDirection: 'row',
    gap: 10,
    padding:5
}
  , Icon: {
    justifyContent: 'center',
    alignItems:'center'
  },
  cardBox: {
    position: 'absolute',
    top: -40,
    left:20,
    flexDirection:'row',
    backgroundColor:'#ffffffa6',
    padding:5,
    paddingLeft: 10,
    borderRadius:5,
    width: 100,
    fontWeight: '700',
    alignItems:'center'
  },
  cardRowContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',

  },

  cardTitle: {
    width:'90%',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.white,
    paddingRight:20

  },
  cardPlace: {
    fontSize: 17,
    color: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',

  },
  cardText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: 16,
  },
  cardInnerContainer: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red',
    backgroundColor: COLORS.transparent,
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: COLORS.white,
    justifyContent: 'space-evenly',
  },
  round: {
    height: 10,
    width: 10,
    borderRadius: 20,

  },
  cardBtn: {},
});
