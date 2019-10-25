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

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('id')
        if(token === null){
            console.warn(token)
        }else{
            this.props.navigation.navigate('appStackNavigator')
        }
        return token
    }

    handleLogin =  async () => {
        let phone = this.state.phone
        await this.props.dispatch(login({phone:phone}))
        .then(res => {
            const dataObj = res.action.payload.data   
            let id = dataObj.id
            let nama = dataObj.nama
            let kontak = dataObj.kontak
            let status = dataObj.status
            let email = dataObj.email
            let idKontak = dataObj.idkontak1
            let idKontak2 = dataObj.idkontak2
            let idUser = dataObj.iduser
            if(id != undefined){
                    AsyncStorage.setItem('id',JSON.stringify(id))
                    AsyncStorage.setItem('nama',JSON.stringify(nama))
                    AsyncStorage.setItem('kontak',JSON.stringify(kontak))
                    AsyncStorage.setItem('status',JSON.stringify(status))
                    AsyncStorage.setItem('email',JSON.stringify(email))
                    console.warn(dataObj.id,id)
                    Toast.show({
                    text:'Login sukses',
                    buttonText: "Okay",
                    type: "success",
                    position:'top',
                    duration:1000,
                    style:styles.toast
                })
                this.props.navigation.navigate('appStackNavigator')
            }
                
             
             if(idKontak != undefined || idKontak2 != undefined){
                    this.props.navigation.navigate('Register',{idKontak,idKontak2})                    
             }
             if(idUser !== undefined){
                 this.props.navigation.navigate('Otp',{dataObj})
             }  
        })
        .catch((err) => {
            console.log(err)
            Toast.show({
            text: this.props.users.errMessage,
            type: "warning",
            position:'top',
            duration:2000,
            style:styles.toast

        })
        })
    }
    render(){
        // const token = AsyncStorage.getItem('id')
        // console.warn(token,'data token')
        // if(token !== null){
        //     this.props.navigation.navigate('appStackNavigator')
        // }
        // else{}
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
                        <Text style={[styles.textButton,{borderRadius:0}]}>MASUK</Text>
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
        elevation:3,
        marginBottom:5
    },
    textButton:{
        color:'#fff',
        fontSize:16,
        fontWeight:'700'
    },
})