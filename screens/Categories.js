import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';

const Categories = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [token, settoken] = useState("");
    const [categorylist, setcategorylist] = useState([]);
    let content1 = [];
    useEffect(async () => {
   
       // console.log(1);
       const unsubscribe = navigation.addListener('focus', () => {
           demo();
         
         });
         return unsubscribe;
 
    
    });
   const demo=(async () => {
       if(!categorylist){
       // setLoading(true);
       }
    
       const tokn =await  AsyncStorage.getItem('token');
       if (tokn !== null) {
           console.log(tokn);
           //this.setState({ token:tokn }) 
           settoken(tokn);
          
       }
       if(tokn){
       }
   fetch(Hosturl.api+'get-shoptype', {
       method: 'POST',
       body: JSON.stringify({
         slug: '',
        
        
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
         setLoading(false);
        // console.log(responseJson.response_data);
         
          if (responseJson.status) {
            setcategorylist(responseJson.response_data);
           // setcategorylist([...categorylist, responseJson.response_data]);
           for (let userObject of responseJson.response_data) {
            content1.push(responseJson.response_data);
               // if(userObject.type==2){
                   
               // }
            // let tl=  userObject.title.replace( /(<([^>]+)>)/ig, '');
             //let dbody=  userObject.body.replace( /(<([^>]+)>)/gi, '');
               //setbodydesc(dbody);
               //settitle(tl);
              // setimg(imgpath + userObject.image);

              // console.log(userObject.body+'amb');
           }
       
          } 
        
       })
       .catch((error) => {

       });
   
   });
   function gotoCategories() {
   navigation.navigate('EcommorceCollection', {
    vendorId: 86,
    
  });
};

    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          <Loader loading={loading} />
          <View style={styles.profile_body}>
          
     
               <View style={styles.sort_refine}>
                   <View style={styles.sort_refinebox}>
                       <Text style={styles.sorttext}>
                           <Image  source={require("../assets/images/sorticon.png")} />   Sort</Text>
                   </View>
                   <View style={styles.sort_refinebox}>

                   <Text style={styles.sorttext}>
                       <Image  source={require("../assets/images/refineicon.png")} />   Refine</Text>
                   </View>
               
                   </View>
                   <ScrollView  showsVerticalScrollIndicator={false}>
       <View>
     

       
    
       <View style={styles.catbox}>

       {categorylist.map((value, index) => (
           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection', {
    vendorId: value.id,

  })}>
            <View style={styles.catboxcenter}>
                <View style={styles.catimgbox}>
            <Image  source={{
    uri: Imgurl.path+value.image,
   
  }} style={styles.img}/>
  </View>
            <Text style={styles.catboxtext}>{value.name}</Text>
            <Image  source={require("../assets/images/doublearrowicon.png")} />
            </View>
            </TouchableOpacity>
           </View>
           
           ))}

           

       </View>

 

            </View>
            </ScrollView>
            </View>
           
          
        </View>
    );
};

export default Categories;

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
    catimgbox:{width:46,height:46},
imgbox:{
    height:186,alignItems:'center'
},
img:{width:'100%',height:'100%',resizeMode:'cover'},
sort_refine:{flexDirection:'row',alignItems:'center',marginBottom:15},
sort_refinebox:{flex:1,borderWidth:0.5},
sorttext:{textAlign:'center',paddingVertical:10,fontSize:16,color:'#000'},
catbox:{flexDirection:'row',flexWrap:'wrap',marginBottom:15,},
catleftbox:{width:'45%',marginRight:'5%',borderWidth:1,alignItems:'center',justifyContent:'center',
borderColor:'#c9c9c9',height:213,borderRadius:10,borderTopRightRadius:50,
borderBottomLeftRadius:50,marginBottom:20
             
},
'catleftbox:last-child':{ 
    marginRight:0, 
},
catrightbox:{borderWidth:1,alignItems:'center',justifyContent:'center',
flex:1,borderColor:'#c9c9c9',height:213,borderRadius:10,
borderTopRightRadius:50,borderBottomLeftRadius:50},
catboxtext:{marginTop:10,textTransform:'uppercase',fontSize:18,
fontWeight:'500',textAlign:'center',marginBottom:20},
catboxcenter:{alignItems:'center'},


  
})