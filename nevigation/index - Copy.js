import 'react-native-gesture-handler';
import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image,ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer'; 
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
const Drawer = createDrawerNavigator();

const Index = () => {
    const handleBackButtonClick = () => {
       alert('lol');
    }
    return (
        <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}> 
        <NavigationContainer>
           
            <Drawer.Navigator initialRouteName='GetstartedPage' screenOptions={{
               
                drawerActiveTintColor:COLORS.white,
                drawerActiveBackgroundColor:COLORS.cyan,
               
    drawerStyle: {
    //   backgroundColor:COLORS.cyan,
      
    },
  }}
  drawerContent={(props) => {
    const filteredProps = {
      ...props,
      state: {
        ...props.state,
        routeNames: props.state.routeNames.filter(
          // To hide single option
          // (routeName) => routeName !== 'HiddenPage1',
          // To hide multiple options you can add & condition
          (routeName) => {
            routeName !== 'GetstartedPage'
            && routeName !== 'OnboardingOne'
            && routeName !== 'OnboardingTwo'
            && routeName !== 'OnboardingThree';
          },
        ),
        routes: props.state.routes.filter(
          (route) =>
            route.name !== 'GetstartedPage'
            && route.name !== 'OnboardingOne'
            && route.name !== 'OnboardingTwo' 
            && route.name !== 'OnboardingThree',
        ),
      },
    };
    return (
        <DrawerContentScrollView {...filteredProps}>
          <DrawerItemList {...filteredProps} />
        </DrawerContentScrollView>
      );
    }}
  >
                 <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="GetstartedPage" component={GetstartedPage} />
                 <Stack.Screen options={{ headerShown: false,swipeEnabled: false, }} name="OnboardingOne" component={OnboardingOne} />
            <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="OnboardingTwo" component={OnboardingTwo} />
            <Stack.Screen options={{ headerShown: false,swipeEnabled: false, }} name="OnboardingThree" component={OnboardingThree} />
        <Drawer.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                        headerTitle:  (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}> 
                            <Image source={require("../assets/images/homelogo.png")} /></View>
                        ),
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.black,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                    
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                       <View style={styles.download}><CartVariant size={SIZES.h2} color={'#000'} /></View>
                        
                    </View>
                    })} />
        <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Login',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="Login" component={Login} />
        <Drawer.Screen  name="Registration" component={Registration} options={({ navigation, route }) => ({
                        headerTitle: 'Register',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} />
                     <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'About Us',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                            
                        ),
                    })} name="Aboutus" component={Aboutus} />   
                     <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Contact Us',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Contact Us" component={Contactus} /> 
                       <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Forgot Password',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="Forgotpassword" component={Forgotpassword} />
           <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Confirm Number',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="ConfirmNumber" component={ConfirmNumber} />
            <Drawer.Screen options={{ headerShown: false }} name="Otpverified" component={Otpverified} />    
            <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Profile',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Profile" component={Profile} />
                    <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Enquery',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Enquery" component={Enquery} /> 
                   
                   <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Payment',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                        <View style={styles.download}><CartVariant size={SIZES.h2}  color={COLORS.white} /></View>
                         
                     </View>
                    })} name="Payment" component={Payment} />
               <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Categories',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })} name="Categories" component={Categories} /> 
                    <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'E-commorce Collection',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })} name="EcommorceCollection" component={EcommorceCollection} /> 
                      <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Fashion Collection',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })} name="FashionCollection" component={FashionCollection} /> 
                    <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Checkout',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                        <View style={styles.download}><CartVariant size={SIZES.h2}  color={COLORS.white} /></View>
                         
                     </View>
                    })} name="Checkout" component={Checkout} /> 
               
                    <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: '',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                        
                    })} name="FashionDetails" component={FashionDetails} />
                       <Drawer.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Payment Successful',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                        <View style={styles.download}><CartVariant size={SIZES.h2}  color={COLORS.white} /></View>
                         
                     </View>
                    })} name="PaymentSuccess" component={PaymentSuccess} />
      </Drawer.Navigator>
     
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

export default Index;

