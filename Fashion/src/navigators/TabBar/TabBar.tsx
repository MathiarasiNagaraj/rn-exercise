import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CATEGORY} from '../../constants/commonConstants';
import {colors} from '../../styles/colors';
import {StyleSheet,Platform} from 'react-native';
/**
 * @description Top bar component using React Navigation material top bar
 * @returns Top Bar component
 */
export const TabBar = ({ tabContentComponent }) => {
  const Tab = createMaterialTopTabNavigator();

  const tabItems = CATEGORY.map(category => (
    <Tab.Screen
    
      name={category.name}
      key={category.name}
      children={() => React.createElement(tabContentComponent, { category: category.category })}
    />
  ));

  return (
    <Tab.Navigator
    
     style={styles.wrapper}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 17,
          fontWeight: '500',
          fontFamily: 'Poppins-Medium',
          textTransform: 'capitalize',
          backgroundColor: colors.white
        
        },

        tabBarScrollEnabled:true,
        tabBarItemStyle: {
          width: 98,
        
        },
        tabBarActiveTintColor: colors.black,
        tabBarIndicatorStyle: {
          borderBottomWidth: 4,
          borderBottomColor: colors.black,
        },
      }}>
      {tabItems}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    ...Platform.select(
      {
        ios: {
          marginTop:90
        },
        android: {
        marginTop:85
        }
      }
    )
}
})