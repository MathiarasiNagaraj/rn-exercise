import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { SCREEN } from '../../constants/commonConstants';
import { Product } from '../../interface/Products';

/**
 * @description Product Image component
 * @param detail Product details
 * @returns Product Image
 */
interface ProductImageProps {
  detail: Product;
}
const ProductImage :React.FC<ProductImageProps>= ({detail}) => {
  const navigation = useNavigation();

  const handleProductClick = () => {
    navigation.navigate(SCREEN.PRODUCT, {detail});
  };
  return (
    <TouchableOpacity onPress={handleProductClick} style={styles.shadowProp}>
      <Image source={{uri: detail.modelImg}} style={styles.img} />
    </TouchableOpacity>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 130,
    // marginLeft: 25,
    position: 'relative',
    borderRadius: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 13,
    elevation: 5,
  },
});
