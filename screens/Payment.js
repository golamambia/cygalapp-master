import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';

const Payment = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
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
<Text style={{color:COLORS.black,fontSize:15,fontWeight:SIZES.medium,textTransform:'uppercase'}}>Select Payment Options</Text>

<View style={{marginTop:10}}>
<View style={{borderWidth:0.5,borderColor:'#ebebeb',marginVertical:10}}></View>
    <View style={{flexDirection:'row',marginBottom:10,}}>
       
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <View style={{marginTop:8,marginLeft:5}}>
      <Image source={require("../assets/images/paypal.png")} />
          </View>
      </View>
     
      
      <View style={{borderWidth:0.5,borderColor:'#ebebeb',marginVertical:10}}></View>
      <View style={{flexDirection:'row',marginBottom:10}}>
      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
      <View style={{marginTop:5,marginLeft:5}}>
      <Image source={require("../assets/images/debit_creadit.png")} /> 
          </View>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:15,fontWeight:SIZES.regular,color:COLORS.black,textTransform:'uppercase'}}>Credit / Debit cards</Text>
      </View>
      <View style={{borderWidth:0.5,borderColor:'#ebebeb',marginVertical:10}}></View>
    </View>



<View >
<Text style={{color:COLORS.black,fontSize:16,fontWeight:SIZES.medium,textTransform:'uppercase',marginBottom:20,marginTop:10}}>Payment Summery</Text>
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
    <View style={{flexDirection:'row',marginTop:40}}>
    <View style={{flex:1}}>
<Text style={{fontSize:20,fontWeight:SIZES.medium,color:COLORS.black,marginTop:30}}>$ 285</Text>
        </View>
        <View style={{flex:1}}>
<TouchableOpacity>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Pay now</Text>
    </View>
</TouchableOpacity>
</View>
</View>

</View>

</ScrollView>
              </View>
           
          
        </View>
    );
};

export default Payment;

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
    img:{width:'100%',resizeMode:'cover'},
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
    imgrd:{
        height:20,
        width: 20
    },
    btn:{
        flexDirection: 'row'
    }

  
})