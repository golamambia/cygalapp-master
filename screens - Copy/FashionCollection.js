import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';
import CommonBottom from '../component/CommonBottom';

const FashionCollection = ({navigation, route}) => {
    const [loading, setLoading] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [token, settoken] = useState("");
    const [shop_type, setshop_type] = useState("");
    const [vendorlist, setvendorlist] = useState([]);
    const { vendorId } = route.params?.vendorId ?? 0;
    
    useEffect(async () => {
        
        //console.log(1);
     navigation.addListener('focus', () => {
        console.log(1);
           demo();
         
         });
        
 
    
    },[]);
    const demo=(async () => {
        if(JSON.stringify(vendorId)){
    
            //const shop_type =JSON.stringify(vendorId);
            setshop_type(JSON.stringify(vendorId));
            console.log(JSON.stringify(vendorId));
            }else{
                setshop_type('');
            }
        setLoading(true);
        const tokn =await  AsyncStorage.getItem('token');
        if (tokn !== null) {
            //console.log(tokn);
            //this.setState({ token:tokn }) 
            settoken(tokn);
           
        }
        
       
           //console.log(shop_type);
            fetch(Hosturl.api+'get-vendors', {
                method: 'POST',
                   body: JSON.stringify({
                    shop_type: 5,
                   }),
                headers: {
                  //Header Defination
                  'Accept': 'application/json',
                  'Content-Type':'application/json',
                  //'Authorization' :  'Bearer  '+token
                },
              })
                .then((response) => response.json())
                .then((responseJson) => {
                  //Hide Loader
                  setLoading(false);
                  //console.log(responseJson);
                  
                   if (responseJson.status) {
                    setvendorlist(responseJson.response_data);
                
                   } 
                 
                })
                .catch((error) => {
            
                });
                
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
            <View >
               

        <View style={styles.fashionstart}>

        {vendorlist.map((value, index) => (
<View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('Shop', {
    screen:'Vendordetails',
    params: { vendorId: value.id },
  })}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimgnw}  source={{
    uri: Imgurl.path+value.store_image,
   
  }} />
</View>
<View style={styles.logtext}>
    <View style={{width:30,height:30,borderRadius:30/2,borderColor:'white',borderWidth:1,backgroundColor:'white'}}>
    <View style={styles.logobox}>
    <Image style={styles.fashionimg}  source={{
    uri: Imgurl.path+value.mall_logo,
   
  }} />
    {/* <Image style={styles.fashionimg} source={{uri: 'https://reactjs.org/logo-og.png'}} /> */}
    </View>
    </View>
    <Text style={styles.logotitle}>{value.site_title} </Text>
</View>
<View style={styles.ltboxtitle}>
    
    <Text style={styles.readmoretitle}>{value.store_name}...<Text style={styles.morecolor}>[View More]</Text></Text>
</View>
</TouchableOpacity>
    </View>

))}

{!vendorlist ? (
  <>

  <Text>No record found</Text>
  </>): null}
        </View>
   

            </View>
            </ScrollView>

            <CommonBottom />
              </View>
           
          
        </View>
    );
};

export default FashionCollection;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#11bbc2',
               
    },
   
    profile_body: {
       flex:1,
    //    position:'absolute',
    marginTop:100,
       backgroundColor:'#fff',
       bottom:0,
       left:0,
       width:'100%',
    //    height:570,
       borderTopRightRadius:50,
       paddingHorizontal:20,
       paddingVertical:20,
       paddingTop:20,
       paddingBottom:55
    },
    fashionbox:{
position:'relative',
height:196,

borderRadius:10,

    },
imgbox:{
    height:186,alignItems:'center'
},
img:{width:'100%',resizeMode:'cover'},
textdesc:{
    fontSize:14,
    fontWeight:'300',
    color:'#000'
},
text_title:{
    fontSize:20,
    fontWeight:'400',
    color:'#000'
},
textbox:{
    marginTop:17
},
imgsectionone:{
    flex:1,
    height:221,
    position:'relative'
   
},
imgtitle:{
    position:'absolute',
    bottom:20,
    left:0,
    paddingHorizontal:12,
   
},
imgtitletext:{
color:'#fff',
fontSize:16,
paddingVertical:8
},
imgsection:{flexDirection:'row',justifyContent:'space-between',marginTop:25},
discounttitle:{
    color:'#000',
fontSize:18,
fontWeight:'500',
paddingVertical:8,
textTransform:'uppercase'
},
imgdiscount:{
    
    height:187,
  
},
fashiontextbox:{position:'absolute',top:25,bottom:0,left:15},
fashiontitle:{fontSize:28,fontWeight:'700',textTransform:'uppercase',},
latestfashionbox:{width:'47%',marginRight:'3%',marginBottom:20,position:'relative',},
'latestfashionbox:last-child':{ 
    marginRight:0, 
},
ltboxtitle:{marginLeft:10,marginRight:15},
ltfashiontext:{fontSize:16,color:'#000',fontWeight:'300'},
fashionimgnw:{width:'100%',height:'100%',resizeMode:'cover',borderRadius:10},
fashionimg:{width:'100%',height:'100%',resizeMode:'cover',borderRadius:10,marginTop:8},
catbox:{marginBottom:15,flexDirection: "row",
flexWrap: "wrap",},
catleftbox:{marginRight:10,borderWidth:1,alignItems:'center',justifyContent:'center'
,borderColor:'#c9c9c9',height:163,width:113,borderRadius:10,borderTopRightRadius:30,
borderBottomLeftRadius:30,marginBottom:10
             
},
'catleftbox:nth-of-type(3n)':{
    marginRight:0,
},
catrightbox:{borderWidth:1,alignItems:'center',justifyContent:'center',
flex:1,borderColor:'#c9c9c9',height:213,borderRadius:10,
borderTopRightRadius:50,borderBottomLeftRadius:50},
catboxtext:{marginTop:20,textTransform:'uppercase',fontSize:16,
fontWeight:'500',textAlign:'center',marginBottom:20,color:'#fff'},
catboxcenter:{alignItems:'center',position:'relative'},
cattitle:{fontSize:16,fontWeight:'700',textTransform:'uppercase',color:'#000',marginBottom:15},
catfashionpos:{position:'absolute',justifyContent:'center',alignItems:'center',marginTop:30},
logtext:{position:'absolute',flexDirection:"row",top:8,left:10},
logotitle:{textTransform:'capitalize',fontSize:14,fontWeight:'400',color:'#fff',marginLeft:5,marginTop:5},
readmoretitle:{fontSize:12,fontWeight:'300'},
morecolor:{color:'#4dc3c8'},
logobox:{marginRight:10,height:11,width:24},
fashionstart:{flexDirection:'row',flexWrap:'wrap',marginTop:5},
  
})