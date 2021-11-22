import React, { useState ,useEffect,createRef,Component}  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';

    class Payment extends Component {
        constructor(props) {
            super(props);
            this.state = {
                token:'',
              loading: false,
              value: true,
              visible: false,
              userId: 0,
              name: '',
              email:'',
              phone:'',
              photo:'',
              vendorid:0,
              cartlist:[],
              carttotal:0,
              totaldiscount:0,
              tax:0,
              subtotal:0,
              selectedValue:1,
              count : 0,
              checked:'first',
              isSelected:false,
              selectedValue:'java',


             
            };
          
            
          }
        
        async  componentDidMount()
          {
          
           let hh= this.props.route.params.address;
           //console.log(hh);
            const tokn =await  AsyncStorage.getItem('token');
            if (tokn !== null) {
                //console.log(tokn);
                this.setState({ token:tokn }) 
               
            }
            const value = await AsyncStorage.getItem('user_id');
        if (value !== null) {
            this.setState({ userId:value }) 
          // console.log(value);
           //setuserid(value);
        }else{
            this.props.navigation.navigate('Home');
        }
       
    
    
        const getvendorid = await AsyncStorage.getItem('vendorid');
        if (getvendorid !== null) {
            this.setState({ vendorid:getvendorid }) 
         //  console.log(getvendorid);
           //setvendorId(getvendorid);
           //this.getCart();
        }
       // this.getCart();
       
          }
    
     
    
          getCart() {
           
                  // console.log(this.state.userId);
                this.setState({ loading:true });
        fetch(Hosturl.api+'get-cart', {
            method: 'POST',
            body: JSON.stringify({
                user_id: this.state.userId,
                //vendor_id:this.state.vendorid
             
            }),
            headers: {
              //Header Defination
              'Accept': 'application/json',
              'Content-Type':'application/json',
             // 'Authorization' :  'Bearer  '+token
            },
          }).then((response) => response.json())
            .then((responseJson) => {
              //Hide Loader
              this.setState({ loading:false });
             //console.log(responseJson);
              
               if (responseJson.status) {
               
              this.setState({ cartlist:responseJson.response_data.cart });
              this.setState({ carttotal:responseJson.response_data.cart_total });
              this.setState({ totaldiscount:responseJson.response_data.total_discount_price });
              this.setState({ tax:responseJson.response_data.gst });
              this.setState({ subtotal:responseJson.response_data.subtotal });
             // this.setState({ count:responseJson.response_data.quantity });
                       
               } 
             
            })
            .catch((error) => {
    
            });
        
        }
        
        postOrder() {
           
            // console.log(this.state.userId);
          this.setState({ loading:true });
  fetch(Hosturl.api+'get-cart', {
      method: 'POST',
      body: JSON.stringify({
        user_id: this.state.userId,
        first_name:this.props.route.params.name,
        last_name: this.props.route.params.name,
        phone_number:this.props.route.params.phone,
        email: this.props.route.params.email,
        address:this.props.route.params.address,
        city: this.props.route.params.address,
        state:'west bengal',
        country: 'india',
        zip_code:'731219',
        payment_through:1
       
      }),
      headers: {
        //Header Defination
        'Accept': 'application/json',
        'Content-Type':'application/json',
        'Authorization' :  'Bearer  '+this.state.token
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        this.setState({ loading:false });
      // console.log(responseJson);
        
         if (responseJson.status) {
            this.props.navigation.navigate('cartStack', {
                screen:'PaymentSuccess',
});
        //this.setState({ cartlist:responseJson.response_data.cart });
     
       // this.setState({ count:responseJson.response_data.quantity });
                 
         }else{
            Alert.alert('Sorry something went wrong please try again!');
         } 
       
      })
      .catch((error) => {

      });
  
  }
        render() {
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          <Loader loading={this.state.loading} />
          <View style={styles.profile_body}>
          <ScrollView  showsVerticalScrollIndicator={false}>
<View style={{marginTop:20,}}>
<Text style={{color:COLORS.black,fontSize:15,fontWeight:SIZES.medium,textTransform:'uppercase'}}>Select Payment Options</Text>

<View style={{marginTop:10}}>
<View style={{borderWidth:0.5,borderColor:'#ebebeb',marginVertical:10}}></View>
    <View style={{flexDirection:'row',marginBottom:10,}}>
       
      <RadioButton
        value="first"
        status={ this.state.checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => this.setState({ checked:'first' })}
      />
      <View style={{marginTop:8,marginLeft:5}}>
      <Image source={require("../assets/images/paypal.png")} />
          </View>
      </View>
     
      
      <View style={{borderWidth:0.5,borderColor:'#ebebeb',marginVertical:10}}></View>
      <View style={{flexDirection:'row',marginBottom:10}}>
      <RadioButton
        value="third"
        status={ this.state.checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => this.setState({ checked:'third' })}
      />
      <View style={{marginTop:5,marginLeft:5}}>
      <Image source={require("../assets/images/debit_creadit.png")} /> 
          </View>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:15,fontWeight:SIZES.regular,color:COLORS.black,textTransform:'uppercase'}}>COD</Text>
      </View>
      <View style={{borderWidth:0.5,borderColor:'#ebebeb',marginVertical:10}}></View>
    </View>



<View >

<Text style={{color:COLORS.black,fontSize:16,fontWeight:SIZES.medium,textTransform:'uppercase',marginBottom:20,marginTop:10}}>Payment Summery</Text>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Product Price</Text></View>
    <View ><Text style={styles.ptitle}> {this.props.route.params.carttotal}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Discount</Text></View>
    <View ><Text style={styles.ptitletax}>{this.props.route.params.totaldiscount}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Tax</Text></View>
    <View ><Text style={styles.ptitle}>  {this.props.route.params.tax}</Text></View>
</View>
<View style={styles.br}></View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Price</Text></View>
    <View ><Text style={styles.ptitle}>{this.props.route.params.subtotal}</Text></View>
</View>

    </View>
    <View style={{flexDirection:'row',marginTop:40}}>
    <View style={{flex:1}}>
<Text style={{fontSize:20,fontWeight:SIZES.medium,color:COLORS.black,marginTop:30}}>{this.props.route.params.subtotal}</Text>
        </View>
        <View style={{flex:1}}>


{this.state.checked=='third' ? (
  <>
  <TouchableOpacity onPress={() => this.postOrder()}>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Order now</Text>
    </View>
    </TouchableOpacity>
    </>):  <>
    <TouchableOpacity >
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Pay now</Text>
    </View>
    </TouchableOpacity>
    
    </>}

</View>
</View>

</View>

</ScrollView>
              </View>
           
          
        </View>
   );
}
}

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