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
const Contactus = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");
    const [token, settoken] = useState("");
    
    const ref1 = createRef();
    const ref2 = createRef();
    const ref3 = createRef();
    const ref4 = createRef();
    const ref5 = createRef();

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
      if (!message) {
        alert('Please enter message');
        return;
      }
   
      setLoading(true);
          

   fetch(Hosturl.api+'contactform', {
      method: 'POST',
      body: JSON.stringify({
        first_name: first_name,
        last_name:last_name,
        phone:phone,
        email:email,
        message:message,
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
        //console.log(responseJson);
        setfirst_name("");
        setlast_name("");
        setphone("");
        setemail("");
        setmessage("");
         if (responseJson.status) {
        
            Alert.alert('Data successfully submitted');
     
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
          <ScrollView   contentContainerStyle={{
        flex:1
         
       }}  
       keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
      >
            
              <View style={styles.profile_body}>
         
            
              <View style={styles.container}>
              <KeyboardAvoidingView enabled>
        <View style={styles.formbox}>
       
        
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
        <Text style={styles.label_text}>Message</Text>
            </View>
        <TextInput
        multiline={true}
        numberOfLines={4}
                            style={[styles.input,{height:100}]}
                            placeholder="Type Text"
                            placeholderTextColor="#000" 
                            onChangeText={(message) =>
                                setmessage(message)
                              }
                             
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={ref5}
                              onSubmitEditing={Keyboard.dismiss}
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              value={message}
                        />
              
        </View>


   
        <TouchableOpacity onPress={postForm} style={styles.flexthreeTouchtwo}>
            <Text style={styles.flexthreeTouchtext} >Send</Text>
        </TouchableOpacity>
        
        
        
        </View>
        </KeyboardAvoidingView>
            </View>
            
              </View>
              </ScrollView>
          
          
        </View>
    );
};

export default Contactus;

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
        marginTop:40
       
    },
    profile_icon:{
        
        alignSelf:'center',
        width:134,
        height:134,
        margin:'auto',
        position:'relative',
        marginBottom:20
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