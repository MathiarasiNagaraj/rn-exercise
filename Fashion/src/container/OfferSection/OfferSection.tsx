import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
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
const OfferSection: React.FC<OfferSectionProps> = ({offers}) => {
  const Offers = (
    <FlatList
      horizontal
      contentContainerStyle={{paddingHorizontal: 30}}
      ItemSeparatorComponent={() => <View style={{width: 25}} />}
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
    backgroundColor: colors.lightGrey,
  },
});
