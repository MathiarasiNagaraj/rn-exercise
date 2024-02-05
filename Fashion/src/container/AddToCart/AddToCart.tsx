import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {HOME} from '../../messages/CommonMessages';
import {globalStyles} from '../../styles/globalStyle';
import DressHangerSVG from '../../assets/images/icons/dressHanger.svg';
import HeartSVG from '../../assets/images/icons/heart.svg';
import {colors} from '../../styles/colors';
import Icon from '../../components/Icon/Icon';

interface AddToCartProps {
  onAddToCartHandler: () => void;
}
const AddToCart: React.FC<AddToCartProps> = ({onAddToCartHandler}) => {
  return (
    <View style={styles.bottomWrapper}>
      <Icon style={globalStyles.greyIcon} icon={<HeartSVG height={28} width={28} />} />
      <Icon style={globalStyles.greyIcon} icon={<DressHangerSVG  height={28} width={28} />} />
      <TouchableOpacity
        style={globalStyles.primaryBtn}
        onPress={onAddToCartHandler}>
        <Text style={[globalStyles.text, globalStyles.whiteText]}>
          {HOME.POPULAR_PRODUCTS.addToCart}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;
const styles = StyleSheet.create({
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    columnGap: 30,
    height:125,
    padding: 28,
    backgroundColor: colors.white,
    elevation: 13,
  },
});
