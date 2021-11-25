import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image,TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/FontAwesome';
import BottonCommon from '../component/BottonCommon';

const Otpverified = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={{flex:1,}}>
                <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}>
                    <View >
                        <Image source={require("../assets/images/logo.png")} />

                    </View>

                    <View style={{position:'absolute',bottom:45,width:'80%',}} >
                        
                    <TouchableOpacity onPress={() => navigation.navigate('OnboardingOne')} style={{backgroundColor:'#fff',paddingVertical:15,paddingHorizontal:30,width:'100%',borderRadius:5}}>
            <Text style={{color:'#0ba6ac',textAlign:'center',textTransform:'uppercase',fontSize:16,fontWeight:'700'}} >Get Started</Text>
        </TouchableOpacity>
                       
                    </View>

                </ImageBackground>
            </View>
            
             
       
        </View>
    );
};

export default Otpverified;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      
       
    },
   
    main: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
        alignItems:'center',
        position:'relative'

    },



    logo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: SIZES.padding
    },

   

})