import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {HOME} from '../../messages/CommonMessages';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
import StarSVG from '../../assets/images/icons/star.svg';
import {Product} from '../../interface/Products';

interface ProductDetailsProps {
  detail: Product;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({detail}) => {
  const snapPoints = useMemo(() => ['38%', '50%'], []);
  const sizes = (
    <FlatList
      horizontal
      ItemSeparatorComponent={() => <View style={{ width: 0 }} />}

      data={detail.available_sizes}
      renderItem={({item}) => (
        <Text style={[styles.itemWrapper, globalStyles.text]}>{item}</Text>
      )}
      keyExtractor={item => item}
      style={styles.wrapper}
    />
  );
  const handleStyle = {
    width: 100,
    borderRadius: 200,
    backgroundColor: colors.lightGrey,
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={handleStyle}
      backgroundStyle={{borderRadius: 0}}>
      <BottomSheetScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{detail.product_name}</Text>
          <View style={styles.priceWrapper}>
            <View>
              <Text style={styles.orangeText}>
                {detail.price_details.currency_code} {''}
                {detail.price_details.current_price}
              </Text>
              <Text>
                <Text
                  style={[
                    globalStyles.lineThroughText,
                    globalStyles.text,
                    globalStyles.greyText,
                  ]}>
                  {HOME.POPULAR_PRODUCTS.RM}
                  {detail.price_details.actual_price}
                </Text>
                <Text style={[globalStyles.text]}>
                  {''} {detail.price_details.discount}{' '}
                  {HOME.POPULAR_PRODUCTS.OFF}
                </Text>
              </Text>
            </View>
            <View>
              <StarSVG style={[styles.Rating]} />
              <Text style={styles.Rating}>
                {detail.rating_details.rating}/{detail.rating_details.scale}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.sizeWrapper}>
          <Text style={styles.text}>
            {HOME.POPULAR_PRODUCTS.availableSizes}
          </Text>
          <View>{sizes}</View>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    columnGap: 10,
    rowGap: 20,
    marginLeft: 35,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 19,
    color: colors.black,

    marginBottom: 10,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  text: {
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    fontSize: 16,
  },
  textContainer: {
    backgroundColor: colors.white,
    padding: 22,
  },

  orangeText: {
    fontFamily: 'Poppins-Regular',
    color: colors.darkOrange,
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 5,
  },
  Rating: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  itemWrapper: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '300',
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 10,
  },
  sizeWrapper: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: colors.lightGrey,

    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
});

export default ProductDetails;
