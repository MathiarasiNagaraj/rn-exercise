import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Product, Offer} from '../../interface/Products';
import {
  getProductsByCategory,
  getOffersByCategory,
} from '../../services/ProductApi';
import OfferSection from '../OfferSection/OfferSection';
import ProductSection from '../ProductSection/ProductSection';

interface MainSectionProps {
  category: string;
}
/**
 * @description Main Container component for Products and Offers
 * @param category Type of category
 * @returns  Main section container ,wrapper for offers and products section
 */
const MainSection: React.FC<MainSectionProps> = ({category}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
  const [selectedOffers, setSelectedOffers] = useState<Offer[]>([]);
  useEffect(() => {
    const getMethod = async () => {
      const data = await getProductsByCategory(category);
      setSelectedProduct(data);

      const offers = await getOffersByCategory(category);
      setSelectedOffers(offers);
    };

    getMethod();
  }, [category]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <OfferSection offers={selectedOffers} />
        <ProductSection selectedProduct={selectedProduct} />
      </ScrollView>
    </View>
  );
};

export default MainSection;
