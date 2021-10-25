import * as React from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const Eye = (props) => {
  return (
    <Material
    name="eye"
    size={props.size || SIZES.h2} 
    color={props.color || COLORS.cyan}
   />
  );
};
export default Eye;