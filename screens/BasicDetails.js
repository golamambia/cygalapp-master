import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Icon from 'react-native-vector-icons/Feather';
const Button = ({ lable, active }) => (
    <View style={[styles.button, { backgroundColor: active == 1 ? COLORS.cyan : COLORS.cilver }]}><Text style={[styles.textButton, { color: active == 1 ? COLORS.white : COLORS.cyan }]}>{lable}</Text></View>
)
const ButtonCM = ({ lable, active }) => (
    <View style={[styles.buttonCM, { backgroundColor: active == 1 ? COLORS.cyan : COLORS.cilver }]}><Text style={[styles.textButtonCM, { color: active == 1 ? COLORS.white : COLORS.cyan }]}>{lable}</Text></View>
)

const BasicDetails = ({ navigation }) => {
    return (
        <CommonLayout>
            <SafeAreaView style={{ flex: 1, padding: SIZES.padding }}>
                <View style={styles.header}>
                    <View style={[styles.bar, { backgroundColor: COLORS.cyan }]}>
                    </View>
                    <View style={styles.bar}>
                    </View>
                    <View style={styles.bar}>
                    </View>
                </View>

                <View style={styles.body}>
                    <ScrollView  >
                        <View style={styles.inputCon}>
                            <Text style={styles.textHeader}>Your full name</Text>
                            <TextInput placeholder="Please write your name here" style={styles.input} />
                        </View>
                        <View style={styles.inputCon}>
                            <Text style={styles.textHeader}>What's your age?</Text>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ paddingHorizontal: SIZES.padding2 }}><Icon name="arrow-left-circle" size={30} color={COLORS.cyan} /></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH4} >1</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH3}>2</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH2}>3</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH3} >4</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH4}>5</Text></View>
                                <View style={{ paddingHorizontal: SIZES.padding2 }}><Icon name="arrow-right-circle" size={30} color={COLORS.cyan} /></View>
                            </View>


                        </View>
                        <View style={styles.inputCon}>
                            <Text style={styles.textHeader}>Your full name</Text>
                            <View style={styles.buttonCon} >
                                <Button active="0" lable="Male" />
                                <Button active="1" lable="Female" />
                            </View>
                        </View>
                        <View style={styles.inputCon}>
                            <Text style={styles.textHeader}>Choose your height</Text>
                            <View style={styles.buttonConCM} >
                                <ButtonCM active="0" lable="Ft" />
                                <ButtonCM active="1" lable="Cm" />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ paddingHorizontal: SIZES.padding2 }}><Icon name="arrow-left-circle" size={30} color={COLORS.cyan} /></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH4} >1</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH3}>2</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH2}>3</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH3} >4</Text></View>
                                <View style={{ justifyContent: "center" }}><Text style={styles.textAgeH4}>5</Text></View>
                                <View style={{ paddingHorizontal: SIZES.padding2 }}><Icon name="arrow-right-circle" size={30} color={COLORS.cyan} /></View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <BottonCommon handleSubmit={() => navigation.navigate('Todayburn')} label="Next Step" />
                    {/* <BottonCommon handleSubmit={() => navigation.navigate('Lifestyle')} label="Next Step" /> */}
                    <BottonCommon handleSubmit={() => navigation.navigate('Login')} label="Previous Step" textColor={COLORS.gray} bgColor={COLORS.white} />
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: SIZES.h1,
        flex: 1,
        alignItems: "center"
    },
    bar: {
        width: 80,
        height: 6,
        marginHorizontal: 6,
        backgroundColor: COLORS.cilver
    },
    body: {
        flex: 9,
        // justifyContent: "center",
        // alignItems: "center"
    },
    footer: {
        flex: 2,
        justifyContent: "center",
    },
    input: {
        width: SIZES.width / 2,
        height: 40,
        marginBottom: SIZES.padding2,
        paddingHorizontal: SIZES.padding,
        fontSize: SIZES.h6,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.cilver,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,

    },
    inputCon: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingVertical: SIZES.padding2
    },
    textHeader: {
        ...FONTS.h2,
        marginBottom: SIZES.margin
    },
    textAgeH2: { fontSize: SIZES.h2, color: COLORS.gray1, paddingHorizontal: 4 },
    textAgeH3: { fontSize: SIZES.h3, color: COLORS.gray, paddingHorizontal: 4, },
    textAgeH4: { fontSize: SIZES.h4, color: COLORS.cilver, paddingHorizontal: 4 },
    buttonCon: { flexDirection: "row" },
    buttonConCM: { flexDirection: "row", marginBottom: SIZES.base },
    button: { width: SIZES.base * 10, height: SIZES.base * 4, backgroundColor: COLORS.cilver, justifyContent: "center", alignItems: "center", borderRadius: 2 },
    textButton: { fontSize: SIZES.h5, color: COLORS.cyan },
    buttonCM: { width: SIZES.base * 5, height: SIZES.base * 3, backgroundColor: COLORS.cilver, justifyContent: "center", alignItems: "center", borderRadius: 2 },
    textButtonCM: { fontSize: SIZES.body5, color: COLORS.cyan }
})

export default BasicDetails;
