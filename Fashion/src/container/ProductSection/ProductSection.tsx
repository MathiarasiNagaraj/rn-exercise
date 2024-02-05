import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet, View, Text, Platform} from 'react-native';
import ProductImage from '../../components/ProductImage/ProductImage';
import {HOME} from '../../messages/CommonMessages';
import {colors} from '../../styles/colors';
import {Product} from '../../interface/Products';

interface ProductSectionProps {
  selectedProduct: Product[];
}

/**
 * @description Component for Products Container
 * @param array of selected Category Products
 * @returns  Product Container Component
 */

const ProductSection: React.FC<ProductSectionProps> = ({selectedProduct}) => {
  const products = (
    <FlatList
      horizontal
      contentContainerStyle={{paddingHorizontal: 30}}
      data={selectedProduct}
      ItemSeparatorComponent={() => <View style={{width: 20}} />}
      renderItem={({item}) => <ProductImage detail={item} />}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
  return (
    <View style={styles.sectionWrapper}>
      <Text style={styles.title}>{HOME.POPULAR_PRODUCTS.title}</Text>
      <View style={styles.wrapper}>{products}</View>
    </View>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  sectionWrapper: {
    marginVertical: 20,
  },
  wrapper: {
    marginVertical: 20,
  },
  title: {
    fontSize: 22.5,

    ...Platform.select({
      android: {fontWeight: '900'},
      ios: {fontWeight: '700'},
    }),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    paddingLeft: 30,
  },
});
