import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cart from '../../components/Cart/Cart';
import {TITLE} from '../../constants/commonConstants';
import {TabBar} from '../../navigators/TabBar/TabBar';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
import {Header} from '../Header/Header';
import MainSection from '../MainSection/MainSection';


/**
 * @description Top Section container  component used in Home screen
 * @returns container for Header and Top bar
 */
const TopSection = () => {
  const navigation = useNavigation();
  const handleDrawerOpen = () => {
    navigation.toggleDrawer();
  };
  return (
    <>
      <Header
        title={TITLE}
        style={globalStyles.bgColor(colors.white)}
        icon={undefined}
        cart={
          <TouchableOpacity onPress={handleDrawerOpen}>
            <Cart />
            </TouchableOpacity>
          }
      />
      <TabBar tabContentComponent={MainSection}  />
  

    </>
  );
};

export default TopSection;
