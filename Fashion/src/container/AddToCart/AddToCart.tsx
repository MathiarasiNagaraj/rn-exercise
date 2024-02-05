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
/**
 * @description Add to Cart container with icons
 * @param onAddToCartHandler function pointer for cart handler
 * @returns  Add to cart container
 */
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
    backgroundColor:colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    columnGap: 30,
    padding: 28,
    elevation: 13,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 10,
    shadowOpacity:0.35,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left:0
  },
});
