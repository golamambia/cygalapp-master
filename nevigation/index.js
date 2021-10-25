 import 'react-native-gesture-handler';
import React, {useState, useEffect,Component,useContext } from 'react';
import { Alert,View, Text, StyleSheet,TouchableOpacity,Image,ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer'; 
import {Login, Registration,GetstartedPage,OnboardingOne,OnboardingTwo,OnboardingThree,
    Forgotpassword,Otpverified,Profile,Contactus,Enquery,Aboutus,Categories,EcommorceCollection,
    FashionCollection,ConfirmNumber,Checkout,Home,PaymentSuccess,Payment,FashionDetails,Changepassword} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {DrawerActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import{ AuthContext } from '../component/context';
import NavigationDrawerHeader from '../component/NavigationDrawerHeader';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const fourthScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="GetstartedPage" component={GetstartedPage} />
      </Stack.Navigator>
    );
  };
  const fourthScreenStack2 = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="OnboardingOne" component={OnboardingOne} />
      </Stack.Navigator>
    );
  };
  const fourthScreenStack3 = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="OnboardingTwo" component={OnboardingTwo} />
      </Stack.Navigator>
    );
  };
  const fourthScreenStack4 = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="OnboardingThree" component={OnboardingThree} />
      </Stack.Navigator>
    );
  };
  const fourthScreenStack5 = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="Changepassword" component={Changepassword} />
      </Stack.Navigator>
    );
  };
  const ProfileandChangepassword = () => {
    return (
      <Stack.Navigator initialRouteName="Profile" openByDefault>
        <Stack.Screen options={({ navigation, route }) => ({
                 drawerLabelStyle:{
                    paddingLeft:8,
                    fontSize:15,
                    fontWeight:SIZES.regular
                },
                headerLeft: () => (
                  
                  <AntDesign
                      style={styles.menuButtom}
                      color={COLORS.white}
                      onPress={() => alert(1)}
                      name="arrowleft"
                      size={26}
                  />
                  
              ),
                        headerTitle: 'Profile',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        
                      
                    })} name="Profile" component={Profile} />
        <Stack.Screen options={({ navigation, route }) => ({
                 drawerLabelStyle:{
                    paddingLeft:8,
                    fontSize:15,
                    fontWeight:SIZES.regular
                },
                headerLeft: () => (
                  
                  <AntDesign
                      style={styles.menuButtom}
                      color={COLORS.white}
                      onPress={() => alert(1)}
                      name="arrowleft"
                      size={26}
                  />
                  
              ),
                        headerTitle: 'Change Password',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                      
                    })} name="Changepassword" component={Changepassword} />
      </Stack.Navigator>
    );
  };
  

const Index = (navigation) => {
  
  //const { signOut, toggleTheme } = React.useContext(AuthContext);
 // const context = useContext(AuthContext);
  const[get_strtpage, setget_strtpage]=useState('');
  const[get_sessionuser, setget_sessionuser]=useState('');

  useEffect(async () => {
    //const unsubscribe = navigation.addListener('focus', () => {
      //demo();
    
   // });
   // return unsubscribe;
   // console.log(1);
    //setLoading(true);
    let get_strtpage = await AsyncStorage.getItem('get_strtpage');
    setget_strtpage(get_strtpage);

    const value = await AsyncStorage.getItem('user_id').then(
      (value) =>
      // Setting the value in Text
    
      setget_sessionuser(value),
    );
    
 
 

});


    return (
        
        <NavigationContainer>
           
            <Drawer.Navigator  screenOptions={{
              
              swipeEnabled: false,
                drawerActiveTintColor:COLORS.white,
                drawerActiveBackgroundColor:'#3ebfc4',
                drawerInactiveTintColor:'#fff',
                borderRightRadious: 90,
                drawerLabelStyle: { fontSize:15,fontWeight:SIZES.regular,},
                drawerItemStyle:{
                    borderTopRightRadius:50,borderBottomEndRadius:50,marginLeft:0,
                    borderRadius:0,marginVertical: 0,borderBottomWidth:0.5,
                },
    drawerStyle: {
    //   backgroundColor:COLORS.cyan,
    
    
    },
  }}
  drawerContent={props => {
    const filteredProps = {
      ...props,
      state: {
        ...props.state,
        routeNames: props.state.routeNames.filter((routeName) => {
          routeName !== 'fourthScreenStack' &&  routeName !== 'fourthScreenStack5';
        },
        ),
        routes: props.state.routes.filter((route)  => route.name !== 'fourthScreenStack5' && route.name !== 'fourthScreenStack5'
        ),
      },
    };
    return (
        <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}> 
      <DrawerContentScrollView {...filteredProps} showsVerticalScrollIndicator={false} style={{marginBottom:20}} onPress={(props) => alert('Logged out')}>
          {/* <View style={{marginTop:30,marginBottom:50}}>
              <TouchableOpacity onPress={(props) => alert('Logged out')}><AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => alert('Logged out')}
                                name="arrowleft"
                                size={20}
                            /></TouchableOpacity>
      <Text style={{color:'#fff',fontSize:16,fontWeight:SIZES.regular,textAlign:'center',marginTop:-22}}>Menu</Text>
      </View> */}
      <View >
      <DrawerItem icon={() =><AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => props.navigation.toggleDrawer()}
                                name="arrowleft"
                                size={20}
                            />} label={() =><Text style={{color:'#fff',fontSize:16,
                            fontWeight:SIZES.regular,textAlign:'center',marginTop:-10,marginRight:10}}>Menu</Text>}
        style={{marginLeft:0,marginBottom:30,marginTop:30}} 
        
      /> 
        <DrawerItemList {...filteredProps} style={{borderBottomColor: 'red',
    borderBottomWidth: 2,}}/>
       
        </View>
        {get_sessionuser ? (
  <View>
        <DrawerItem icon={() =><Material
                                style={{marginRight:-25}}
                                color={COLORS.white}
                                
                                name="logout"
                                size={20}
                            />} label={() => <Text style={{ color: 'white' }}>Logout</Text>}
        style={{}} 
        // onPress={() => alert('Logged out')}
        onPress={() => {
          //props.navigation.toggleDrawer();
          Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              },
              {
                text: 'Confirm',
                onPress: () => {
                  //AsyncStorage.clear();
                  AsyncStorage.setItem('user_id', '');
                  props.navigation.navigate('Home');
                  setget_sessionuser('');
                },
              },
            ],
            {cancelable: false},
          );
        }}
      /></View>
      ) : null}
      </DrawerContentScrollView>
      </ImageBackground>
    );
  }}
  >
      {!get_strtpage ? (
  <>
   <Drawer.Screen  options={{ headerShown: false,swipeEnabled: false,  
            
            }} name="fourthScreenStack" component={fourthScreenStack} />
    <Drawer.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                        headerTitle:  (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}> 
                            <Image source={require("../assets/images/homelogo.png")} /></View>
                        ),
                       drawerStyle:{
                       
                       },
                        drawerIcon: ({tintColor}) =>
    (
      <AntDesign name="home" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
      

    ),
    
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.black,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                    
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                       <View style={styles.download}><CartVariant size={SIZES.h2} color={'#000'} /></View>
                        
                    </View>
                    })} />
                      

            <Drawer.Screen options={{ headerShown: false,swipeEnabled: false, drawerLabel: () => null,}} name="OnboardingOne" component={OnboardingOne} />
        <Drawer.Screen options={{ headerShown: false,swipeEnabled: false,drawerLabel: () => null,}} name="OnboardingTwo" component={OnboardingTwo} />
                <Drawer.Screen options={{ headerShown: false,swipeEnabled: false,drawerLabel: () => null}} name="OnboardingThree" component={OnboardingThree} />
                <Drawer.Screen options={{ headerShown: false,swipeEnabled: false,drawerLabel: () => null}} name="fourthScreenStack4" component={fourthScreenStack4} />
  </> ) :(<>
   
        <Drawer.Screen  name="Home" component={Home} options={({ navigation, route }) => ({
          
          
                        headerTitle:  (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}> 
                            <Image source={require("../assets/images/homelogo.png")} /></View>
                        ),
                       drawerStyle:{
                       
                       },
                        drawerIcon: ({tintColor}) =>
    (
      <AntDesign name="home" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
      

    ),
    
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.black,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                          
                          <Material
                              style={styles.menuButtom}
                              color={COLORS.black}
                              onPress={async() => {
                                navigation.toggleDrawer();
                                
                               
                                await AsyncStorage.getItem('user_id').then(
                                  (value) =>
                                  // Setting the value in Text
                                
                                  setget_sessionuser(value),
                                );
                               
                              }}
                              name="menu"
                              size={24}
                          />
                          
                      ),
                    
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                       <View style={styles.download}><CartVariant size={SIZES.h2} color={'#000'} /></View>
                        
                    </View>
                    })} />
     {/* <Drawer.Screen name="NotificationsAndDetails" component={NotificationsAndDetails} /> */}
                     {!get_sessionuser ? (
  <>
        <Drawer.Screen options={({ navigation, route }) => ({
            drawerIcon: ({tintColor}) =>
            (
              <AntDesign name="user" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
              
        
            ),
                        headerTitle: 'Login',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })}
                    
                    name="Login" component={Login}  />
        <Drawer.Screen  name="Registration" component={Registration} options={({ navigation, route }) => ({
             drawerIcon: ({tintColor}) =>
             (
               <AntDesign name="user" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
               
         
             ),
                        headerTitle: 'Register',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} />
                    </> ) :(<>

                      </>)}
                     <Drawer.Screen options={({ navigation, route }) => ({
                         
                         drawerIcon: ({tintColor}) =>
                         (
                           <Material name="information-variant" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                           
                     
                         ),
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
                    })} name="About" component={Aboutus} />   
                     <Drawer.Screen options={({ navigation, route }) => ({
                          drawerIcon: ({tintColor}) =>
                          (
                            <AntDesign name="mail" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
                            
                      
                          ),
                        headerTitle: 'Contact Us',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                        headerLeft: () => (
                          <AntDesign
                              style={styles.menuButtom}
                              color={COLORS.white}
                              onPress={() => navigation.goBack()}
                              name="arrowleft"
                              size={26}
                          />
                          
                      ),
                    })} name="Contact Us" component={Contactus} /> 
                       <Drawer.Screen options={({ navigation, route }) => ({
                          drawerIcon: ({tintColor}) =>
                          (
                            <Material name="lock-question" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                            
                      
                          ),
                           drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
                        headerTitle: 'Forgot Password',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerLeft: () => (
                          <AntDesign
                              style={styles.menuButtom}
                              color={COLORS.white}
                              onPress={() => navigation.goBack()}
                              name="arrowleft"
                              size={26}
                          />
                          
                      ),
                    })} name="Forgot Password" component={Forgotpassword} />
           <Drawer.Screen options={({ navigation, route }) => ({
              drawerIcon: ({tintColor}) =>
              (
                <Material name="counter" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                
          
              ),
                drawerLabelStyle:{
                    paddingLeft:8,
                    fontSize:15,
                    fontWeight:SIZES.regular
                },
                        headerTitle: 'Confirm Number',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerLeft: () => (
                          <AntDesign
                              style={styles.menuButtom}
                              color={COLORS.white}
                              onPress={() => navigation.goBack()}
                              name="arrowleft"
                              size={26}
                          />
                          
                      ),
                    })} name="Confirm Number" component={ConfirmNumber} />
            {/* <Drawer.Screen options={{ headerShown: false }} name="Otpverified" component={Otpverified} />     */}
           
            {get_sessionuser ? (
  <>
            <Drawer.Screen options={({ navigation, route }) => ({
               drawerIcon: ({tintColor}) =>
               (
                 <AntDesign name="user" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                 
           
               ),
                 drawerLabelStyle:{
                  paddingLeft:6,
                  fontSize:15,
                  fontWeight:SIZES.regular,
                  
              },
              headerShown: false,
              headerTitle: '',
              headerTitleAlign: 'center',
              headerTransparent: true,
              headerTintColor: COLORS.white,
              headerTitleStyle: { fontSize: 20,fontWeight:'500',},
             
                headerLeft: () => (
                  <AntDesign
                      style={styles.menuButtom}
                      color={COLORS.white}
                      onPress={() => navigation.goBack('Profile')}
                      name="arrowleft"
                      size={26}
                  />
                  
              ),
                    })} name="My Profile" component={ProfileandChangepassword} />

                    </>): null}
                    <Drawer.Screen options={({ navigation, route }) => ({
                      drawerIcon: ({tintColor}) =>
                      (
                        <Material name="information" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                        
                  
                      ),
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular,
                            
                        },
                        headerTitle: 'Enquery',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                        headerLeft: () => (
                          <AntDesign
                              style={styles.menuButtom}
                              color={COLORS.white}
                              onPress={() => navigation.goBack()}
                              name="arrowleft"
                              size={26}
                          />
                          
                      ),
                    })} name="Enquery" component={Enquery} /> 
                   
                   <Drawer.Screen options={({ navigation, route }) => ({
                         drawerIcon: ({tintColor}) =>
                         (
                           <AntDesign name="creditcard" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
                           
                     
                         ),
                             
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
                   drawerIcon: ({tintColor}) =>
                   (
                     <AntDesign name="table" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
                     
               
                   ),
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
                       drawerIcon: ({tintColor}) =>
                       (
                         <Material name="rhombus-split" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                         
                   
                       ),
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
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
                         drawerIcon: ({tintColor}) =>
                         (
                           <Material name="shopping" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                           
                     
                         ),
                           drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
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
                       drawerIcon: ({tintColor}) =>
                       (
                         <Material name="cart" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                         
                   
                       ),
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
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
                       drawerIcon: ({tintColor}) =>
                       (
                         <Material name="details" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                         
                   
                       ),
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
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
                         drawerIcon: ({tintColor}) =>
                         (
                           <Material name="check-outline" style={{marginRight:-30,marginLeft:5}} color='#fff' width={20}  size={20}/>
                           
                     
                         ),
                            drawerLabelStyle:{
                                paddingLeft:8,
                                fontSize:15,
                                fontWeight:SIZES.regular
                            },
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
                    })} name="Payment Success" component={PaymentSuccess} />
                     {get_sessionuser ? (
  <>
                    {/* <Drawer.Screen options={({ navigation, route }) => ({
                           drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
                        headerTitle: 'Change Password',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerLeft: () => (
                          <AntDesign
                              style={styles.menuButtom}
                              color={COLORS.white}
                              onPress={() => navigation.goBack()}
                              name="arrowleft"
                              size={26}
                          />
                          
                      ),
                    })} name="Changepassword" component={Changepassword} /> */}
                     </>): null}
                
                    </>)}
           
                
      </Drawer.Navigator>
     
        </NavigationContainer>
      
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

