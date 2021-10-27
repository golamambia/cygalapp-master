import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';
import { color } from 'react-native-reanimated';
const Vendordetails = ({route, navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
       
     
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            
            
        

          <View style={styles.profile_body}>
          
             
         <ScrollView  showsVerticalScrollIndicator={false}>

<View style={{marginTop:20,}}>
    <View style={{flexDirection:'row'}}>
<View style={{flex:2}}>
    <View style={{width:120,height:120,borderColor:COLORS.cyan,borderRadius:120/2,borderWidth:3,marginTop:-15}}>
<View style={styles.imgbox2}>
<Image style={styles.img} source={require("../assets/images/crazylogo.png")} />

</View>
</View>
</View>

<View style={{flex:1}}>
<View>
<Text style={styles.descno}>150+</Text>
<Text  style={styles.noremark}>Reviews</Text>
    </View>
    </View>
    <View style={{flex:1}}>
    <View>
<Text style={styles.descno}>20</Text>
<Text  style={styles.noremark}>Categories</Text>
    </View>
    </View>
</View>

<View>
<Text style={styles.desctitle2}>crazydealz</Text>
    <Text style={styles.desctitle}>Description</Text>
    <Text style={styles.describetext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus pulvinar, sodales nisi eu, malesuada ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut eros lacus.  Duis ultrices, nisi ac aliquet imperdiet, dolor metus placerat ante, sed blandit ex nibh vel quam. </Text>
<View style={{marginTop:5}}>
   <Text style={styles.weblinktext}><Image  source={require("../assets/images/webicon.png")} />  <TouchableOpacity onPress={() => Linking.openURL('https://www.csglobalmall/crazydealz.com')}><Text style={{color: 'blue'}} >https://www.csglobalmall/crazydealz.com</Text></TouchableOpacity></Text>
</View>




</View>



<TouchableOpacity style={{marginTop:20}}>
    <View style={styles.paybutton2}>
        <Text style={styles.paybuttontext2}>View shop</Text>
    </View>
</TouchableOpacity>

<View style={{marginTop:30}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View >
<View style={styles.tabactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={styles.actvietxt}>CRAZYDEALZ</Text>
<View style={styles.activemargin}></View>
</View>

<View>
<View style={styles.tabdeactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={styles.dactvietxt}>Products</Text>
<View style={styles.deacmargin}></View>
</View>



<View>
<View style={styles.tabdeactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={styles.dactvietxt}>reviews</Text>
<View style={styles.deacmargin}></View>
</View>


<View>
<View style={styles.tabdeactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={styles.dactvietxt}>categories</Text>
<View style={styles.deacmargin}></View>
</View>

</ScrollView>
{/* <View style={{borderWidth:.5,marginTop:12,borderColor:'#e5e5e5',width:'100%',paddingLeft:-20}}></View> */}
    </View>


    <View style={{marginTop:20,flexDirection:'row',flexWrap:'wrap'}}>

    <View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
 


    </View>



</View>

</ScrollView> 
        


              </View>
           
          
             

</View>
    );
};

export default Vendordetails;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#11bbc2',
               
    },
   
    profile_body: {
        flex:1,
     //    position:'absolute',
     marginTop:100,
        backgroundColor:'#fff',
        bottom:0,
        left:0,
        width:'100%',
     //    height:570,
        borderTopRightRadius:50,
        paddingHorizontal:20,
        
        paddingTop:20
     },
    img:{width:'100%',resizeMode:'cover'},
    img2:{width:'100%',resizeMode:'cover',borderRadius:80/2},
    imgbox:{
        height:'100%',
        width:'100%',
        },
        imgbox2:{
            height:35,
            width:82,
            marginTop:15,
            alignSelf:'center'
            },
            dotted:{

            },
    flextwoTouch:{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:15},
    touchOne:{width:10,height:10,backgroundColor:COLORS.cyan,borderRadius:5,marginRight:5},
    touchTwo:{width:10,height:10,borderRadius:5,marginRight:5,backgroundColor:'#7e7e7e',},
  

    paybutton:{backgroundColor:COLORS.cyan,paddingVertical:15,borderRadius:5,marginTop:25,borderColor:COLORS.cyan,borderWidth:1},
    paybuttontext:{textAlign:'center',color:COLORS.white,fontSize:16,fontWeight:SIZES.regular,textTransform:'uppercase'},
    paybutton2:{backgroundColor:COLORS.white,paddingVertical:15,borderRadius:5,marginTop:10,borderColor:COLORS.cyan,borderWidth:1},
    paybuttontext2:{textAlign:'center',color:COLORS.cyan,fontSize:16,fontWeight:SIZES.regular,textTransform:'uppercase'},
desctitle:{color:COLORS.cyan,fontSize:16,fontWeight:SIZES.regular,},
desctitle2:{color:COLORS.black,fontSize:20,fontWeight:SIZES.medium,textTransform:'uppercase',marginTop:20,marginBottom:8},
describetext:{fontSize:14,color:COLORS.black,fontWeight:SIZES.light},
weblinktext:{fontSize:14,color:COLORS.black,fontWeight:SIZES.light},
pricetitle:{color:COLORS.black,fontSize:20,fontWeight:SIZES.medium,},
descno:{fontSize:22,fontWeight:SIZES.medium,alignSelf:'center'},
noremark:{fontSize:14,fontWeight:SIZES.light,alignSelf:'center'},
tabimgbox:{
    height:80,
    width:80,
    
    },
    tabdeactivecircle:{width:84,height:84,borderColor:COLORS.gray,borderRadius:84/2,borderWidth:1,marginRight:15},
    tabactivecircle:{width:84,height:84,borderColor:COLORS.cyan,borderRadius:84/2,borderWidth:1,marginRight:15},
    actvietxt:{color:COLORS.cyan,fontWeight:SIZES.light,fontSize:14,textTransform:'uppercase',marginTop:10,textAlign:'center'},
    dactvietxt:{color:COLORS.black,fontWeight:SIZES.light,fontSize:14,textTransform:'uppercase',marginTop:10,textAlign:'center'},
    activemargin:{borderWidth:1,marginTop:12,borderColor:COLORS.cyan,width:'100%',},
    deacmargin:{borderWidth:.5,marginTop:12,borderColor:'#e5e5e5',width:'100%',},
    tabinnerimgbox:{ height:110,
        width:100,},
    tabinnerbox:{width:'30.33%',marginRight:'3%',marginBottom:'7%'},

  
})