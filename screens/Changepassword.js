import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';

//import {Changepassword} from '../screens/Changepassword';
class Changepassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:'',
          loading: false,
          value: true,
          visible: false,
          userId: 0,
          name: '',
          email:'',
          phone:'',
          photo:'',
          old_password:'',
          password:'',
          password_confirmation:'',

         
        };
      }
      async  componentDidMount()
      {
       // let userId = this.props.route.params.userId; 
        //this.setState({ userId:userId }) 
       
        const tokn =await  AsyncStorage.getItem('token');
        if (tokn !== null) {
            //console.log(tokn);
            this.setState({ token:tokn }) 
           
        }
        const value = await AsyncStorage.getItem('user_id');
    if (value !== null) {
        this.setState({ userId:value }) 
       //console.log(value);
       //setuserid(value);
    }else{
        this.props.navigation.navigate('Home');
    }
    if(this.state.userId && this.state.token){
       // this.getProfile();
    }
      }

      postPassword (){
      // console.log(11);
        if (!this.state.old_password ) {
            alert('Please enter old password');
            return;
          }
          if (!this.state.password) {
            alert('Please enter password');
            return;
          }
          if (!this.state.password_confirmation) {
            alert('Please enter confirm password');
            return;
          }
          if (this.state.password !=this.state.password_confirmation) {
            alert('Password and confirm password not matched');
            return;
          }
          this.setState({ loading:true });
              
    
       fetch(Hosturl.api+'update-password', {
          method: 'POST',
          body: JSON.stringify({
            user_id: this.state.userId,
            old_password:this.state.old_password,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation
           
          }),
          headers: {
            //Header Defination
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization' :  'Bearer  '+this.state.token
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            this.setState({ loading:false });
            //console.log(responseJson);
            
             if (responseJson.status) {
                this.setState({ old_password:'' });
                this.setState({ password:'' });
                this.setState({ password_confirmation:''}) 
                Alert.alert('Password successfully change');
            //   //console.log(responseJson);
           // setuserdata(responseJson.response_data)
             } 
            else {
            if(responseJson.response_data!=null){
                Alert.alert(responseJson.response_data.password[0]); 
            }else{
                Alert.alert('Something went wrong, please try again');
            }
           
           //Alert.alert('Something went wrong, please try again');
             }
          })
          .catch((error) => {
            //Hide Loader
            this.setState({ loading:false });
           // console.error(error);
          });
      }
      render() {
        // const navigation = useNavigation();
         const nameInputRef1 = createRef();
         const nameInputRef2 = createRef();
         const nameInputRef3 = createRef();
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor="transparent"
            translucent={true}
        />
          <Loader loading={this.state.loading} />
        <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}>
       
          <View style={styles.formstart}>
          <ScrollView style={{marginBottom:20}} contentContainerStyle={{
        
        justifyContent: 'center',
        alignContent: 'center',
      }}
      keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
     >
         
          <View >
        <View style={styles.formInner}>
        <View style={styles.imgbox}>
                    <Image style={styles.boximg} source={require("../assets/images/keycircle.png")} />

                </View>
                <View style={{alignItems:'center'}}> 
                    <Text style={styles.boxtitle}>Change Password </Text>
                    
                </View>
          </View>

        <View >
                <View >
                   <View style={styles.inputIcon}>
                   
                   <Image source={require("../assets/images/lockicon.png")} />

                       </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Old Password"
                        placeholderTextColor="#ffffff" 
                        onChangeText={(old_password) =>
                            this.setState({old_password})
                          }
                         
                          keyboardType="default"
                          
                          onSubmitEditing={() =>
                            nameInputRef1.current &&
                            nameInputRef1.current.focus()
                          }
                          blurOnSubmit={false}
                          secureTextEntry={true}
                          underlineColorAndroid="#f000"
                          returnKeyType="next"
                    />
                    </View>
                    <View >
                   <View style={styles.inputIcon}>
                   
                   <Image source={require("../assets/images/lockicon.png")} />

                       </View>
                    <TextInput
                        style={styles.input}
                        placeholder="New Password"
                        placeholderTextColor="#ffffff" 
                        onChangeText={(password) =>
                            this.setState({password})
                          }
                         
                          keyboardType="default"
                          ref={nameInputRef1}
                          onSubmitEditing={() =>
                            nameInputRef2.current &&
                            nameInputRef2.current.focus()
                          }
                          blurOnSubmit={false}
                          secureTextEntry={true}
                          underlineColorAndroid="#f000"
                          returnKeyType="next"
                    />
                    </View>
                    <View >
                   <View style={styles.inputIcon}>
                   
                   <Image source={require("../assets/images/lockicon.png")} />

                       </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#ffffff" 
                        onChangeText={(password_confirmation) =>
                            this.setState({password_confirmation})
                          }
                         
                          keyboardType="default"
                          ref={nameInputRef2}
                          onSubmitEditing={Keyboard.dismiss}
                          blurOnSubmit={false}
                          secureTextEntry={true}
                          underlineColorAndroid="#f000"
                       
                    />
                    </View>
                    <View style={styles.loginbtn}>
          <TouchableOpacity style={styles.logintouch}  onPress={() => this.postPassword()}>
       <View style={{position:'absolute',top:18,bottom:0,left:0,right:0,}}>
        <Image style={{alignSelf:'center',paddingTop:10}} source={require("../assets/images/logbtn.png")} />
        
        </View>
    </TouchableOpacity>    
                    </View>

        </View>
        </View>

</ScrollView>



          </View>
    
                   
        </ImageBackground>
    </View>
    );
}
}



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
    background:{position:'absolute',bottom:185,left:0,width:'100%',height:335,backgroundColor:'#34bac0',zIndex:1,borderTopRightRadius:60,borderBottomLeftRadius:60},
    formstart:{flex:3,paddingHorizontal:20,position:'relative',zIndex:2,marginTop:30},
    formInner:{alignItems:'center',paddingTop:120,marginBottom:25},
    imgbox:{width:94,height:94,marginBottom:10},
    boximg:{width:'100%',height:'100%',resizeMode:'cover'},
    boxtitle:{color:'#fff',textTransform:'uppercase',fontSize:18},
    inputIcon:{position:'absolute',top:18,left:12,zIndex:1},
    loginbtn:{position:'relative',marginTop:10},
    logintouch:{height: 58,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#5bc3c8',
        paddingHorizontal: SIZES.padding,
       
        borderRadius:5,
        backgroundColor:'#fff',
        alignItems:'center',
        },
    loginbelow:{flex:1,paddingHorizontal:20,position:'relative',zIndex:2},
    forgotbtn:{borderBottomWidth:1,borderBottomColor:'#52c7cb'},
    forgottouch:{width:'100%',marginBottom:10},
    forgottext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
    regtext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
   

})
export default Changepassword;