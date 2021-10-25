import 'react-native-gesture-handler';
import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image,ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import {Login, Registration,GetstartedPage,OnboardingOne,OnboardingTwo,OnboardingThree,
    Forgotpassword,Otpverified,Profile,Contactus,Enquery,Aboutus,Categories,EcommorceCollection,
    FashionCollection,ConfirmNumber,Checkout,Home,PaymentSuccess,Payment,FashionDetails} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from "../constants/theme";
import Square from "../component/icons/Square";
import Search from "../component/icons/Search";
import Thumbnails from "../component/icons/Thumbnails";
import Sliders from "../component/icons/Sliders";
import Bell from "../component/icons/Bell";
import ShareVariant from "../component/icons/ShareVariant";
import DotsVertical from "../component/icons/DotsVertical";
import MapMakerOutline from "../component/icons/MapMakerOutline";
import CartVariant from "../component/icons/CartVariant";
// import Animated from 'react-native-reanimated';
// import { useSafeAreaFrame } from 'react-native-safe-area-context';

const Stack = createStackNavigator();


const Landing = () => {
    const handleBackButtonClick = () => {
       alert('lol');
    }
    return (
        <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}> 
        <NavigationContainer>
           <Stack.Navigator

            >
            <Stack.Screen options={{ headerShown: false }} name="GetstartedPage" component={GetstartedPage} />
            <Stack.Screen options={{ headerShown: false }} name="OnboardingOne" component={OnboardingOne} />
            <Stack.Screen options={{ headerShown: false }} name="OnboardingTwo" component={OnboardingTwo} />
            <Stack.Screen options={{ headerShown: false }} name="OnboardingThree" component={OnboardingThree} />
         
         </Stack.Navigator>
        </NavigationContainer>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    menuButtom: {
        left: SIZES.h6,
        width: 40
    },
    customersRightMenu: {
        flexDirection: 'row',
        right: SIZES.margin
    },
    download: {
        marginHorizontal: SIZES.base,
    },
    rightButton: {
        right: 10
    },
    menuBtn: {
        left: SIZES.h6,
        width: 40
    },
    drawer: {
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    main: {paddingLeft: 3},
    drawerContent: {
        flex: 1,
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

        width: '100%',
        height: '100%',
       
        
    },
        drawerSection:{
            paddingTop:40
        },
})

export default Landing;