import React from 'react';
import {View, StyleProp ,ViewStyle} from 'react-native';

interface IconProps {
  icon: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
/**
 * @description Icon wrapper component
 * @param icon SVG or any icon to be rendered
 * @returns  Icon wrapper component
 */
const Icon :React.FC<IconProps>= ({icon,style}) => {
  return <View style={style}>{icon}</View>;
};

export default Icon;

