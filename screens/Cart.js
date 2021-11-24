import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,ToastAndroid,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard,Button} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
    import AsyncStorage from '@react-native-community/async-storage';
    import Loader from '../component/Loader';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonBottom from '../component/CommonBottom';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
class Cart extends Component {
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
         
        };
       
          
        
            this.M = {Message : " "}
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
           // this.result = this.result.bind(this);
          //  this.result();
        
        
      }
    
    async  componentDidMount()
      {
        this.focusListener = this.props.navigation.addListener('focus',
        () => { 
                //console.log('focus is called'); 
              this.getonlineData();
        }
      );
       
      
      }
      async  getonlineData()
      {
        const tokn =await  AsyncStorage.getItem('token');
        if (tokn !== null) {
            //console.log(tokn);
            this.setState({ token:tokn }) 
           
        }
        const value = await AsyncStorage.getItem('user_id');
    if (value !== null) {
        this.setState({ userId:value }) 
       //console.log(value);
       //setuserid(value);
    }
    if(this.state.userId && this.state.token){
        //this.getProfile();
    }


    const getvendorid = await AsyncStorage.getItem('vendorid');
    if (getvendorid !== null) {
        this.setState({ vendorid:getvendorid }) 
      // console.log(getvendorid);
       //setvendorId(getvendorid);
       //this.getCart();
    }
    this.getCart();
   
      }

      increment(id,qty){
        // if(this.state.count<9){
        // this.setState({count : this.state.count + 1}) ;
        
        // }
        fetch(Hosturl.api+'update-cart', {
            method: 'POST',
            body: JSON.stringify({
              vendor_id: this.state.vendorid,
              //product_id : this.state.productId,
              quantity:parseInt(qty)+1,
              user_id:this.state.userId,
              cart_id:id
            }),
            headers: {
              //Header Defination
              'Accept': 'application/json',
              'Content-Type':'application/json',
              //'Authorization' :  'Bearer  '+this.state.token
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              //Hide Loader
              //setLoading(false);
              //console.log(responseJson);
              
              if (responseJson.status) {
               ToastAndroid.show("Cart updated successfully", ToastAndroid.SHORT,ToastAndroid.TOP);
               this.getCart();  
            } 
           else {
        
          Alert.alert('Server error');
            }
             
            })
            .catch((error) => {
              //Hide Loader
              //setLoading(false);
              //console.error(error);
            });
      }
    
      decrement(id,qty) {
        //   if(this.state.count>1){
        // this.setState({count : this.state.count - 1});
       
        //   }
        fetch(Hosturl.api+'update-cart', {
            method: 'POST',
            body: JSON.stringify({
              vendor_id: this.state.vendorid,
              //product_id : this.state.productId,
              quantity:parseInt(qty)-1,
              user_id:this.state.userId,
              cart_id:id
            }),
            headers: {
              //Header Defination
              'Accept': 'application/json',
              'Content-Type':'application/json',
              //'Authorization' :  'Bearer  '+this.state.token
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              //Hide Loader
              //setLoading(false);
              //console.log(responseJson);
              
              if (responseJson.status) {
               ToastAndroid.show("Cart updated successfully", ToastAndroid.SHORT,ToastAndroid.TOP);
               this.getCart();  
            } 
           else {
        
          Alert.alert('Server error');
            }
             
            })
            .catch((error) => {
              //Hide Loader
              //setLoading(false);
              //console.error(error);
            });
      }
    
    remove(id) {
        //   if(this.state.count>1){
        // this.setState({count : this.state.count - 1});
       
        //   }
        fetch(Hosturl.api+'remove-cart', {
            method: 'POST',
            body: JSON.stringify({
              vendor_id: this.state.vendorid,
              //product_id : this.state.productId,
              //quantity:parseInt(qty)-1,
              user_id:this.state.userId,
              cart_id:id
            }),
            headers: {
              //Header Defination
              'Accept': 'application/json',
              'Content-Type':'application/json',
              //'Authorization' :  'Bearer  '+this.state.token
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              //Hide Loader
              //setLoading(false);
              //console.log(responseJson);
              
              if (responseJson.status) {
               ToastAndroid.show("Cart deleted successfully", ToastAndroid.SHORT,ToastAndroid.TOP);
               this.getCart();  
            } 
           else {
        
          Alert.alert('Server error');
            }
             
            })
            .catch((error) => {
              //Hide Loader
              //setLoading(false);
              //console.error(error);
            });
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
    proceed_payment(){
      this.setState({ loading:true });
      if(!this.state.userId){
        this.setState({ loading:false });
        Alert.alert('Please login first');
      }else{
        this.setState({ loading:false });
        this.props.navigation.navigate('cartStack', {
          screen:'Checkout',
})
    }
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
          {this.state.subtotal>0 &&
          <ScrollView  showsVerticalScrollIndicator={false}>
<View style={{marginTop:25}}>

{this.state.cartlist.map((value, index) => (
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

<View style={{flexDirection:'row',marginRight:10}}>
    <TouchableOpacity  onPress={() => this.decrement(value.cart_id,value.quantity)}>
<View  style={styles.input2}>
      <Material name="minus" color={COLORS.cyan} width={20}  size={18}/>
      </View>
      </TouchableOpacity>
      <Text style={{paddingHorizontal:5}}>{ parseInt(value.quantity)}</Text>
      <TouchableOpacity  onPress={() => this.increment(value.cart_id,value.quantity)}>
<View  style={styles.input2}>
      <Material name="plus"  color={COLORS.cyan} width={20}  size={18}/>
      </View>
      </TouchableOpacity>
     
                      </View>
                   
                        </View>
<View style={styles.delicon}>
<TouchableOpacity  onPress={() => this.remove(value.cart_id)}>
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
    <View ><Text style={styles.ptitle}> {this.state.carttotal}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Discount</Text></View>
    <View ><Text style={styles.ptitletax}> {this.state.totaldiscount}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Tax</Text></View>
    <View ><Text style={styles.ptitle}> {this.state.tax}</Text></View>
</View>
<View style={styles.br}></View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Subtotal</Text></View>
    <View ><Text style={styles.ptitle}>{this.state.subtotal}</Text></View>
</View>

    </View>
   
<TouchableOpacity  onPress={() => this.proceed_payment()}>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Proceed to checkout</Text>
    </View>
</TouchableOpacity>
          

</View>

</ScrollView>
    }
    {this.state.subtotal ==0 &&
<View style={[styles.paybutton,{alignContent:'center',alignItems:'center',marginTop:100}]}>
        <Text style={styles.paybuttontext}>Your cart is empty</Text>
    </View>
    }


<CommonBottom />
              </View>
           
          
        </View>
   );
}
}
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
        marginBottom: 0,
        borderWidth: 1,
        borderColor:COLORS.cyan,
       // paddingHorizontal: SIZES.padding,
        fontSize: 8,
        borderRadius:5,
        backgroundColor:'#fff',
        color:'#ffffff',
        //paddingLeft:15,
        alignItems:'center',
        alignSelf:'center',
        
    },
 
})