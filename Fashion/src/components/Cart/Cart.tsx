import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShoppingCart from '../../assets/images/icons/shoppingCart.svg';
import {CartContext} from '../../context/CartContext';
import { colors } from '../../styles/colors';

/**
 * @description Cart component with quantity
 * @returns Cart Component
 */
const Cart = () => {
  const {cartCount} = useContext(CartContext);
  return (
    <View style={styles.cartIcon}>
      <ShoppingCart style={styles.img} />
      <View style={styles.count}>
        <Text style={styles.countText}>{cartCount}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartIcon: {
    position: 'relative',
  },
  img: {
    height: 120,
    width: 320,
  },
  count: {
    position: 'absolute',
    top: -10,
    right: -6,
    height: 20,
    width: 20,
    backgroundColor: colors.darkOrange,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: 'Poppins-Regular',
  },
});
