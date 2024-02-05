import TopSection from "../container/TopSection/TopSection";
import Help from "../screens/Help/Help";
import Profile from "../screens/Profile/Profile";
import WishList from "../screens/WishList/WishList";

export const TITLE = 'FSHN̷';
export const SCREEN = {
  HOME: 'Main',
  PRODUCT: 'Product',
  GALLERY: 'Gallery',
  MYCART:'My Cart'
};
export const BOTTOM_TABS = [
  {name: 'Home', icon: 'home',position:'LEFT',component:TopSection},
  {name: 'WishList', icon: 'heart',position:'LEFT',component:WishList},
  {name: 'Help', icon: 'help-circle',position:'RIGHT',component:Help},
  {name: 'Profile', icon: 'account-circle',position:'RIGHT',component:Profile},
];


export const CATEGORY = [
  {
    name: 'Man',
    category: 'Man',
  },
  {
    name: 'Woman',
    category: 'Woman',
  },
  {
    name: 'Kids',
    category: 'Kids',
  },
  // {
  //     name: 'About',
  //     category:'Man'
  // },
  // {
  //     name: 'Setting',
  //     category:'Man'
  // },
  // {
  //     name: 'Home',
  //     category:'Man'
  // }];
];
