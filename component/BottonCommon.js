import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme'

const BottonCommon = (props) => {
    return (
        <TouchableOpacity onPress={() => props.handleSubmit()} style={[styles.registerBotton, {backgroundColor: props.bgColor? props.bgColor : COLORS.cyan}]}>
            <Text style={[styles.bottonText,{color: props.textColor?props.textColor: COLORS.white}]} >{props.label?props.label: null }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    registerBotton: {
        paddingVertical: SIZES.base,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.cyan,
        // marginVertical: 6

    },
    bottonText: {
        fontSize: SIZES.h4,
        color: COLORS.white
    }
})

export default BottonCommon;