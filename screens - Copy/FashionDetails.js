import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,ToastAndroid,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';
import {useRoute} from '@react-navigation/native';
import { Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import CommonBottom from '../component/CommonBottom';

class FashionDetails extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            token:'',
          loading: false,
          value: true,
          visible: false,
          userId: 0,
          vendorId: this.props.route.params.vendorId,
          slug: this.props.route.params.slug,
          details:'',
          pbody:'',
          currency:'',
          multiimage:[],
          productId:0,
         
         
         
        };
      //  const { navigation } = this.props;
      }
      async  componentDidMount()
      {
       // let userId = this.props.route.params.userId; 
        //this.setState({ userId:userId }) 
        // const route = useRoute();
        // const params= route.params.productId;
        // console.log(params);
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
       // this.props.navigation.navigate('Home');
    }
    if(this.state.vendorId && this.state.slug){
      //console.log(this.state.slug);
        this.getData();
    }
      }
      getData() {
        this.setState({ loading:true });
       fetch(Hosturl.api+'get-product-details?vendor_id='+this.state.vendorId+'&slug='+this.state.slug, {
          method: 'GET',
        //   body: JSON.stringify({
        //     vendor_id: this.state.userId,
        //     slug: this.state.userId,
        //   }),
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
            this.setState({ loading:false });
            //console.log(responseJson);
            
             if (responseJson.status) {
            
                this.setState({ details:responseJson.response_data });
                let dbody=  responseJson.response_data.description.replace( /(<([^>]+)>)/gi, '');
                this.setState({ pbody:dbody});
                this.setState({ currency:responseJson.currency});
                this.setState({ multiimage:responseJson.images});
                this.setState({ productId:responseJson.response_data.id });
            //   //console.log(responseJson);
           // setuserdata(responseJson.response_data)
             } 
           
          })
          .catch((error) => {
            //Hide Loader
            this.setState({ loading:false });
            //console.error(error);
          });
      }
      addCart() {
      //  alert(123);
    
        fetch(Hosturl.api+'add-to-cart', {
           method: 'POST',
           body: JSON.stringify({
             vendor_id: this.state.vendorId,
             product_id : this.state.productId,
             quantity:1,
             user_id:this.state.userId,
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
              ToastAndroid.show("Cart added successfully", ToastAndroid.SHORT,ToastAndroid.TOP);
              AsyncStorage.setItem('vendorid', this.state.vendorId);
       
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
      render() {
    return (
        <View style={styles.profile_bodyarea}>
       
     
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            
            <Loader loading={this.state.loading} />
   

<Swiper  key={this.state.multiimage.length} showsButtons={false} dotColor="#fff" activeDotColor={COLORS.cyan} paginationStyle={{ position: "absolute", top: 0, bottom: 25,color:'red'}} autoplay={true}>

{this.state.multiimage.map((value, index) => (
<View style={styles.imgbox}>
<Image style={styles.imgnw}  source={{uri: Imgurl.path+value.image,}}/>

</View>
))}
 </Swiper>
{/* <View style={styles.imgbox}>
<Image style={styles.img} source={require("../assets/images/fashion_details.png")} />

</View>
<View style={styles.imgbox}>
<Image style={styles.img} source={require("../assets/images/fashion_details.png")} />

</View> */}
        {/* <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View> */}
     
          <View style={styles.profile_body}>
          
              
         <ScrollView  showsVerticalScrollIndicator={false}>

<View style={{marginTop:20,}}>

<View style={styles.imgbox2}>
<Image style={styles.img} source={require("../assets/images/crazylogo.png")} />

</View>
<View>
    <Text style={styles.desctitle}>Description </Text>
    <Text style={styles.describetext}>{this.state.pbody}</Text>
<View style={{marginTop:5}}>
   <Text style={styles.weblinktext}><Image  source={require("../assets/images/webicon.png")} />  <TouchableOpacity onPress={() => Linking.openURL('https://www.csglobalmall/crazydealz.com')}><Text style={{color: 'blue'}} >https://www.csglobalmall/crazydealz.com</Text></TouchableOpacity></Text>
</View>

<View style={{marginTop:5,marginBottom:5}}>
   <Text style={{fontSize:14,color:COLORS.black,fontWeight:SIZES.light}}> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.cyan} /> <Icon  name="star" color={COLORS.gray} /> <Text style={{color: COLORS.gray}} >150 Customer Reviews</Text></Text>
</View>
<Text style={styles.pricetitle}>{this.state.currency} {this.state.details?.sale_price}
{/* / <Text style={{color: COLORS.cyan}} >20% Off</Text> */}
</Text>


</View>


<TouchableOpacity onPress={() => this.addCart()}> 
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
        
<CommonBottom />

              </View>
           
          
             

</View>
    );
}
}


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
       paddingBottom:55
      
      
    },
    img:{width:'100%',resizeMode:'cover'},
    imgnw:{width:'100%',height:'100%',resizeMode:'cover'},
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
wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  
})

export default FashionDetails;