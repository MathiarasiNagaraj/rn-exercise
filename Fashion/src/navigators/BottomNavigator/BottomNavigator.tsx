import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Animated, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import TopSection from '../../container/TopSection/TopSection';
import Profile from '../../screens/Profile/Profile';
import Help from '../../screens/Help/Help';
import WishList from '../../screens/WishList/WishList';

interface RenderTabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void; // Assuming navigate is a function that takes a string argument
}

/**
 * @description Bottpm navigator component used in Home screen
 * @returns Bottom Navigator component 
 */
const BottomNavigator = () => {
  const renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        break;
      case 'WishList':
        icon = 'heart';
        break;
      case 'Help':
        icon = 'help-circle';
        break;
      case 'Profile':
        icon = 'account-circle';
        break;
    }

    return (
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: RenderTabBarProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {renderIcon(routeName, selectedTab)}
        <Text style={{color: colors.black, fontSize: 13}}> {routeName}</Text>
      </TouchableOpacity>
    );
  };
 
  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      height={80}
      circleWidth={60}
      bgColor="white"
      initialRouteName="Home"
      borderTopLeftRight={false}
      screenOptions={{headerShown: false}}
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name={'magnify'} color="white" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={'Home'}
        position={'LEFT'}
        component={TopSection}
      />
      <CurvedBottomBar.Screen
        name={'WishList'}
        position={'LEFT'}
        component={WishList}
      />
      <CurvedBottomBar.Screen
        name={'Help'}
        position={'RIGHT'}
        component={Help}
      />
      <CurvedBottomBar.Screen
        name={'Profile'}
        position={'RIGHT'}
        component={Profile}
      />
    </CurvedBottomBar.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 90,
  },

  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    bottom: 20,

    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
