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

const Aboutus = ({ navigation }) => {
    const [token, settoken] = useState("");
    const [bodydesc, setbodydesc] = useState("");
    const [title, settitle] = useState("");
    const [img, setimg] = useState("");
    const [imgpath, setpath] = useState(Imgurl.path);
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
        if(tokn){
    fetch(Hosturl.api+'get-page', {
        method: 'POST',
        body: JSON.stringify({
          slug: 'about-us',
          vendor_id:1
         
        }),
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
          //console.log(responseJson.extra_data.count);
          
           if (responseJson.status) {
            for (let userObject of responseJson.extra_data.type2) {
                // if(userObject.type==2){
                    
                // }
              let tl=  userObject.title.replace( /(<([^>]+)>)/ig, '');
              let dbody=  userObject.body.replace( /(<([^>]+)>)/gi, '');
                setbodydesc(dbody);
                settitle(tl);
                setimg(imgpath + userObject.image);

               // console.log(userObject.body+'amb');
            }
        
           } 
         
        })
        .catch((error) => {

        });
    }
    });
    const gotoCategories=(async () => {
    navigation.navigate('Categories');
});
const gotoCollection=(async () => {
    navigation.navigate('EcommorceCollection');
});
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <View style={styles.profile_body}>
          <ScrollView showsVerticalScrollIndicator={false}  >
            <View >
                <View style={styles.imgbox}>
                {/* <Image style={styles.img} source={{uri: img }} /> */}
                <Image style={styles.img} source={require("../assets/images/about2.png")} />
                </View>

               
            <View style={styles.textbox}>
                <Text style={styles.text_title}>{title}</Text>
                <Text style={styles.textdesc}>{bodydesc}</Text>
            </View>
                <View style={styles.imgsection}> 
                <View style={[styles.imgsectionone,{marginRight:10,}]}> 
               <TouchableOpacity onPress={gotoCategories}>
                <Image style={[styles.img,{borderRadius:10}]} source={require("../assets/images/about3.png")} />
                </TouchableOpacity>
                <View style={styles.imgtitle}><Text style={styles.imgtitletext}>Choose our Best Product</Text></View>
                       </View>
                       <View style={styles.imgsectionone}> 
                       <TouchableOpacity onPress={gotoCollection}>
                       <Image style={[styles.img,{borderRadius:10}]} source={require("../assets/images/about3.png")} />
                       </TouchableOpacity>
                       <View style={styles.imgtitle}><Text style={styles.imgtitletext}>Choose our Verified Products</Text></View>
                       </View>      
        </View>
        <View style={{marginTop:20}}>
<Text style={styles.discounttitle}>Get <Text style={{color:'#11bbc2'}}>Discount offer</Text></Text>
</View>
        
        <View style={{marginTop:20,flexDirection:'row',zIndex:11}}>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.imgdiscount}> 
<Image style={{resizeMode:'cover',borderRadius:10}} source={require("../assets/images/about4.png")} />
    </View>
 
    <View style={styles.imgdiscount}> 
<Image style={{resizeMode:'cover',borderRadius:10}} source={require("../assets/images/about4.png")} />
    </View>
    <View style={styles.imgdiscount}> 
<Image style={{resizeMode:'cover',borderRadius:10}} source={require("../assets/images/about4.png")} />
    </View>
</ScrollView>



        </View>
   


            </View>
            </ScrollView>
              </View>
           
          
        </View>
    );
};

export default Aboutus;

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
fontSize:20,
fontWeight:'400',
paddingVertical:8
},
imgdiscount:{
    marginRight:10,
    height:185,
  
}

  
})