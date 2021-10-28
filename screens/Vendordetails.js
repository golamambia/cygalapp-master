import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );



const Vendordetails = ({route, navigation }) => {
   
    const [loading, setLoading] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [token, settoken] = useState("");
    const [shop_type, setshop_type] = useState("");
    const [vendordata, setvendordata] = useState();
    const [tabval, settabval] = useState(1);
    const { vendorId } = route.params;

   

    useEffect(async () => {
        if(JSON.stringify(vendorId)){
    
            //const shop_type =JSON.stringify(vendorId);
            setshop_type(JSON.stringify(vendorId));
            }else{
                setshop_type('');
            }
        //console.log(1);
       const unsubscribe = navigation.addListener('focus', () => {
           demo();
         
         });
         return unsubscribe;
 
    
    },[]);
    const demo=(async () => {
       // console.log(JSON.stringify(route.params.vendorId));
        
        const tokn =await  AsyncStorage.getItem('token');
        if (tokn !== null) {
           
            //this.setState({ token:tokn }) 
            settoken(tokn);
           
        }
        const vid=JSON.stringify(route.params.vendorId);
        if(vid){
      
            setLoading(true);
            fetch(Hosturl.api+'get-product?vendor_id='+vid, {
                method: 'GET',
                //    body: JSON.stringify({
                //     vendor_id: shop_type,
                    
                    
                //    }),
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
                // console.log(responseJson.currency);
                  
                   if (responseJson.status) {
                    setvendordata(responseJson.vendor);
                
                   } 
                 
                })
                .catch((error) => {
            
                });
            }
                
    });

    function tabfun(no) {
       // console.log(`hello, ${name}`);
       settabval(no);
    }
    return (
        <View style={styles.profile_bodyarea}>
       
     
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
                     
                     <Loader loading={loading} />
          <View style={styles.profile_body}>
          
             
         <ScrollView  showsVerticalScrollIndicator={false}>
        
<View style={{marginTop:20,}}>
    <View style={{flexDirection:'row'}}>
<View style={{flex:2}}>
    <View style={{width:120,height:120,borderColor:COLORS.cyan,borderRadius:120/2,borderWidth:3,marginTop:-15}}>
<View style={styles.imgbox2}>
<Image style={styles.imgnw} source={{
    uri: Imgurl.path+vendordata?.site_logo,
   
  }} />

</View>
</View>
</View>
{/* {JSON.stringify(route.params.vendorId)} */}
<View style={{flex:1}}>
<View>
<Text style={styles.descno}>150+</Text>
<Text  style={styles.noremark}>Reviews   </Text>
    </View>
    </View>
    <View style={{flex:1}}>
    <View>
<Text style={styles.descno}>20</Text>
<Text  style={styles.noremark}>Categories </Text>
    </View>
    </View>
</View>

<View>
<Text style={styles.desctitle2}>{vendordata?.store_name}</Text>
    <Text style={styles.desctitle}>Description</Text>
    <Text style={styles.describetext}>{vendordata?.about_store} </Text>
<View style={{marginTop:5}}>
   <Text style={styles.weblinktext}><Image  source={require("../assets/images/webicon.png")} />  <TouchableOpacity onPress={() => Linking.openURL('https://www.csglobalmall/crazydealz.com')}><Text style={{color: 'blue'}} >https://www.csglobalmall/crazydealz.com</Text></TouchableOpacity></Text>
</View>




</View>



<TouchableOpacity style={{marginTop:20}}>
    <View style={styles.paybutton2}>
        <Text style={styles.paybuttontext2}>View shop</Text>
    </View>
</TouchableOpacity>

<View style={{marginTop:30}}>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View >
<TouchableOpacity  onPress={() => tabfun(1)}>
<View  style={ tabval==1 ? styles.tabactivecircle : styles.tabdeactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={ tabval==1 ? styles.actvietxt : styles.dactvietxt}>{vendordata?.site_title}</Text>
<View style={ tabval==1 ? styles.activemargin : styles.deacmargin}></View>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity onPress={() => tabfun(2)}>
<View style={ tabval==2 ? styles.tabactivecircle : styles.tabdeactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={ tabval==2 ? styles.actvietxt : styles.dactvietxt}>Products</Text>
<View style={ tabval==2 ? styles.activemargin : styles.deacmargin}></View>
</TouchableOpacity>
</View>



<View>
<TouchableOpacity onPress={() => tabfun(3)}>
<View style={ tabval==3 ? styles.tabactivecircle : styles.tabdeactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={ tabval==3 ? styles.actvietxt : styles.dactvietxt}>Reviews</Text>
<View style={ tabval==3 ? styles.activemargin : styles.deacmargin}></View>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity onPress={() => tabfun(4)}>
<View style={ tabval==4 ? styles.tabactivecircle : styles.tabdeactivecircle}>
<View style={styles.tabimgbox}>
<Image style={styles.img2} source={require("../assets/images/vd.png")} />

</View>
</View>
<Text style={ tabval==4 ? styles.actvietxt : styles.dactvietxt}>Categories</Text>
<View style={ tabval==4 ? styles.activemargin : styles.deacmargin}></View>
</TouchableOpacity>
</View>

</ScrollView>
{/* <View style={{borderWidth:.5,marginTop:12,borderColor:'#e5e5e5',width:'100%',paddingLeft:-20}}></View> */}
    </View>

    {tabval>0 &&
    <View style={{marginTop:20,flexDirection:'row',flexWrap:'wrap'}}>
   
    
    <View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
<View style={styles.tabinnerbox}>
    <View style={styles.tabinnerimgbox}>
<Image style={styles.img} source={require("../assets/images/tabimg.png")} />

</View>
</View>
 
    </View>
}




</View>

</ScrollView> 
        


              </View>
           
          
             

</View>
    );
};

export default Vendordetails;

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
        
        paddingTop:20
     },
    img:{width:'100%',resizeMode:'cover'},
    imgnw:{width:'100%',height:'100%',resizeMode:'cover',},
    img2:{width:'100%',resizeMode:'cover',borderRadius:80/2},
    imgbox:{
        height:'100%',
        width:'100%',
        },
        imgbox2:{
            height:35,
            width:82,
            marginTop:40,
            alignSelf:'center'
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
desctitle:{color:COLORS.cyan,fontSize:16,fontWeight:SIZES.regular,},
desctitle2:{color:COLORS.black,fontSize:20,fontWeight:SIZES.medium,textTransform:'uppercase',marginTop:20,marginBottom:8},
describetext:{fontSize:14,color:COLORS.black,fontWeight:SIZES.light},
weblinktext:{fontSize:14,color:COLORS.black,fontWeight:SIZES.light},
pricetitle:{color:COLORS.black,fontSize:20,fontWeight:SIZES.medium,},
descno:{fontSize:22,fontWeight:SIZES.medium,alignSelf:'center'},
noremark:{fontSize:14,fontWeight:SIZES.light,alignSelf:'center'},
tabimgbox:{
    height:80,
    width:80,
    
    },
    tabdeactivecircle:{width:84,height:84,borderColor:COLORS.gray,borderRadius:84/2,borderWidth:1,marginRight:15},
    tabactivecircle:{width:84,height:84,borderColor:COLORS.cyan,borderRadius:84/2,borderWidth:1,marginRight:15},
    actvietxt:{color:COLORS.cyan,fontWeight:SIZES.light,fontSize:14,textTransform:'uppercase',marginTop:10,textAlign:'center'},
    dactvietxt:{color:COLORS.black,fontWeight:SIZES.light,fontSize:14,textTransform:'uppercase',marginTop:10,textAlign:'center'},
    activemargin:{borderWidth:1,marginTop:12,borderColor:COLORS.cyan,width:'100%',},
    deacmargin:{borderWidth:.5,marginTop:12,borderColor:'#e5e5e5',width:'100%',},
    tabinnerimgbox:{ height:110,
        width:100,},
    tabinnerbox:{width:'30.33%',marginRight:'3%',marginBottom:'7%'},

  
})