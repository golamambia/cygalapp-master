import * as React from 'react';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const Bell = (props) => {
  return (
    <Feather
    name="bell"
    size={props.size || SIZES.h2} 
    color={props.color || COLORS.cyan}
   />
  );
};
export default Bell;