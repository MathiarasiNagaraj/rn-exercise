import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useContext} from 'react';
import LeftArrowSVG from '../../assets/images/icons/leftArrow.svg';
import Cart from '../../components/Cart/Cart';
import {CartContext} from '../../context/CartContext';
import {globalStyles} from '../../styles/globalStyle';
import {useNavigation} from '@react-navigation/native';
import AddToCart from '../../container/AddToCart/AddToCart';
import Icon from '../../components/Icon/Icon';
import {Header} from '../../container//Header/Header';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

export const Product = ({route}) => {
  const {detail} = route.params;
  const {addToCart} = useContext(CartContext);
  const navigation = useNavigation();

  const handleBackClick = () => {
    navigation.goBack();
  };

  const onAddToCartHandler = () => {
    addToCart(detail.id);
  };
  const handleDrawerOpen = () => {
    navigation.toggleDrawer();
  };
  return (
    <>
      <ScrollView>
        <Header
          icon={
            <TouchableOpacity onPress={handleBackClick}>
              <Icon icon={<LeftArrowSVG />} style={globalStyles.whiteIcon} />
            </TouchableOpacity>
          }
          cart={
            <Icon
              icon={
                <TouchableOpacity onPress={handleDrawerOpen}>
                  <Cart />
                </TouchableOpacity>
              }
              style={globalStyles.whiteIcon}
            />
          }
          title={undefined}
          style={{
            backgroundColor: `rgba(255, 0, 0, 0)`,
            paddingHorizontal: 12,
          }}
        />
        <Image source={{uri: detail.modelImg}} style={styles.img} />
        <ProductDetails detail={detail} />
      </ScrollView>
      <AddToCart onAddToCartHandler={onAddToCartHandler} />
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    ...Platform.select({
      ios: {
        height: 650,
      },
      android: {
        height: 780,
      },
    }),
    width: '100%',
  },

  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    position: 'absolute',
  },
});
