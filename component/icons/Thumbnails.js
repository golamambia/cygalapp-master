import * as React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const Thumbnails = (props) => {
  return (
    <Foundation
    name="thumbnails"
    size={props.size || SIZES.h2} 
    color={props.color || COLORS.cyan}
   />
  );
};
export default Thumbnails;