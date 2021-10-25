import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const Square = (props) => {
  return (
    <Feather
    name="x"
    size={props.size || SIZES.h2} 
    color={props.color || COLORS.gray1}
   />
  );
};
export default Square;