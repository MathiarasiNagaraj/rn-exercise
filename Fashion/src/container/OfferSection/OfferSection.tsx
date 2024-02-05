import React from 'react';
import {FlatList, StyleSheet, Text, View,Dimensions} from 'react-native';
import OfferCard from '../../components/OfferCard/OfferCard';
import {Offer} from '../../interface/Products';
import {colors} from '../../styles/colors';

interface OfferSectionProps {
  offers: Offer[];
}
/**
 * @description Container Component for Offers
 * @param Offers array
 * @returns  Offer Section
 */
const OfferSection: React.FC<OfferSectionProps> = ({ offers }) => {
  const deviceWidth = Dimensions.get("window").width
  const Offers = (
    <FlatList
      horizontal
      contentContainerStyle={{paddingHorizontal: deviceWidth*0.07}}
      ItemSeparatorComponent={() => <View style={{width:  deviceWidth*0.06}} />}
      data={offers}
      renderItem={({item}) => <OfferCard detail={item} />}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
  return <View style={styles.sectionWrapper}>{Offers}</View>;
};

export default OfferSection;

const styles = StyleSheet.create({
  sectionWrapper: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});
