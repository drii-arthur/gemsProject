import React, {Component} from 'react'
import {ScrollView,View,Text,TextInput,StyleSheet,StatusBar,Dimensions,TouchableOpacity,Picker,Image} from 'react-native'
import Axios from 'axios'
import {login} from '../Public/Actions/users'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {Toast} from 'native-base'


const {height} = Dimensions.get('window')
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            numberCode: '',
            phone:'',
            showToast: false
        }
    }

    handleInput = (teks, name) => {
        this.setState({
            [name]: teks
        })
    }

    handleLogin =  async () => {
        let phone = this.state.phone
        await this.props.dispatch(login({phone:phone}))
        .then(res => {
            const dataObj = res.action.payload.data   
            let active = dataObj.userku.active
            let id = dataObj.userku.id
            let code = dataObj.auh.code
            // AsyncStorage.setItem('code',code) 
            if(active === 0){          
                this.props.navigation.navigate('Otp',{code})      
            }else{
                this.props.navigation.navigate('HomeStack')
            }
            Toast.show({
            text:'Login sukses',
            buttonText: "Okay",
            type: "success",
            position:'top',
            duration:2000,
            style:styles.toast 
             })  
        })
        .catch(() => {
            this.props.navigation.navigate('Register',{phone})
            Toast.show({
            text: this.props.users.errMessage,
            buttonText: "Okay",
            type: "warning",
            position:'top',
            duration:2000,
            style:styles.toast,
        })

        })
    }
    render(){
        return(
            // container
            <ScrollView>
                <StatusBar backgroundColor='#39afb5' />

                {/* logo Image */}
                <View style={styles.logoImage}>
                    <Image source={require('../Assets/Images/logo_login.png')} />
                </View>
                {/* input */}
                <View style={styles.wrapperInput}>
                    <View style={{flexDirection:'row',borderBottomColor:'#bdc3c7',
                     borderBottomWidth:1,}}>
                        {/* <View style={{flex:1}}>
                            <Picker style={styles.dropdown}
                    selectedValue={this.state.numberCode}
                    onValueChange={(itemValue, itemIndex) => {
                        console.log(itemValue);

                        this.setState({ numberCode: itemValue })
                    }
                    }
                    >
                    <Picker.Item label="+62" value="+62" style={{width:200}} />
                    </Picker>
                        </View> */}
                <View style={{width:'100%'}}> 
                    <TextInput 
                    onChangeText={(teks) => {this.handleInput(teks,'phone')}}
                    style={styles.input}
                    placeholder='Nomer Ponsel'
                    keyboardType='numeric'
                    /></View>
                    </View>
                    
                    <TouchableOpacity 
                    onPress={this.handleLogin}
                    style={styles.button}>
                        <Text style={styles.textButton}>MASUK</Text>
                    </TouchableOpacity>
                
                </View>
                
                
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
    logoImage:{
        height:height/1.6,
        justifyContent:'center',
        alignItems:'center'
    },
    wrapperInput:{
        paddingHorizontal:50,
        flex:1,
    },
    input:{
        position:'relative',
        paddingLeft:10
    },
    dropdown:{
        padding:0,
        margin:0
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        width:'100%',
        backgroundColor:'#39afb5',
        borderRadius:25,
        marginTop:30,
        elevation:3
    },
    textButton:{
        color:'#fff',
        fontSize:14,
        fontWeight:'700'
    },
    toast:{
    borderRadius:25,
    marginHorizontal:30
  },
})