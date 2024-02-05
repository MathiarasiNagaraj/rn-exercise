import axios from 'axios';
import {routes} from '../constants/routeConstants';

export const getProductsByCategory = async (category: string) => {
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

export const getOffersByCategory = async (category: string) => {
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
