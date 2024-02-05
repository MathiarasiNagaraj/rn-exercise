import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SCREEN} from '../../constants/commonConstants';
import {Product} from '../../interface/Products';


interface ProductImageProps {
  detail: Product;
}
/**
 * @description Product Image component
 * @param detail Product details
 * @returns Product Image
 */
const ProductImage: React.FC<ProductImageProps> = ({detail}) => {
  const navigation = useNavigation();

  const handleProductClick = () => {
    navigation.navigate(SCREEN.PRODUCT, {detail});
  };
  return (
    <TouchableOpacity onPress={handleProductClick}>
      <Image source={{uri: detail.modelImg}} style={styles.img} />
    </TouchableOpacity>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 130,
    position: 'relative',
    borderRadius: 5,
  },
});
