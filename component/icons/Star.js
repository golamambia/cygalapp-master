import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const Star = (props) => {
  return (
    <Ionicons
    name="star-sharp"
    size={props.size || SIZES.h2} 
    color={props.color || 'yellow'}
   />
  );
};
export default Star;