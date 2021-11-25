import React, { useState ,createRef,useContext}  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight 
    ,TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
import { COLORS, SIZES, FONTS,Hosturl } from '../constants/theme'
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon';
import { Checkbox } from 'react-native-paper';
import Loader from '../component/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import{ AuthContext } from '../component/context';

const Login = ({ navigation }) => {
  const signIn  = useContext(AuthContext);
 // const [authContext, setAuthContext] = useContext(AuthContext);
    const [checked, setChecked] = React.useState(false);
    const [isSelected, setSelection] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();
  const userObjectContext = {
    name: "John Snow",
    email: "john.snow@thewall.north",
    status: "Winter is coming",
  }
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please enter email');
      return;
    }
    if (!userPassword) {
      alert('Please enter password');
      return;
    }
    setLoading(true);
    // let dataToSend = {email: userEmail, password: userPassword};
    // let formBody = [];
    // for (let key in dataToSend) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

   fetch(Hosturl.api+'login', {
      method: 'POST',
      body: JSON.stringify({
       email: userEmail,
       password: userPassword,
      }),
      headers: {
        //Header Defination
       
        'Content-Type':'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
      // console.log(responseJson.cart_count);
        
        if (responseJson.status) {
          AsyncStorage.setItem('token', responseJson.api_token);
          AsyncStorage.setItem('user_details', JSON.stringify(responseJson.response_data));
          AsyncStorage.setItem('user_id', JSON.stringify(responseJson.response_data.id));
          //console.log(responseJson);
          navigation.navigate('Home');
        } else {
          setErrortext(responseJson.msg);
          //console.log('Please check your email id or password');
          alert('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
            <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}>
            <Loader loading={loading} />
            <ScrollView style={{ marginTop:110}} contentContainerStyle={{
         
          justifyContent: 'center',
          alignContent: 'center',
        }}
        keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
       >
              <View style={styles.formstart}>
              <View >
            <View style={styles.formInner}>
            <View style={styles.imgbox}>
                        <Image style={styles.boximg} source={require("../assets/images/usericon.png")} />

                    </View>
                    <View>
                        <Text style={styles.boxtitle}>login  </Text>
                    </View>
              </View>

             
        <View>
          <KeyboardAvoidingView enabled>
              <View style={{paddingHorizontal:20,paddingBottom:20}}>
                    <View style={{position:'relative'}}>
                       <View style={styles.inputIcon}>
                      
                       <Image source={require("../assets/images/uicon.png")} />

                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#ffffff" 
                            onChangeText={(UserEmail) =>
                                setUserEmail(UserEmail)
                              }
                             
                              autoCapitalize="none"
                              keyboardType="email-address"
                              returnKeyType="next"
                              onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                        />
                        </View>
                        <View style={{position:'relative'}}>
                       <View style={styles.inputIcon}>
                      
                       <Image source={require("../assets/images/lockicon.png")} />

                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#ffffff" 
                            onChangeText={(UserPassword) =>
                                setUserPassword(UserPassword)
                              }
                             
                              keyboardType="default"
                              ref={passwordInputRef}
                              onSubmitEditing={Keyboard.dismiss}
                              blurOnSubmit={false}
                              secureTextEntry={true}
                              underlineColorAndroid="#f000"
                              returnKeyType="next"
                        />
                        
                        </View>

                        <View style={{position:'relative',marginLeft:-5}}> 
                    <Text style={{fontSize:15,color:'#ffffff',}}><Checkbox uncheckedColor='white' color='white'
      status={checked ? 'checked' : 'unchecked'}
onPress={() => {
        setChecked(!checked);
      }}
    /> </Text>
    <Text style={{position:'absolute',top:6,left:40,fontSize:15,color:'#ffffff',}}>Remember this Account</Text>
                                </View>

                        
                       </View>


            <View style={styles.loginbtn}>
              <TouchableOpacity style={styles.logintouch}  onPress={handleSubmitPress}>
           
            <Image style={{alignSelf:'center'}} source={require("../assets/images/logbtn.png")} />
        </TouchableOpacity>    
                        </View>


                        </KeyboardAvoidingView>
            </View>
           
            </View>


              </View>
             
                        <View style={styles.loginbelow}>
                            <View style={styles.forgotbtn}>
                            <TouchableOpacity style={styles.forgottouch} onPress={() => navigation.navigate('Forgotpassword')}>
           
            
            <Text style={styles.forgottext}>
                <Image  source={require("../assets/images/forgotkey.png")} />   Forgot password?</Text>
        </TouchableOpacity>
                            </View>
                            
                            <View style={{paddingTop:5}}>
                            <TouchableOpacity style={{width:'100%',}} onPress={() => navigation.navigate('Registration')}>
           
            
            <Text style={styles.regtext}>
                <Image  source={require("../assets/images/logregicon.png")} />   Register</Text>
        </TouchableOpacity>
                            </View>
                        </View>
                        </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
    },
   
    main: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

        width: '100%',
        height: '100%',
      
        
    },
    input: {
        height: 58,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#5bc3c8',
        paddingHorizontal: SIZES.padding,
        fontSize: 15,
        borderRadius:5,
        backgroundColor:'#5bc3c8',
        color:'#ffffff',
        paddingLeft:40
        
    },
    loginCon: {
        //   borderWidth: 1,
        padding: SIZES.body4,
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.cilver,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,
        // opacity: .90
    },
    loginLabel: {
        fontSize: SIZES.h2,
        paddingBottom: SIZES.padding2,
        color: COLORS.cyan,
        fontWeight: 'bold'
    },
      formstart:{backgroundColor:'#34bbc1',position:'relative',zIndex:2,borderTopRightRadius:60,borderBottomLeftRadius:60,
    marginTop:90,marginBottom:0
},
    formInner:{alignItems:'center',marginBottom:24,marginTop:-50},
    imgbox:{width:94,height:94,marginBottom:10},
    boximg:{width:'100%',height:'100%',resizeMode:'cover'},
    boxtitle:{color:'#fff',textTransform:'uppercase',fontSize:18},
    inputIcon:{position:'absolute',top:18,left:12,zIndex:1},
    loginbtn:{alignItems:'center',position:'relative',zIndex:2},
    logintouch:{backgroundColor:'#fff',width:'100%',padding:20,borderBottomLeftRadius:60,},
    loginbelow:{paddingHorizontal:20,position:'relative',zIndex:2,paddingTop:24},
    forgotbtn:{borderBottomWidth:1,borderBottomColor:'#52c7cb'},
    forgottouch:{width:'100%',marginBottom:10},
    forgottext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
    regtext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
  
  
})