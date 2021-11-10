import React,{ useState ,createRef} from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image 
    ,TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
import { COLORS, SIZES, FONTS,Hosturl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/FontAwesome';
import BottonCommon from '../component/BottonCommon';
import {Picker} from '@react-native-community/picker';
import { Checkbox } from 'react-native-paper';
import Loader from '../component/Loader';

const Registration = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const phoneInputRef = createRef();
 
  
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userName) {
        alert('Please enter name');
        return;
      }
    if (!userEmail) {
      alert('Please enter email');
      return;
    }
    if (!userPassword) {
      alert('Please enter password');
      return;
    }
    if (!userPhone) {
        alert('Please enter phone no');
        return;
      }
      if (!checked) {
        alert('Please agree terms & conditions');
        return;
      }
    setLoading(true);
    let dataToSend = {name: userName,email: userEmail, password: userPassword, password_confirmation: userPassword,phone_number:userPhone};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

   fetch(Hosturl.api+'register', {
      method: 'POST',
      body: JSON.stringify({
        name: userName,email: userEmail, password: userPassword, 
        password_confirmation: userPassword,phone_number:userPhone
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
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status) {
         // AsyncStorage.setItem('user_id', responseJson.user_id);
         alert('Thankyou for your registration');
          navigation.navigate('Login');
        } else {
          setErrortext(responseJson.msg);
          //console.log('Please check your email id or password');
          alert(''+responseJson.message);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        //console.error(error);
        alert('Server error');
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
            <ScrollView style={{marginTop:65}}
        keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
       >
        
              <View style={styles.formstart}>
              <View >
            <View style={styles.formInner}>
            <View style={styles.imgbox}>
                        <Image style={styles.boximg} source={require("../assets/images/usericon.png")} />

                    </View>
                    <View>
                        <Text style={styles.boxtitle}>Register </Text>
                    </View>
              </View>
          
          <KeyboardAvoidingView enabled>
            <View style={{position:'relative',paddingHorizontal:20,}}>
                    <View >
                       <View style={styles.inputIcon}>
                      
                       <Image source={require("../assets/images/uicon.png")} />

                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            placeholderTextColor="#ffffff" 
                            onChangeText={(UserName) =>
                                setUserName(UserName)
                              }
                             
                              autoCapitalize="none"
                             
                              returnKeyType="next"
                              onSubmitEditing={() =>
                                emailInputRef.current &&
                                emailInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                        />
                        </View>
                        <View >
                       <View style={styles.inputIcon}>
                       
                       <Image source={require("../assets/images/emailicon.png")} />

                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#ffffff" 
                            onChangeText={(UserEmail) =>
                                setUserEmail(UserEmail)
                              }
                              ref={emailInputRef}
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
                        
                        <View >
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
                             
                              secureTextEntry={true}
                              ref={passwordInputRef}
                              onSubmitEditing={() =>
                                phoneInputRef.current &&
                                phoneInputRef.current.focus()
                              }
                              blurOnSubmit={false}
                              secureTextEntry={true}
                              underlineColorAndroid="#f000"
                              returnKeyType="next"
                        />
                        
                        </View>

                        <View style={{justifyContent:'space-between',flexDirection:'row',}}>
                            <View style={{flex:2,paddingRight:10}}>
                       <View style={styles.inputIcon}>
                      
                       <Image source={require("../assets/images/phoneicon.png")} />

                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            placeholderTextColor="#ffffff" 
                            onChangeText={(UserPhone) =>
                                setUserPhone(UserPhone)
                              }
                             
                              keyboardType="numeric"
                              ref={phoneInputRef}
                              onSubmitEditing={Keyboard.dismiss}
                              blurOnSubmit={false}
                             
                              underlineColorAndroid="#f000"
                              returnKeyType="next"
                              maxLength={10}
                        />
                </View>
                <View style={{flex:1.5}}>
                       
                      
                         <View  style={styles.input2}>
              <Picker 
              mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 58, width: '100%',color:'#ffffff',}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Country" value="java" />
        {/* <Picker.Item label="JavaScript" value="js" /> */}
      </Picker>
      </View>
                        </View>
                        </View>
                        <View style={{position:'relative',marginLeft:-5,paddingBottom:5}}> 
                    <Text style={{fontSize:15,color:'#ffffff',}}><Checkbox uncheckedColor='white' color='white'
      status={checked ? 'checked' : 'unchecked'}
onPress={() => {
        setChecked(!checked);
      }}
    /> </Text>
    <Text style={{position:'absolute',top:6,left:40,fontSize:15,color:'#ffffff',}}>Agree to Terms & Conditions</Text>
                                </View>
                                {/* <View>
                                    <Text style={{fontSize:15,color:'#ffffff',paddingTop:5,paddingBottom:20}}>Agree to Terms & Conditions</Text>
                                </View> */}

            </View>

            </KeyboardAvoidingView>
           
            </View>


            <View style={styles.loginbtn}>
              <TouchableOpacity style={styles.logintouch} onPress={handleSubmitPress}>
           
            <Image style={{alignSelf:'center'}} source={require("../assets/images/logbtn.png")} />
        </TouchableOpacity>    
                        </View>


              </View>
              
                        <View style={styles.loginbelow}>
                            <View style={styles.forgotbtn}>
                            <TouchableOpacity style={styles.forgottouch}  onPress={() => navigation.navigate('Login')}>
           
            
            <Text style={styles.forgottext}>
                 Already have an account? Login</Text>
        </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                        </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Registration;

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
    input2: {
        height: 58,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#5bc3c8',
        paddingHorizontal: SIZES.padding,
        fontSize: 15,
        borderRadius:5,
        backgroundColor:'#5bc3c8',
        color:'#ffffff',
        paddingLeft:10
        
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
    marginTop:100,marginBottom:0
},
formInner:{alignItems:'center',marginBottom:24,marginTop:-50},
    imgbox:{width:94,height:94,marginBottom:0},
    boximg:{width:'100%',height:'100%',resizeMode:'cover'},
    boxtitle:{color:'#fff',textTransform:'uppercase',fontSize:18},
    inputIcon:{position:'absolute',top:18,left:12,zIndex:1},
    loginbtn:{alignItems:'center',position:'relative',zIndex:2},
    logintouch:{backgroundColor:'#fff',width:'100%',padding:18,borderBottomLeftRadius:60,},
    loginbelow:{paddingHorizontal:20,position:'relative',zIndex:2,marginTop:20},
    forgotbtn:{},
    forgottouch:{width:'100%',marginBottom:0},
    forgottext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
    regtext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
  
  
})