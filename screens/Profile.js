
import React, { useState ,useEffect,createRef,Component}  from 'react';
import { Alert,View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,Keyboard} from 'react-native';
    import { COLORS, SIZES, FONTS,Hosturl } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../component/Loader';
import { useNavigation } from '@react-navigation/native';
//import {Changepassword} from '../screens/Changepassword';
class Profile extends Component {
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

         
        };
      }
    //   componentWillMount(){
    //     console.log(12)
    //   }
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
        this.getProfile();
    }
      }
       getProfile() {
        //console.log(231);
    
       fetch(Hosturl.api+'get-profile', {
          method: 'POST',
          body: JSON.stringify({
            user_id: this.state.userId,
           
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
            //setLoading(false);
            //console.log(responseJson);
            
             if (responseJson.status) {
            
                this.setState({ name:responseJson.response_data.name });
                this.setState({ email:responseJson.response_data.email });
                this.setState({ phone:responseJson.response_data.phone_number}) 
            //   //console.log(responseJson);
           // setuserdata(responseJson.response_data)
             } 
           
          })
          .catch((error) => {
            //Hide Loader
            //setLoading(false);
            //console.error(error);
          });
      }
       postProfile (){
       
        if (!this.state.name ) {
            alert('Please enter name');
            return;
          }
          if (!this.state.phone) {
            alert('Please enter phone no');
            return;
          }
       
          this.setState({ loading:true });
              
    
       fetch(Hosturl.api+'update-profile', {
          method: 'POST',
          body: JSON.stringify({
            user_id: this.state.userId,
            name:this.state.name,
            phone_number:this.state.phone,
            email:this.state.email
           
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
           // console.log(responseJson);
            
             if (responseJson.status) {
            
                Alert.alert('Data successfully updated');
            //   //console.log(responseJson);
           // setuserdata(responseJson.response_data)
             } 
            else {
            //   setErrortext(responseJson.msg);
           //console.log('Please check your email id or password');
           Alert.alert(responseJson.msg);
             }
          })
          .catch((error) => {
            //Hide Loader
            this.setState({ loading:false });
           // console.error(error);
          });
      }
      gotopassword(){
        this.props.navigation.navigate('Changepassword');
      }
    render() {
       // const navigation = useNavigation();
        const nameInputRef = createRef();
        const phoneInputRef = createRef();

    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <Loader loading={this.state.loading} />
           
            
              <View style={styles.profile_body}>
              <ScrollView style={{marginBottom:20}} contentContainerStyle={{
        
         justifyContent: 'center',
         alignContent: 'center',
       }}
       keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
      >
              <View style={styles.container}>
              <KeyboardAvoidingView enabled>
            <View style={styles.profile_icon}>
                {this.state.photo!='' ? 
                  
            <Image source={require("../assets/images/profile_user.png")} />
            : 
            
            <Image source={require("../assets/images/profile_user.png")} />
            
            }
                  <View style={styles.profile_penicon}>
                  <Image source={require("../assets/images/profile_pencile.png")} />
                  </View>
              </View>
        <View style={styles.formbox}>
       
       
        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Full Name</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#000" 
                            value={this.state.name}
                            onChangeText={(name) =>
                                this.setState({name})
                              }
                            returnKeyType="next"
                              onSubmitEditing={() =>
                                phoneInputRef.current &&
                                phoneInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                        />
        </View>

        {/* <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Last Name</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#000" 
                        />
        </View> */}

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Phone Number</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            placeholderTextColor="#000" 
                            value={this.state.phone}
                            onChangeText={(phone) =>
                                this.setState({phone})
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

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Email Id</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#000" editable={false} selectTextOnFocus={false}
                            value={this.state.email}
                        />
        </View>


   
        <TouchableOpacity  style={styles.flexthreeTouchtwo} onPress={() => this.postProfile()}>
            <Text style={styles.flexthreeTouchtext} >Save Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flexthreeTouch} onPress={() =>this.props.navigation.navigate('Changepassword')}>
            <Text style={styles.Touchtext} >Change password</Text>
        </TouchableOpacity>
       
       
        </View>
        </KeyboardAvoidingView>
            </View>
            </ScrollView>
              </View>
             
             
          
        </View>
    );
}
}


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
       paddingTop:20,
       
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

export default Profile;