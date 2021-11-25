import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl,Imgurl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';
import {Picker} from '@react-native-community/picker';


const Enquery = ({ navigation }) => {

const [loading, setLoading] = useState(false);
const [isSelected, setSelection] = useState(false);
const [selectedValue, setSelectedValue] = useState("");
const [first_name, setfirst_name] = useState("");
const [last_name, setlast_name] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");
const [city, setcity] = useState("");
const [token, settoken] = useState("");
const [categorylist, setcategorylist] = useState([]);
    let content1 = [];

const ref1 = createRef();
const ref2 = createRef();
const ref3 = createRef();
const ref4 = createRef();
const ref5 = createRef();
const ref6 = createRef();

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
    fetch(Hosturl.api+'get-category?user_id=1', {
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
         console.log(responseJson);
          
           if (responseJson.status) {
             setcategorylist(responseJson.response_data);
            // setcategorylist([...categorylist, responseJson.response_data]);
          
        
           } 
         
        })
        .catch((error) => {
 
        });
    }
});

const postForm=(async () => {
   
if (!first_name) {
    alert('Please enter first name');
    return;
  }
  if (!last_name) {
    alert('Please enter last name');
    return;
  }
  if (!email) {
    alert('Please enter email');
    return;
  }
  if (!phone) {
    alert('Please enter phone');
    return;
  }
  if (!city) {
    alert('Please enter city');
    return;
  }

  setLoading(true);
      

fetch(Hosturl.api+'enquiryform', {
  method: 'POST',
  body: JSON.stringify({
    first_name: first_name,
    last_name:last_name,
    phone:phone,
    email:email,
    city:city,
    category:selectedValue,
    type:'mall'
   
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
    setLoading(false);
    console.log(responseJson);
    
     if (responseJson.status) {
        Alert.alert('Data successfully submitted');
        setfirst_name("");
        setlast_name("");
        setphone("");
        setemail("");
        setcity("");
       // setselectedValue("");
        
 
     } 
    else {
 
   Alert.alert(responseJson.msg);
     }
  })
  .catch((error) => {
    //Hide Loader
    setLoading(false);
   // console.error(error);
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
              <View style={styles.container}>
              <ScrollView  contentContainerStyle={{
         
         justifyContent: 'center',
         alignContent: 'center',
       }}
       keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
      >
            <View style={styles.profile_icon}>
                <View style={styles.imgbox}>
                <Image source={require("../assets/images/enqueryimg.png")} />
                </View>
          
                  
              </View>
              <View style={{marginBottom:30,}}>
               <Text style={{color:'#000',fontSize:22,fontWeight:'700',textAlign:'center'}}>Register Now <Text style={{color:'#0ba7ad'}}>to Apply</Text></Text>
           <Text style={{color:'#000000',fontSize:14,textAlign:'center'}}>How to CSGlobal Mall helps you in Shopping?</Text>
           </View>
          
        <View style={styles.formbox}>
        
        <KeyboardAvoidingView enabled>
        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Your First Name</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#000" 
                            onChangeText={(first_name) =>
                                setfirst_name(first_name)
                              }
                             
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              onSubmitEditing={() =>
                                ref2.current &&
                                ref2.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              value={first_name}
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Your Last Name</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#000" 
                            onChangeText={(last_name) =>
                                setlast_name(last_name)
                              }
                              ref={ref2}
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              onSubmitEditing={() =>
                                ref3.current &&
                                ref3.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              value={last_name}
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Your Email</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#000" 
                            onChangeText={(email) =>
                                setemail(email)
                              }
                             
                              autoCapitalize="none"
                              keyboardType="email-address"
                              returnKeyType="next"
                              ref={ref3}
                              onSubmitEditing={() =>
                                ref4.current &&
                                ref4.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              value={email}
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Your Phone</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            placeholderTextColor="#000" 
                            onChangeText={(phone) =>
                                setphone(phone)
                              }
                             
                              autoCapitalize="none"
                              keyboardType="numeric"
                              returnKeyType="next"
                              ref={ref4}
                              onSubmitEditing={() =>
                                ref5.current &&
                                ref5.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              maxLength={10}
                              value={phone}
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>City You Live In</Text>
            </View>
            
            <TextInput
                            style={styles.input}
                            placeholder="City"
                            placeholderTextColor="#000" 
                            onChangeText={(city) =>
                                setcity(city)
                              }
                             
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={ref5}
                              onSubmitEditing={() =>
                                ref6.current &&
                                ref6.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              value={city}
                             
                        />
      
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Shop Categories</Text>
            </View>
            <View  style={styles.input}>
              <Picker 
             
        selectedValue={selectedValue}
        style={{ height: 52, width: '100%', borderWidth: 1,
        borderColor:'#a9a9a9',}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label="Select category" value="" />
       {categorylist.map((value, index) => (
        <Picker.Item label={value.name} value="{value.name}" />
        ))}
      </Picker>
      </View>
        </View>
   
        <TouchableOpacity  onPress={postForm} style={styles.flexthreeTouchtwo}>
            <Text style={styles.flexthreeTouchtext} >submit now</Text>
        </TouchableOpacity>
        
        </KeyboardAvoidingView>
       
        </View>
        </ScrollView>
            </View>

              </View>
              
             
          
        </View>
    );
};

export default Enquery;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#11bbc2',
        position:'relative'
        
    },
   
    profile_body: {
       
       position:'absolute',
       backgroundColor:'#fff',
       bottom:0,
       left:0,
       width:'100%',
       height:'85%',
       borderTopRightRadius:70,
       
       paddingVertical:20
    },

    input: {
        height: 52,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#a9a9a9',
        paddingHorizontal: SIZES.padding,
        fontSize: 15,
        borderRadius:5,
        backgroundColor:'#fff',
        color:'#000',
        paddingLeft:10
        
    },
    container:{
        paddingHorizontal:20,
        
       
    },
    imgbox:{
        width:146,
        height:122
    },
    profile_icon:{
        
        alignSelf:'center',
       
        margin:'auto',
        position:'relative',
        marginBottom:15
    },
    profile_penicon:{
    position:'absolute',
    bottom:10,
    right:0,
    
    },
    formbox:{
     
    },
    formfield:{
        position:'relative',
        marginBottom:5
    },
    label:{
    position:'absolute',
    top:-10,
    left:10,
    zIndex:1,
    backgroundColor:'#fff',
    paddingHorizontal:2
    },
    label_text:{color:'#6f6f6f',fontSize:15},
    flexthreeTouchtext:{color:COLORS.white,textAlign:'center',
    textTransform:'uppercase',fontSize:16,fontWeight:'700',
    paddingVertical:15,
},
    flexthreeTouchtwo:{borderColor:COLORS.cyan,borderWidth:1,
        backgroundColor:COLORS.white,
        height:52,backgroundColor:'#11bbc2',
        borderRadius:5,
        marginBottom:10
    },
        flexthreeTouch:{borderColor:'#6f6f6f',borderWidth:1,
           
            height:52,backgroundColor:'#fff',
            borderRadius:5},
            Touchtext:{color:'#6f6f6f',textAlign:'center',
            textTransform:'uppercase',fontSize:16,fontWeight:'700',
            paddingVertical:15,
        },
  
})