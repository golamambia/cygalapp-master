import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image,TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/FontAwesome';
import BottonCommon from '../component/BottonCommon';
import AsyncStorage from '@react-native-community/async-storage';

const OnboardingThree = ({ navigation }) => {
    const loginProcess = () => {
        AsyncStorage.setItem('get_strtpage', 'yes');
          
          navigation.navigate('Login');
    };
    const regProcess = () => {
        AsyncStorage.setItem('get_strtpage', 'yes');
          
          navigation.navigate('Registration');
    };
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={{flex:1}}>
               
                    <View style={styles.flewOne}>
                        <View style={{height:450}}>
                        <Image style={styles.image} source={require("../assets/images/onboardingthree.png")} />
                        </View>
                    </View>
                    <View style={styles.flewTwo}>
                        <View style={styles.flextwoView}>

                            <Text style={styles.flextwoText}>Handpicked styles, any categories and the best offers</Text>
                            <View style={styles.flextwoTouch}>
                               
                                <TouchableOpacity style={styles.touchTwo}>
                                   
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchTwo}>
                                   
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchOne}>
                                   
                                   </TouchableOpacity>
                            </View>
                        </View>
                    
                    </View>

                    <View style={styles.flewThree} >
                        <View style={{paddingVertical:5}}>
        <TouchableOpacity  onPress={logProcess} style={styles.flexthreeTouch}>
            <Text style={styles.flexthreeTouchtext} >LOGIN</Text>
        </TouchableOpacity>
        </View>
        <View style={{paddingVertical:5}}>
        <TouchableOpacity onPress={regProcess} style={styles.flexthreeTouchtwo}>
            <Text style={styles.flexthreeTouchtextTwo} >REGISTER</Text>
        </TouchableOpacity>
        </View>
                    </View>

               
            </View>
            
             
       
        </View>
    );
};

export default OnboardingThree;

const styles = StyleSheet.create({
    container: {flex: 1,flexDirection: 'column',},
    main: {flex: 1},
    flewOne:{flex:3.5},
    flewTwo:{flex:1,alignItems:'center'},
    flextwoView:{padding:30,paddingHorizontal:20},
    flextwoText:{fontSize:22,color:COLORS.black,textAlign:'center',textTransform:'capitalize'},
    flextwoTouch:{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:15},
    touchOne:{width:15,height:7,backgroundColor:'#11bcc3',borderRadius:5,marginRight:5},
    touchTwo:{width:7,height:7,backgroundColor:'#7e7e7e',borderRadius:5,marginRight:5},
    flewThree:{width:'80%',alignSelf:'center',flex:1},
    flexthreeTouch:{backgroundColor:'#11bcc3',paddingVertical:10,paddingHorizontal:30,width:'100%',borderRadius:5},
    flexthreeTouchtext:{color:COLORS.white,textAlign:'center',textTransform:'uppercase',fontSize:16,fontWeight:'700'},
    flexthreeTouchtwo:{borderColor:COLORS.cyan,borderWidth:1,backgroundColor:COLORS.white,paddingVertical:10,paddingHorizontal:30,width:'100%',borderRadius:5},
    flexthreeTouchtextTwo:{color:COLORS.gray,textAlign:'center',textTransform:'uppercase',fontSize:16,fontWeight:'700'},
    image: {height:'100%',width:'100%',resizeMode:'cover'},


   

})