import React from 'react';
import {View, Pressable, Image, StyleSheet, Text} from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';

const OptionInactive = (props) => {
    return (
        <View style={styles.inActiveButton}><Text style={styles.inActiveText}>{props.value}</Text></View>
    );
};

const styles = StyleSheet.create({
    inActiveButton: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        marginTop: SIZES.margin2
    },
    inActiveText: {
        fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan
    },
})

export default OptionInactive;