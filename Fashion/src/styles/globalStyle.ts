import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  text: {
    fontSize: 18,
    color: colors.black,
      fontWeight: '600',
    fontFamily:'Poppins-Regular'
  },
  bgColor: (color:any) => ({
    backgroundColor: color,
  }),
  transparentBg: (alpha:any) => ({
    backgroundColor: `rgba(255, 0, 0, ${alpha})`
  }),
  whiteText: {
      color: colors.white,
      
  },
 whiteIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 57,
    width: 57,
    borderRadius: 999,
    backgroundColor: colors.white,
    elevation:10
  },
  greyIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: 53,
    borderRadius: 999,
    backgroundColor: colors.lightGrey,
  },
  mediumText: {
    fontSize: 17,
    fontWeight: '500',
      marginBottom: 8,
      fontFamily:'Poppins-Medium'
  },
  greyText: {
    color: colors.grey,
  },
  lineThroughText: {
    textDecorationLine: 'line-through',
  },
    underLinedText: {
   textDecorationLine:'underline'
  },

  bolderText: {
    fontSize: 25,
      fontWeight: '300',
      fontFamily:'Poppins-Bold'
  },
  boldText: {
    fontSize: 26,
      fontWeight: '800',
      fontFamily:'Poppins-Regular'
  },

  primaryBtn: {
    backgroundColor: colors.black,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    width: 210,
  },
});
