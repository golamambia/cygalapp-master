import React from 'react';
import {View, Pressable, Image, StyleSheet, Text} from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <View>
                <Pressable onPress={() => props.navigation()} >
                    <Image style={{ width: 30, height: 20 }} source={require("../assets/images/arrow_left.png")} />
                </Pressable>
            </View>
            <Pressable onPress={() => props.leftAction()} ><Text style={{fontSize: SIZES.h4, color: COLORS.cyan}}>{props.leftLeble}</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: SIZES.large
    },
})

export default Header;