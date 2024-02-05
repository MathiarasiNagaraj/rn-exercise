import {routes} from '../constants/routeConstants';


type RouteCategory = 'Man' | 'Woman' | 'Kids';
export const getProductsByCategory = async (category:RouteCategory) => {
  try {
    const productLink = routes[category].productLink.trim();
    const response = await fetch(productLink);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOffersByCategory = async (category: RouteCategory) => {
  try {
    const productLink = routes[category].offerLink.trim();
    const response = await fetch(productLink);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();


    return data;
  } catch (error) {

    throw error;
  }
};
