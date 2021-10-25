import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const PaymentSuccess = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <View style={styles.profile_body}>
       
<View style={{alignItems:'center'}}>
<View style={styles.imgbox}>
<Image style={styles.img} source={require("../assets/images/success.png")} />

</View>
<View>
    <Text style={styles.confirmtitle}>Confirmation</Text>
    <Text style={styles.successtitle}>You have successfully 
</Text>
    <Text style={styles.successtitle}>
completed your payment procedure</Text>
</View>
</View>
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Back to Home</Text>
    </View>
</TouchableOpacity>
              </View>
           
          
        </View>
    );
};

export default PaymentSuccess;

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
       paddingHorizontal:15,
       justifyContent:'center'
    },
    img:{width:'100%',resizeMode:'cover'},
    imgbox:{
        height:199,
        width:199,
    },
    paybutton:{backgroundColor:COLORS.cyan,paddingVertical:15,borderRadius:5,marginTop:50},
    paybuttontext:{textAlign:'center',color:COLORS.white,fontSize:16,fontWeight:SIZES.regular,textTransform:'uppercase'},
    confirmtitle:{textAlign:'center',fontSize:30,fontWeight:SIZES.regular,color:'#434343',marginBottom:10},
    successtitle:{textAlign:'center',fontSize:15,fontWeight:SIZES.regular,color:'#656565'}




  
})