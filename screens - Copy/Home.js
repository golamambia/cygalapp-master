import React, { useState,useContext ,useEffect }  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
    import AsyncStorage from '@react-native-community/async-storage';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import{ AuthContext } from '../component/context';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonBottom from '../component/CommonBottom';


const Home = ({ navigation }) => {
    useEffect(async () => {
   
        // console.log(123);
       
        navigation.addListener('focus', () => {
            demo();
          
          });
         
     
     },[]);
    const demo=(async () => {
        const value = await AsyncStorage.getItem('user_id');
    if (value !== null) {
       // console.log(value);
    }
       
    });
    const context = useContext(AuthContext);
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const handleSubmitPress = () => {
       navigation.navigate('Login');
   
             
          };
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="#000"
                translucent = {false}
            />
          
          <View style={styles.profile_body}>
        
          <ScrollView  showsVerticalScrollIndicator={false}>

          
                    <View style={{position:'relative'}}>
                       <View style={styles.inputIcon}>
                      
                       {/* <Image source={require("../assets/images/uicon.png")} /> */}
                       <Icon name="search" size={20} color={'#868686'}/>
                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="What are you looking for?"
                            placeholderTextColor="#868686" 
                        />
                        </View>

                        
                        <View >
                        <View style={{marginTop:10,marginBottom:15}}>
            
            <Text style={{color:COLORS.black,fontSize:15,fontWeight:SIZES.medium}}>Swipe to Explore More </Text>
            
           
            </View>
<View style={{marginBottom:20,flexDirection:'row'}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <View  style={styles.swipbox}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop', {
                   screen:'FashionCollection',
                   params: { vendorId:0 },
    

  })}>
            <View style={styles.swipcircle}>
        <Image style={styles.img2} source={require("../assets/images/swipto.png")} />
        </View>
        <Text style={styles.swiptitle}>Electronics</Text>
        </TouchableOpacity>
            </View>
            
            <View  style={styles.swipbox}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop', {
                   screen:'FashionCollection',
                   params: { vendorId:0 },
    

  })}>
            <View style={styles.swipcircle}>
        <Image style={styles.img2} source={require("../assets/images/swipto.png")} />
        </View>
        <Text style={styles.swiptitle}>Electronics</Text>
        </TouchableOpacity>
            </View>
            <View  style={styles.swipbox}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop', {
                   screen:'FashionCollection',
                   params: { vendorId:0 },
    

  })}>
            <View style={styles.swipcircle}>
        <Image style={styles.img2} source={require("../assets/images/swipto.png")} />
        </View>
        <Text style={styles.swiptitle}>Electronics</Text>
        </TouchableOpacity>
            </View>
            <View  style={styles.swipbox}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop', {
                   screen:'FashionCollection',
                   params: { vendorId:0 },
    

  })}>
            <View style={styles.swipcircle}>
        <Image style={styles.img2} source={require("../assets/images/swipto.png")} />
        </View>
        <Text style={styles.swiptitle}>Electronics</Text>
        </TouchableOpacity>
            </View>
            <View  style={styles.swipbox}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop', {
                   screen:'FashionCollection',
                   params: { vendorId:0 },
    

  })}>
            <View style={styles.swipcircle}>
        <Image style={styles.img2} source={require("../assets/images/swipto.png")} />
        </View>
        <Text style={styles.swiptitle}>Electronics</Text>
        </TouchableOpacity>
            </View>


</ScrollView>

</View>

            <View >
                <View style={styles.fashionbox}>
                <Image style={styles.img} source={require("../assets/images/homefashionbg.png")} />
                <View style={styles.fashiontextbox}>
         
            <Text style={styles.fashiontitle}>fashion</Text>
            <Text style={{fontSize:17,color:'#fff'}}>Fabulous Collections</Text>
            
            <TouchableOpacity style={styles.browse_touch} onPress={() => navigation.navigate('categoryStack', {
                   screen:'Categories', })}>
            <Text style={styles.browse_pro}>Browse Product</Text>
        </TouchableOpacity>

                
                    </View>
                </View>

          
        <View style={{marginTop:20,position:'relative'}}>
            
<Text style={styles.discounttitle}>Latest fashion </Text>

<Text style={{alignSelf:'flex-end',fontSize:14,color:'#909090',position:'absolute'}}> See All</Text>
</View>
        
        <View style={{marginTop:10,flexDirection:'row',}}>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimg} source={require("../assets/images/ecom2.png")} />
</View>
<View style={styles.ltboxtitle}>
    <Text style={styles.ltfashiontext}>Fashion</Text>
    
</View>
</TouchableOpacity>
    </View>

    <View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimg} source={require("../assets/images/ecom2.png")} />
</View>
<View style={styles.ltboxtitle}>
    <Text style={styles.ltfashiontext}>Fashion</Text>
   
</View>
</TouchableOpacity>
    </View>
    <View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimg} source={require("../assets/images/ecom2.png")} />
</View>
<View style={styles.ltboxtitle}>
    <Text style={styles.ltfashiontext}>Fashion</Text>
 
</View>
</TouchableOpacity>
    </View>
</ScrollView>



        </View>
   

        <View style={{marginTop:20,flexDirection:'row',}}>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.latestfashionbox2}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount2}> 
<Image style={styles.fashionimg} source={require("../assets/images/appliance_sale.png")} />
</View>
<View style={{position:'absolute',top:10}}>
    <Text style={styles.ltfashiontext2}>APPLIANCE SALE ON {"\n"}<Text style={{marginTop:10}}>20-30% Off</Text></Text>
    
</View>
</TouchableOpacity>
    </View>
    <View style={styles.latestfashionbox2}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount2}> 
<Image style={styles.fashionimg} source={require("../assets/images/appliance_sale.png")} />
</View>
<View style={{position:'absolute',top:10}}>
    <Text style={styles.ltfashiontext2}>APPLIANCE SALE ON {"\n"}<Text style={{marginTop:10}}>20-30% Off</Text></Text>
    
</View>
</TouchableOpacity>
    </View>

  
</ScrollView>



        </View>
        <View style={{marginTop:20,position:'relative',marginBottom:15}}>
            
            <Text style={{fontSize:18,fontWeight:SIZES.medium,color:COLORS.black,textTransform:'uppercase'}}>Shop Categories</Text>
            
            <Text style={{alignSelf:'flex-end',fontSize:14,color:'#909090',position:'absolute'}}> See All</Text>
            </View>
<View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <View style={styles.fashionbox2}>
                <Image style={styles.img} source={require("../assets/images/shop_cat.png")} />
                <View style={styles.fashiontextbox2}>
                            
        <TouchableOpacity >
            <Text style={styles.browse_pro2}>Electronics</Text>
        </TouchableOpacity>

                
                    </View>
                </View>

                <View style={styles.fashionbox2}>
                <Image style={styles.img} source={require("../assets/images/shop_cat.png")} />
                <View style={styles.fashiontextbox2}>
                            
        <TouchableOpacity >
            <Text style={styles.browse_pro2}>Electronics</Text>
        </TouchableOpacity>

                
                    </View>
                </View>
                <View style={styles.fashionbox2}>
                <Image style={styles.img} source={require("../assets/images/shop_cat.png")} />
                <View style={styles.fashiontextbox2}>
                            
        <TouchableOpacity >
            <Text style={styles.browse_pro2}>Electronics</Text>
        </TouchableOpacity>

                
                    </View>
                </View>
               


                </View>

            </View>
        </View>

            </ScrollView>
     
        </View>
        <CommonBottom />
        </View>
        
    );
};

export default Home;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#fff',
         
    },
    input: {
        height: 46,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#dbdbdb',
        paddingHorizontal: SIZES.padding,
        fontSize: 14,
        borderRadius:5,
        backgroundColor:'#fff',
        color:'#868686',
        paddingLeft:40,
        fontWeight:SIZES.light
        
    },
    inputIcon:{position:'absolute',top:12,left:12,zIndex:1},
   
    profile_body: {
       flex:1,
    //    position:'absolute',
    marginTop:100,
       backgroundColor:'#fff',
       bottom:0,
       left:0,
       width:'100%',
    //    height:570,
    //    borderTopRightRadius:50,
       paddingHorizontal:20,
       paddingVertical:20,
       paddingTop:20,
       paddingBottom:55
    },
    fashionbox:{
position:'relative',
height:198,

borderRadius:10,

    },
    fashionbox2:{
        position:'relative',
        height:110,
        width:'32%',
        borderRadius:10,
        marginRight:'1.3%',
        marginBottom:8
            },
            'fashionbox2:last-child':{
                marginRight:0,
            },
imgbox:{
    height:186,alignItems:'center'
},
img:{width:'100%',resizeMode:'cover'},
img2:{width:'100%',height:'100%',resizeMode:'cover'},
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
fontWeight:SIZES.medium,
paddingVertical:8,
textTransform:'uppercase'
},
imgdiscount:{
    
    height:178,
  
},
imgdiscount2:{
    position:'relative',
    height:144,
  
},
fashiontextbox:{position:'absolute',top:25,bottom:0,left:15},
fashiontextbox2:{position:'absolute',bottom:10,left:0,alignSelf:'center',right:0},
fashiontitle:{fontSize:26,fontWeight:'600',textTransform:'uppercase',color:'#fff'},
latestfashionbox:{width:140,marginRight:10,},
latestfashionbox2:{width:360,marginRight:10,},
ltboxtitle:{marginLeft:10,marginRight:15},
ltfashiontext:{fontSize:15,color:'#000',fontWeight:'400',textAlign:'center'},
ltfashiontext2:{fontSize:20,color:'#000',fontWeight:SIZES.semibold,color:COLORS.white,marginTop:25,marginLeft:15},
fashionimg:{resizeMode:'cover',borderRadius:10},
catbox:{marginBottom:15,flexDirection: "row",
flexWrap: "wrap",},
catleftbox:{marginRight:10,borderWidth:1,alignItems:'center',justifyContent:'center'
,borderColor:'#c9c9c9',height:160,width:113,borderRadius:10,borderTopRightRadius:30,
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
browse_pro:{
    color:'#000',
    fontSize:13,
    textTransform:'uppercase',
    backgroundColor:'#fff',
    paddingVertical:10,
    textAlign:'center',
    borderRadius:10,
    fontWeight:'500'
},
browse_touch:{marginRight:25,marginTop:25,},
browse_pro2:{
    color:'#000',
    fontSize:13,
   marginHorizontal:10,
    backgroundColor:'#fff',
    paddingVertical:5,
    textAlign:'center',
    borderRadius:5,
    fontWeight:SIZES.regular,
    textTransform:'capitalize'
},
swipbox:{marginRight:20,alignItems:'center'},
swipcircle:{height:58,width:58,overflow:'hidden',borderRadius:100/2,borderColor:'#cff2f3',borderWidth:2,margin:'auto'},
swiptitle:{fontWeight:SIZES.light,color:'#000',textAlign:'center',fontSize:11},
  
})