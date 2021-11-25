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
class Checkout extends Component {
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
          vendorid:'',
          cartlist:[],
          carttotal:0,
          totaldiscount:0,
          tax:0,
          subtotal:0,
          selectedValue:1,
          count : 0,
          adrs_val:false,
          address:'',
         
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
    }else{
        this.props.navigation.navigate('Home');
    }
    if(this.state.userId && this.state.token){
        this.getProfile();
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
      getCart() {
       
        if(this.state.vendorid){}
            this.setState({ loading:true });
    fetch(Hosturl.api+'get-cart', {
        method: 'POST',
        body: JSON.stringify({
            user_id: this.state.userId,
           // vendor_id:this.state.vendorid
         
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
          this.setState({ loading:false });
         //console.log(responseJson.response_data.cart);
          
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
      proceed_payment(){
        this.setState({ loading:true });
        if(!this.state.adrs_val){
          this.setState({ loading:false });
          Alert.alert('Please select address');
        }else{
          this.setState({ loading:false });
        this.props.navigation.navigate('cartStack', {
          screen:'Payment',
          params: { carttotal:this.state.carttotal,totaldiscount:this.state.totaldiscount,
            tax:this.state.tax,subtotal:this.state.subtotal,address:this.state.address,
          name:this.state.name,email:this.state.email,phone:this.state.phone
          },
});
      }
      }
      select_address(){
       this.setState({adrs_val:true });
       AsyncStorage.setItem('address',this.state.address);
      }
      getProfile() {
        //console.log(231);
    
       fetch(Hosturl.api+'get-profile', {
          method: 'POST',
          body: JSON.stringify({
            user_id: this.state.userId,
           
          }),
          headers: {
            //Header Defination
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization' :  'Bearer  '+this.state.token
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            //setLoading(false);
           // console.log(responseJson.response_data);
            
             if (responseJson.status) {
            
                this.setState({ name:responseJson.response_data.name });
                this.setState({ email:responseJson.response_data.email });
                this.setState({ phone:responseJson.response_data.phone_number});
                this.setState({ address:responseJson.response_data.address});  
            //   //console.log(responseJson);
           // setuserdata(responseJson.response_data)
             } 
           
          })
          .catch((error) => {
            //Hide Loader
            //setLoading(false);
            //console.error(error);
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
<Image style={styles.img} source={require("../assets/images/crazylogo.png")} />

</View>

<Text style={styles.itemtext}>{value.product_name}</Text>
<Text style={styles.pricetitle}>{value.currency}{value.sale_price} X {value.quantity}
{/* /<Text style={styles.percentcolor}>20%</Text> */}
</Text>
<View style={styles.delicon}>
<TouchableOpacity  onPress={() => this.remove(value.cart_id)}>
    <Icon name="trash" color="#d0d0d0" size={25} />
    </TouchableOpacity>
    </View>
</View>

</View>

))}

<View style={{marginTop:20,marginBottom:10}}>
  <Text style={{fontSize:20,fontWeight:SIZES.medium,textTransform:'uppercase'}}>Delivery address</Text>
</View>
<TouchableOpacity  onPress={() =>this.select_address() }>
<View style={ (this.state.adrs_val==true) ? styles.fashionboxact : styles.fashionbox}>
                
                <View style={styles.fashiontextbox}>
            <Text style={styles.username}>
           {this.state.name}
            </Text>
            
            <Text style={styles.address}> {this.state.address}</Text>
            <Text style={styles.userphone}><Material name="phone-in-talk" size={20} style={{marginLeft:5}} color='#00000' />{this.state.phone}</Text>
                    </View>
                </View>
                </TouchableOpacity>

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
    <View ><Text style={styles.ptitle}>{this.state.carttotal}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Discount</Text></View>
    <View ><Text style={styles.ptitletax}>{this.state.totaldiscount}</Text></View>
</View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Tax</Text></View>
    <View ><Text style={styles.ptitle}>{this.state.tax}</Text></View>
</View>
<View style={styles.br}></View>
<View style={styles.prow}>
    <View><Text style={styles.ptitle}>Total Price</Text></View>
    <View ><Text style={styles.ptitle}>{this.state.subtotal}</Text></View>
</View>

    </View>
<TouchableOpacity onPress={() =>this.proceed_payment() }>
    <View style={styles.paybutton}>
        <Text style={styles.paybuttontext}>Proceed to payment</Text>
    </View>
</TouchableOpacity>


</View>

</ScrollView>
 }
              </View>
           
          
        </View>
   );
}
}

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
    imgnw:{width:'100%',height:'100%',resizeMode:'cover',borderRadius:10},
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
    fashionbox:{
     
      height:130,
      borderColor:COLORS.gray,
      borderWidth:0.5,
      borderRadius:10,
      
          },
          fashionboxact:{
           
             height:130,
             borderColor:COLORS.cyan,
             borderWidth:0.5,
             borderRadius:10,
             
                 },
          fashiontextbox:{position:'absolute',top:10,bottom:5,left:15},
          fashiontitle:{fontSize:28,fontWeight:'700',textTransform:'uppercase',},
          username:{fontSize:18,fontWeight:SIZES.regular},
          address:{fontSize:15,fontWeight:SIZES.light,},
          userphone:{fontSize:15,fontWeight:SIZES.regular,paddingTop:5},
  
})