import React from 'react';
import {View, Pressable, Image, StyleSheet, Text} from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
const OptionActive = (props) => {
    return (
        <View style={styles.activeButton}><Text style={styles.activeText}>{props.value}</Text></View>
    );
};
const styles = StyleSheet.create({
    activeButton: {
        backgroundColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        elevation: 2,
        marginTop: SIZES.margin2
    },
    activeText: {
        fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.white
    },
})
export default OptionActive;