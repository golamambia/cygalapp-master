import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const Checkout = ({ navigation }) => {
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
<View style={{marginTop:25}}>

<View style={styles.itembox}>
<View style={styles.imgbox}>
<Image style={styles.img} source={require("../assets/images/checkout.png")} />

</View>
<View style={styles.itemright}>
<View style={styles.imgbox2}>
<Image style={styles.img} source={require("../assets/images/crazylogo.png")} />

</View>
<Text style={styles.itemtext}>Collections let you customise your shop</Text>
<Text style={styles.pricetitle}>$300/<Text style={styles.percentcolor}>20%</Text></Text>
<View style={styles.delicon}>
    <TouchableOpacity>
    <Icon name="trash" color="#d0d0d0" size={25} />
    </TouchableOpacity>
    </View>
</View>

</View>


<View style={{borderWidth:1,borderColor:'#dbdbdb',position:'relative',paddingLeft:50,paddingVertical:10,marginTop:20,marginBottom:25}}>
    
<Image style={{position:'absolute',left:15,top:15,bottom:0}} source={require("../assets/images/coupon.png")} />
<Text style={{color:'#000',textTransform:'uppercase',fontSize:14,fontWeight:SIZES.regular,marginLeft:0}}>Coupon Applied</Text>
<Text style={{color:COLORS.cyan,fontSize:13,fontWeight:SIZES.light}}>You saved $15</Text>
<Image style={{position:'absolute',right:15,top:18,bottom:0}} source={require("../assets/images/cross.png")} />
</View>

<View >
<Text style={{color:COLORS.black,fontSize:16,fontWeight:SIZES.medium,textTransform:'uppercase',marginBottom:10}}>Price Details</Text>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Product Price</Text></View>
    <View ><Text style={styles.ptitle}>$ 300</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Discount</Text></View>
    <View ><Text style={styles.ptitletax}>$ 15</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Tax</Text></View>
    <View ><Text style={styles.ptitle}>$ 0</Text></View>
</View>
<View style={styles.br}></View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Price</Text></View>
    <View ><Text style={styles.ptitle}>$ 285</Text></View>
</View>

    </View>
<TouchableOpacity>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Proceed to payment</Text>
    </View>
</TouchableOpacity>


</View>

</ScrollView>
              </View>
           
          
        </View>
    );
};

export default Checkout;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#11bbc2',
               
    },
   
    profile_body: {
      
       position:'absolute',
       backgroundColor:'#fff',
       bottom:0,
       left:0,
       width:'100%',
       height:'85%',
       borderTopRightRadius:70,
       paddingHorizontal:15
    },
    img:{width:'100%',resizeMode:'cover',borderRadius:10},
    imgbox:{
        height:177,
        width:145,
        flex:2,
        
    },
    imgbox2:{
       width:121,
       marginTop:20,
       marginBottom:7,
       
     
    },
    itembox:{flexDirection:'row',marginBottom:15},
    itemright:{flex:3,marginLeft:20,position:'relative'},
    itemtext:{color:'#000',fontSize:15,fontWeight:SIZES.light,marginBottom:12},
    pricetitle:{fontSize:18},
    percentcolor:{color:'#0eacb2'},
    delicon:{position:'absolute',right:15,top:30},
    prow:{flexDirection:'row',justifyContent:'space-between',marginBottom:8},
    ptitle:{fontSize:15,color:COLORS.black,fontWeight:SIZES.regular},
    ptitletax:{fontSize:15,color:COLORS.cyan,fontWeight:SIZES.regular},
    br:{borderWidth:0.5,borderColor:COLORS.gray,marginTop:10,marginBottom:10},
    paybutton:{backgroundColor:COLORS.cyan,paddingVertical:10,borderRadius:10,marginTop:25},
    paybuttontext:{textAlign:'center',color:COLORS.white,fontSize:16,fontWeight:SIZES.regular,textTransform:'uppercase'},


  
})