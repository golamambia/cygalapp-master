import * as React from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES, FONTS} from "../../constants/theme"
const MapMakerOutline = (props) => {
  return (
    <Material
    name="map-marker-outline"
    size={props.size || SIZES.h2} 
    color={props.color || COLORS.cyan}
   />
  );
};
export default MapMakerOutline;