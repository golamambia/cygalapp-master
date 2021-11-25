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

    class OrderList extends Component {
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


             
            };
          
            
          }
          async  componentDidMount()
          {
            this.focusListener = this.props.navigation.addListener('focus',
            () => { 
                  //  console.log('focus is called'); 
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
          this.getList();
        }
    
    
     
       
          }
     
    
     
    
          getList() {
           
                  // console.log(this.state.userId);
                this.setState({ loading:true });
        fetch(Hosturl.api+'get-order', {
            method: 'POST',
            body: JSON.stringify({
                user_id: this.state.userId,
                //vendor_id:this.state.vendorid
             
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
             console.log(responseJson);
              
               if (responseJson.status) {
               
             // this.setState({ cartlist:responseJson.response_data.cart });
             
             // this.setState({ count:responseJson.response_data.quantity });
                       
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
            
          <View style={{marginTop:30}}>

<View style={styles.listbox}>
<View style={styles.flexrow}>

<View style={styles.flexthree}>
  <View>
    <Text style={styles.orderid}>Order#: 112056</Text>
  </View>
  <View>
    <Text style={styles.producttitle}>Maecenas vitae dui eget turpis</Text>
  </View>
  <View>
    <Text style={styles.datetime}>15 Nov, 2021, 1:00 PM</Text>
  </View>

</View>
<View style={styles.flexone}>
  <View style={styles.imgbox}>
  <Image style={styles.imglogo} source={require("../assets/images/checkout.png")} />
  </View>
  
  </View>
  </View>
  <View style={styles.bellowrow}>
<View style={styles.flexone}>
<View>
    <Text style={styles.deliveryon}>Delivered on 16 Nov</Text>
  </View>

</View>
<View style={styles.ratedrow}>
<View>
<Text style={styles.ratedtitle}>You Rated : 
<Material color={COLORS.cyan} name="star" size={16}/>
<Material color={COLORS.cyan} name="star" size={16}/>
<Material color={COLORS.cyan} name="star" size={16}/>
<Material color={COLORS.cyan} name="star" size={16}/>
<Material color={COLORS.black} name="star" size={16}/>

</Text>
</View>

</View>
  </View>
  
  </View>
 
  





</View>

</ScrollView>
              </View>
           
          
        </View>
   );
}
}

export default OrderList;

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
    imglogo:{width:'100%',height:'100%',resizeMode:'cover',borderRadius:10},
    imgnw:{width:'100%',height:'100%',resizeMode:'cover',borderRadius:10,height:'100%'},
    imgbox:{height:65,width:70,},
    listbox:{
      marginBottom:10,
      padding:16,
      borderRadius:10,
        backgroundColor:'#f8f8f8',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }},
        flexrow:{flexDirection:'row'},
        flexthree:{flex:3},
        orderid:{fontSize:16,fontWeight:SIZES.medium,},
        producttitle:{fontSize:14,fontWeight:SIZES.regular,},
        datetime:{fontSize:13,fontWeight:SIZES.light,},
        flexone:{flex:1},
        bellowrow:{flexDirection:'row',marginTop:10},
        deliveryon:{fontSize:12,fontWeight:SIZES.light,color:'orange'},
        ratedrow:{flex:1,alignItems:'flex-end',marginRight:6},
        ratedtitle:{fontSize:12,fontWeight:SIZES.light,alignItems:'flex-end'},
 
 

  
})