import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const Search = (props) => {
  return (
    <Feather
    name="search"
    size={props.size || SIZES.h2} 
    color={props.color || COLORS.cyan}
   />
  );
};
export default Search;