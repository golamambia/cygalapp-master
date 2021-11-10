import React, { useState,useContext ,useEffect }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation,CommonActions } from '@react-navigation/native';
 import AsyncStorage from '@react-native-community/async-storage';
 import {useRoute} from '@react-navigation/native';
 import { useNavigationState } from '@react-navigation/native' 
const CommonBottom = (props) => {
    const [userid, setuserid] = useState();
    const [clr, setclr] = useState(COLORS.black);
    const [actclr, setactclr] = useState(COLORS.cyan);
     const [tabval, settabval] = useState();

     const route = useRoute();
const state = useNavigationState(state => state);
const routeName = (state.routeNames[state.index]);
//console.log(routeName);
      useEffect(async () => {
  // console.log(route.name);
   if(routeName=='Home'){
settabval('Home');
   }else if(routeName=='Profile' || routeName=='profileandChangepassword'){
    settabval('Account');
   }else if(routeName=='cartStack' || routeName=='Cart'){
settabval('Cart');
   }
        // console.log(1);
        const unsubscribe = navigation.addListener('focus', () => {
            demo();
          
          });
          return unsubscribe;
  
     
     });
    const demo=(async () => {
        const value = await AsyncStorage.getItem('user_id');
    if (value !== null) {
       // console.log(value);
        setuserid(value)
    }
       
    });
     const navigation = useNavigation();

  const handleSubmitPress = (val) => {
      //console.log(val);
   // navigation.navigate('Home');
if(val=='Home'){
    //settabval('Home');
 navigation.navigate('Home');
}else if(val=='Cart'){
  //  settabval('Cart');
navigation.navigate('cartStack', {
                   screen:'Cart',
  })
}else if(val=='Account'){
    //settabval('Account');
if(userid){
navigation.navigate('profileandChangepassword', {
                   screen:'Profile',
  })
}else{
navigation.navigate('Login');
}
}
          
       };
    return (
       

             <View style={styles.mainDiv}>
<TouchableOpacity   onPress={handleSubmitPress.bind(this,'Home')} style={styles.flexDiv}>
<View style={styles.flexDiv}>

<Material
                name="home"               
               color={ tabval=='Home' ? actclr : clr}
               size={18}
              />
    <Text style={{color:tabval=='Home' ? actclr : clr,fontSize:13,}}>Home</Text>

    </View>
    </TouchableOpacity>
    <TouchableOpacity   onPress={handleSubmitPress.bind(this,'Search')} style={styles.flexDiv}>
<View style={styles.flexDiv}>
<Material
                name="magnify"               
                color={tabval=='Search' ? actclr : clr}
               size={18}
              />
    <Text  style={{color:tabval=='Search' ? actclr : clr,fontSize:13,}}>Search</Text></View>
    </TouchableOpacity>
    <TouchableOpacity   onPress={handleSubmitPress.bind(this,'Cart')} style={styles.flexDiv}>
<View style={styles.flexDiv}>
<Material
                name="cart"               
                color={tabval=='Cart' ? actclr : clr}
                size={18}
              />
    <Text style={{color:tabval=='Cart' ? actclr : clr,fontSize:13,}}>Cart</Text></View>
    </TouchableOpacity>
    <TouchableOpacity   onPress={handleSubmitPress.bind(this,'Account')} style={styles.flexDiv}>
<View style={styles.flexDiv}>
<Material
                name="account"               
                color={tabval=='Account' ? actclr : clr}
                size={18}
              />
    <Text style={{color:tabval=='Account' ? actclr : clr,fontSize:13,}}>Profile</Text></View>
    </TouchableOpacity>
</View>

       
    );
};

const styles = StyleSheet.create({
    mainDiv: {height: 50,
    backgroundColor:COLORS.white,position: 'absolute', left: 0, right: 0, bottom: 0,
    paddingTop:6,flexDirection:'row',borderTopColor:COLORS.gray,borderTopWidth:0.5},
    flexDiv: {flex:1,alignItems:'center'}
})

export default CommonBottom;