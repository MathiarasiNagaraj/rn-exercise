import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {commonStyle} from '../styles/commonStyle';
import {COLORS} from '../utils/colors';

interface LinearGradientViewProps {
  children: React.ReactNode;
}
export const LinearGradientView: React.FC<LinearGradientViewProps> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={[ COLORS.mediumSeaGreen,COLORS.darkCyan,]}
      style={{flex: 1}}>
      {/* <BlurView style={{flex: 1}} blurType="light" blurAmount={5}> */}
        {children}
      {/* </BlurView> */}
    </LinearGradient>
  );
};
