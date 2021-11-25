import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';
import { useNavigation } from '@react-navigation/native';

const EcommorceCollection = ({route, navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [token, settoken] = useState("");
    const { vendorId } = route.params?.vendorId ?? 0;

    useEffect(async () => {
   
        //console.log(1);
       const unsubscribe = navigation.addListener('focus', () => {
           demo();
         
         });
         return unsubscribe;
 
    
    });
    const demo=(async () => {
        const tokn =await  AsyncStorage.getItem('token');
        if (tokn !== null) {
            //console.log(tokn);
            //this.setState({ token:tokn }) 
            settoken(tokn);
           
        }
    });
    if(JSON.stringify(vendorId) && token){
//console.log(123);
fetch(Hosturl.api+'get-product?vendor_id='+JSON.stringify(vendorId), {
    method: 'GET',
    
    headers: {
      //Header Defination
      'Accept': 'application/json',
      'Content-Type':'application/json',
      'Authorization' :  'Bearer  '+token
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader
      //setLoading(false);
     // console.log(responseJson);
      
       if (responseJson.status) {
        // setcategorylist(responseJson.response_data);
        // setcategorylist([...categorylist, responseJson.response_data]);
        // for (let userObject of responseJson.response_data) {
        //  content1.push(responseJson.response_data);
          
        // }
    
       } 
     
    })
    .catch((error) => {

    });
    }
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <View style={styles.profile_body}>
          <ScrollView  showsVerticalScrollIndicator={false}>
            <View >
                <View style={styles.fashionbox}>
                <Image style={styles.img} source={require("../assets/images/ecom1.png")} />
                <View style={styles.fashiontextbox}>
            <Text style={{fontSize:16}}>
            30 - 40% off on
            </Text>
            <Text style={styles.fashiontitle}>fashion {"\n"}Collection</Text>
            <Text style={{fontSize:18}}>Huge savings on high {"\n"}street fashion</Text>
                    </View>
                </View>

          
        <View style={{marginTop:20}}>
<Text style={styles.discounttitle}>Latest fashion  {JSON.stringify(vendorId)}</Text>
</View>
        
        <View style={{marginTop:10,flexDirection:'row',}}>

<ScrollView horizontal={true}>
<View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimg} source={require("../assets/images/ecom2.png")} />
</View>
<View style={styles.ltboxtitle}>
    <Text style={styles.ltfashiontext}>Fashion</Text>
    <Text style={{fontSize:12}}>Your shop is a place to sell and share.</Text>
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
    <Text style={{fontSize:12}}>Your shop is a place to sell and share.</Text>
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
    <Text style={{fontSize:12}}>Your shop is a place to sell and share.</Text>
</View>
</TouchableOpacity>
    </View>
</ScrollView>



        </View>
   


      
       <View style={{marginTop:30}}>
     <Text style={styles.cattitle}>Categories</Text>
       <View style={styles.catbox}>
 
           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <View style={styles.catimgbox}>
            <Image style={styles.catimage} source={require("../assets/images/cat1.png")} />
            </View>
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/fashioncat.png")} />
            <Text style={styles.catboxtext}>Fashion</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>
           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <View style={styles.catimgbox}>
            <Image style={styles.catimage} source={require("../assets/images/cat1.png")} />
            </View>
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/appliance.png")} />
            <Text style={styles.catboxtext}>Appliance</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>
          

           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <View style={styles.catimgbox}>
            <Image style={styles.catimage} source={require("../assets/images/cat1.png")} />
            </View>
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/neclace.png")} />
            <Text style={styles.catboxtext}>Jewellery</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>


           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <View style={styles.catimgbox}>
            <Image style={styles.catimage} source={require("../assets/images/cat1.png")} />
            </View>
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/furniture.png")} />
            <Text style={styles.catboxtext}>furniture</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>

           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <View style={styles.catimgbox}>
            <Image style={styles.catimage} source={require("../assets/images/cat1.png")} />
            </View>
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/cosmetic.png")} />
            <Text style={styles.catboxtext}>cosmetic</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>

           
           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <View style={styles.catimgbox}>
            <Image style={styles.catimage} source={require("../assets/images/cat1.png")} />
            </View>
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/consulting.png")} />
            <Text style={styles.catboxtext}>consulting</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>

           
       </View>
   
     
   

            </View>
         




            </View>
            </ScrollView>
              </View>
           
          
        </View>
    );
};

export default EcommorceCollection;

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
       paddingTop:20
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
    
    height:178,
  
},
fashiontextbox:{position:'absolute',top:25,bottom:0,left:15},
fashiontitle:{fontSize:28,fontWeight:'700',textTransform:'uppercase',},
latestfashionbox:{width:140,marginRight:10,},
ltboxtitle:{marginLeft:10,marginRight:15},
ltfashiontext:{fontSize:16,color:'#000',fontWeight:'300'},
fashionimg:{resizeMode:'cover',borderRadius:10},
catbox:{marginBottom:15,flexDirection: "row",
flexWrap: "wrap",},
catimgbox:{height:160,width:100,},
catimage:{width:'100%',resizeMode:'cover',borderTopRightRadius:25,
borderBottomLeftRadius:25,borderRadius:5},
catleftbox:{marginRight:'1.3%',alignItems:'center',justifyContent:'center'
,width:'32%',marginBottom:10
             
},
'catleftbox:nth-of-type(3n)':{
    marginRight:0,
},
catrightbox:{borderWidth:1,alignItems:'center',justifyContent:'center',
flex:1,borderColor:'#c9c9c9',height:213,borderRadius:10,
borderTopRightRadius:50,borderBottomLeftRadius:50},
catboxtext:{marginTop:20,textTransform:'uppercase',fontSize:14,
fontWeight:SIZES.regular,textAlign:'center',marginBottom:20,color:'#fff'},
catboxcenter:{alignItems:'center',position:'relative'},
cattitle:{fontSize:16,fontWeight:'700',textTransform:'uppercase',color:'#000',marginBottom:15},
catfashionpos:{position:'absolute',justifyContent:'center',alignItems:'center',marginTop:30},
  
})