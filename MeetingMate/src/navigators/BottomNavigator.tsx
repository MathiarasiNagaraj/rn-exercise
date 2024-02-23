 import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainScreens } from '../constants/commonConstants';
import { Home } from '../screens/Home';
import { MeetingRoomBooking } from '../screens/MeetingRoomBooking';
import { MyBooking } from '../screens/MyBooking';
import { Setting } from '../screens/Setting';
import { COLORS } from '../utils/colors';
import { getBottomBarIconName } from '../utils/commonUtils';
import {useNavigation} from '@react-navigation/native';
export const BottonNavigator = ({ screenDetails }) => {
  const navigation = useNavigation();
  const renderIcon = (routeName: string, selectedTab: string) => {
    
    return (
      <MaterialCommunityIcons
        name={getBottomBarIconName(routeName)}
        size={20}
        color={routeName === selectedTab ? COLORS.brightCyan : COLORS.darkCyan}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
       
        {renderIcon(routeName, selectedTab)}
        <Text style={styles.tabName}>{routeName}</Text>
      </TouchableOpacity>
    );
  };
  const onScanerClickHandler = () => {
    navigation.navigate('Scan and book')
  }
  const components = {
    Home: Home,
    MeetingRoomBooking: MeetingRoomBooking,
    MyBooking: MyBooking,
    Setting:Setting
  };
  const screens = MainScreens.map((screen) => <CurvedBottomBar.Screen   name={screen.name} key={screen.name} position={screen.position} component={components[screen.component]}   options={{}} ></CurvedBottomBar.Screen>)
  return (

    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      // shadowStyle={styles.shawdow}
      height={50}
      circleWidth={50}
      bgColor={COLORS.white}
      borderTopLeftRight={false}

      initialRouteName="Home"
      
      screenOptions={{
        headerTransparent:true,
       headerShown:true
      }}
      

      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={onScanerClickHandler}
          >
      {renderIcon('Scan', selectedTab)}
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
  {screens}
    </CurvedBottomBar.Navigator>

  )
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tabName: {
    color: COLORS.darkCyan,
    fontWeight:'500'
  },
  shawdow: {
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:COLORS.vividCyan
  },
  bottomBar: {
   backgroundColor:COLORS.transparent,

borderWidth:0
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    shadowColor: COLORS.vividCyan,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    marginBottom: 10,
    borderColor:COLORS.vividCyan,
    backgroundColor:COLORS.vividCyan
   
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
    marginBottom: 10,

  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});