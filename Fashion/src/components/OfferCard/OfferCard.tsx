import React from 'react';
import {Image, StyleSheet, Text, View,Dimensions} from 'react-native';
import {Offer} from '../../interface/Products';
import {HOME} from '../../messages/CommonMessages';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
interface OfferProps {
  detail: Offer;
}
/**
 * @description Offer card component with offer details
 * @param detail Offer detail Object
 * @returns Offer card component
 */
const OfferCard: React.FC<OfferProps> = ({detail}) => {
  return (
    <View style={[ styles.card]}>
      <Image source={{uri: detail.modelImg}} style={styles.img} />
      <View style={styles.textWrapper}>
        <Text style={[globalStyles.bolderText, globalStyles.whiteText]}>
          {detail.discountText}
        </Text>
        <View style={styles.horizontalLine} />
        <View>
          <View style={styles.codeWrapper}>
            <Text style={[globalStyles.whiteText, globalStyles.mediumText]}>
              {HOME.OFFER.useCode}
            </Text>
            <View style={ styles.underLine}>
            <Text
              style={[
                globalStyles.mediumText,
                globalStyles.whiteText,
        
              ]}>
              {detail.discountCode}
            </Text>
            </View>
          </View>
          <Text style={[globalStyles.mediumText, globalStyles.whiteText]}>
            {detail.discountSlogan}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OfferCard;

const deviceWidth = Dimensions.get("window").width
const deviceHeight=Dimensions.get("window").height
const styles = StyleSheet.create({
  card: {
    
   width:deviceWidth*0.81,
    height: deviceHeight*0.54,

    position: 'relative',
    marginVertical: 25,
    backgroundColor: colors.grey,
    borderRadius: 10,
    elevation: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 10,
    shadowOpacity:0.25
  },
  underLine: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.white,
    margin: 0,
    padding:0
  },
  codeWrapper: {
    flexDirection: 'row',
    marginBottom:12
  },
 
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },

  textWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
  },
  horizontalLine: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
    marginVertical: 20,
  },
});
