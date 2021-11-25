import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,ToastAndroid,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
    import AsyncStorage from '@react-native-community/async-storage';
    import Loader from '../component/Loader';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonBottom from '../component/CommonBottom';


const Cart = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState(1);
    const [token, settoken] = useState("");
    const [userId, setuserId] = useState("");
    const [vendorId, setvendorId] = useState("");
    const [cartlist, setcartlist] = useState([]);
    const [carttotal, setcarttotal] = useState(0);
    const [totaldiscount, settotaldiscount] = useState(0);
    const [tax, settax] = useState(0);
    const [subtotal, setsubtotal] = useState(0);
    useEffect(async () => {
        const value = await AsyncStorage.getItem('user_id');
        if (value !== null) {
           
           //console.log(value);
           setuserId(value);
        }
        const tokn =await  AsyncStorage.getItem('token');
        if (tokn !== null) {
           // console.log(tokn);
            //this.setState({ token:tokn }) 
            settoken(tokn);
           
        }
        const getvendorid = await AsyncStorage.getItem('vendorid');
        if (getvendorid !== null) {
           
           //console.log(getvendorid);
           setvendorId(getvendorid);
        }
        //console.log(1);
       const unsubscribe = navigation.addListener('focus', () => {
           
         
         });
         return unsubscribe;
         demo();
    
    });
    const demo=(async () => {
       
        if(vendorId){
            setLoading(true);
    fetch(Hosturl.api+'get-cart', {
        method: 'POST',
        body: JSON.stringify({
            user_id: userId,
            vendor_id:vendorId
         
        }),
        headers: {
          //Header Defination
          'Accept': 'application/json',
          'Content-Type':'application/json',
         // 'Authorization' :  'Bearer  '+token
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          setLoading(false);
         // console.log(responseJson.response_data.cart);
          
           if (responseJson.status) {
           setcartlist(responseJson.response_data.cart);
          setcarttotal(responseJson.response_data.cart_total);
          settotaldiscount(responseJson.response_data.total_discount_price);
          settax(responseJson.response_data.gst);
          setsubtotal(responseJson.response_data.total);
              //let tl=  userObject.title.replace( /(<([^>]+)>)/ig, '');
              //let dbody=  userObject.body.replace( /(<([^>]+)>)/gi, '');
               // setbodydesc(dbody);
               // settitle(tl);
                //setimg(imgpath + userObject.image);

               // console.log(userObject.body+'amb');
           
        
           } 
         
        })
        .catch((error) => {

        });
    }
    });
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          <Loader loading={loading} />
          <View style={styles.profile_body}>
          <ScrollView  showsVerticalScrollIndicator={false}>
<View style={{marginTop:25}}>

{cartlist.map((value, index) => (
<View style={styles.itembox}>
<View style={styles.imgbox}>
<Image style={styles.imgnw} source={{
    uri: value.product_image,
   
  }} />

</View>
<View style={styles.itemright}>
<View style={styles.imgbox2}>
<Image style={styles.imglogo} source={require("../assets/images/crazylogo.png")} />

</View>
<Text style={styles.itemtext}>{value.product_name}</Text>
<Text style={styles.pricetitle}>{value.currency}{value.sale_price}</Text>
<View style={{position:'absolute',right:40,top:30}}>
                       
                      
                         <View  style={styles.input2}>
              <Picker 
        selectedValue={selectedValue}
        style={{ height: 18, width: 80,color:'#000',marginRight:-15,}}
        mode="dropdown"
        
        placeholder="Qty"
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      </View>
                        </View>
<View style={styles.delicon}>
    <TouchableOpacity>
    <Icon name="trash" color="#d0d0d0" size={25} />
    </TouchableOpacity>
    </View>
</View>

</View>
 ))}


<View style={{marginTop:20,}}>
<Text style={{color:COLORS.black,fontSize:16,fontWeight:SIZES.medium,textTransform:'uppercase',marginBottom:10}}>Price Details</Text>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Cart Total</Text></View>
    <View ><Text style={styles.ptitle}> {carttotal}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Discount</Text></View>
    <View ><Text style={styles.ptitletax}> {totaldiscount}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Tax</Text></View>
    <View ><Text style={styles.ptitle}> {tax}</Text></View>
</View>
<View style={styles.br}></View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Subtotal</Text></View>
    <View ><Text style={styles.ptitle}>{subtotal}</Text></View>
</View>

    </View>
   
<TouchableOpacity  onPress={() => navigation.navigate('cartStack', {
                   screen:'Checkout',
  })}>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Proceed to checkout</Text>
    </View>
</TouchableOpacity>


</View>

</ScrollView>

<CommonBottom />
              </View>
           
          
        </View>
    );
};

export default Cart;

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
       paddingBottom:55

    },
    img:{width:'100%',resizeMode:'cover',borderRadius:10},
    imglogo:{width:'100%',height:'100%',resizeMode:'cover',borderRadius:10},
    imgnw:{width:'100%',height:'100%',resizeMode:'cover',borderRadius:10,height:'100%'},
    imgbox:{
        height:123,
        width:118,
       flex:1
        
    },
    imgbox2:{
       width:77,
       height:33,
       marginTop:5,
       marginBottom:20,
       
     
    },
    itembox:{flexDirection:'row',marginBottom:15},
    itemright:{flex:2,marginLeft:12,position:'relative'},
    itemtext:{color:'#000',fontSize:13,fontWeight:SIZES.light,marginBottom:8,flexWrap:'wrap'},
    pricetitle:{fontSize:15,fontWeight:SIZES.medium},
    percentcolor:{color:'#0eacb2'},
    delicon:{position:'absolute',right:15,top:26},
    prow:{flexDirection:'row',justifyContent:'space-between',marginBottom:8},
    ptitle:{fontSize:15,color:COLORS.black,fontWeight:SIZES.regular},
    ptitletax:{fontSize:15,color:COLORS.cyan,fontWeight:SIZES.regular},
    br:{borderWidth:0.5,borderColor:COLORS.gray,marginTop:10,marginBottom:10},
    paybutton:{backgroundColor:COLORS.cyan,paddingVertical:10,borderRadius:10,marginTop:40},
    paybuttontext:{textAlign:'center',color:COLORS.white,fontSize:16,fontWeight:SIZES.regular,textTransform:'uppercase'},
    input2: {
        height: 20,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:COLORS.gray,
       // paddingHorizontal: SIZES.padding,
        fontSize: 8,
        borderRadius:5,
        backgroundColor:'#fff',
        color:'#ffffff',
        //paddingLeft:15,
        
       
       
        
    },

  
})