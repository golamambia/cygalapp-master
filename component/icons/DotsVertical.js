import * as React from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const DotsVertical = (props) => {
  return (
    <Material
    name="dots-vertical"
    size={props.size || SIZES.h2} 
    color={props.color || COLORS.cyan}
   />
  );
};
export default DotsVertical;