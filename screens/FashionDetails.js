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
const FashionDetails = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
       
     
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            
            
          <View style={styles.imgbox}>
<Image style={styles.img} source={require("../assets/images/fashion_details.png")} />

</View>

          <View style={styles.profile_body}>
          
              <View style={styles.dotted}>
          <View style={styles.flextwoTouch}>
                            <TouchableOpacity style={styles.touchTwo}>
                                   
                                   </TouchableOpacity>
                                <TouchableOpacity style={styles.touchOne}>
                                   
                                </TouchableOpacity>
                               
                                <TouchableOpacity style={styles.touchTwo}>
                                   
                                </TouchableOpacity>
                            </View>
                            </View>
         <ScrollView  showsVerticalScrollIndicator={false}>

<View style={{marginTop:20,}}>

<View style={styles.imgbox2}>
<Image style={styles.img} source={require("../assets/images/crazylogo.png")} />

</View>
<View>
    <Text style={styles.desctitle}>Description</Text>
    <Text style={styles.describetext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus pulvinar, sodales nisi eu, malesuada ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut eros lacus.  Duis ultrices, nisi ac aliquet imperdiet, dolor metus placerat ante, sed blandit ex nibh vel quam. </Text>
<View style={{marginTop:5}}>
   <Text style={styles.weblinktext}><Image  source={require("../assets/images/webicon.png")} />  <TouchableOpacity onPress={() => Linking.openURL('https://www.csglobalmall/crazydealz.com')}><Text style={{color: 'blue'}} >https://www.csglobalmall/crazydealz.com</Text></TouchableOpacity></Text>
</View>

<View style={{marginTop:5,marginBottom:5}}>
   <Text style={{fontSize:14,color:COLORS.black,fontWeight:SIZES.light}}> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.gray} /> <Text style={{color: COLORS.gray}} >150 Customer Reviews</Text></Text>
</View>
<Text style={styles.pricetitle}>$ 300 / <Text style={{color: COLORS.cyan}} >20% Off</Text></Text>


</View>


<TouchableOpacity>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Add to cart</Text>
    </View>
</TouchableOpacity>
<TouchableOpacity>
    <View style={styles.paybutton2}>
        <Text style={styles.paybuttontext2}>View on website</Text>
    </View>
</TouchableOpacity>


</View>

</ScrollView> 
        


              </View>
           
          
             

</View>
    );
};

export default FashionDetails;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor:'#fff',
        position:'relative'
       
               
    },
   
    profile_body: {

       position:'absolute',
       backgroundColor:'#fff',
       bottom:0,
        height:'50%',
       left:0, 
       width:'100%',
     
       borderTopRightRadius:70,
       paddingHorizontal:30, 
       paddingBottom:30
      
      
    },
    img:{width:'100%',resizeMode:'cover'},
    imgbox:{
        height:'100%',
        width:'100%',
        },
        imgbox2:{
            height:67,
            width:145,
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
desctitle:{color:COLORS.cyan,fontSize:18,fontWeight:SIZES.medium,},
describetext:{fontSize:14,color:COLORS.black,fontWeight:SIZES.light},
weblinktext:{fontSize:14,color:COLORS.black,fontWeight:SIZES.light},
pricetitle:{color:COLORS.black,fontSize:20,fontWeight:SIZES.medium,},

  
})