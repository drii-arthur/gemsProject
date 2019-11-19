import React, {Component} from 'react'
import {ScrollView,View,Text,TextInput,StyleSheet,StatusBar,Dimensions,TouchableOpacity,Picker,Image} from 'react-native'
import Axios from 'axios'
import {login} from '../Public/Actions/users'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {Toast} from 'native-base'
import PhoneInput from 'react-native-phone-input'
import ModalPickerImage from './modalPickerImage'

const {height} = Dimensions.get('window')
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            numberCode: '',
            phone:'',
            perangkat:'Mobile',
            showToast: false,
        }
    }
    

    handleInput = (teks, name) => {
        this.setState({
            [name]: teks
        })
    }

    componentDidMount = async () => {
        const token = AsyncStorage.getItem('token',(err,res) => {
            console.log(res,'token')
            if(res){
                this.props.navigation.navigate('appStackNavigator')
            }

        })
        
    }

    handleLogin =  async () => {
        let phone = this.state.phone
        if(phone.length < 10 || phone.length > 14){
            Toast.show({
            text: 'nomor tidak valid',
            type: "danger",
            position:'top',
            duration:1500,
            style:styles.toast
            })
        }else if(phone.substr(3,1) == 0){
            Toast.show({
            text: 'Harap Tidak Memasukan Angka 0 setelah kode negara',
            type: "danger",
            position:'top',
            duration:1500,
            style:styles.toast
            })
        }
        else{
        await this.props.dispatch(login({phone:phone,perangkat:this.state.perangkat}))
        .then(async (res) => {
            const dataObj = res.action.payload.data.data
            let id = dataObj.id
            let otp = dataObj.otp
            let token = dataObj.token
                    
                    console.warn(token,'token')
                    if(typeof token === 'string'){ 
                    await AsyncStorage.setItem('token',(token))
                    }
                    // AsyncStorage.setItem('kontak',kontak)
                    // AsyncStorage.setItem('status',JSON.stringify(status))
                    // AsyncStorage.setItem('email',JSON.stringify(email))
                    // console.warn(dataObj.id,id)
                    Toast.show({
                    text:'Login sukses',
                    buttonText: "Okay",
                    type: "success",
                    position:'top',
                    duration:1000,
                    style:styles.toast
                })
                    this.props.navigation.navigate('Otp',{dataObj})
                
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
                    <PhoneInput 
                        ref={(ref) => {
                        this.phone = ref;
                        }}
                        initialCountry='id'
                        getISOCode='+62'
                        allowZeroAfterCountryCode={false}
                    />

                    <TextInput 
                        onChangeText={(teks) => this.handleInput(teks,'phone')}
                        style={styles.input}
                        placeholder='Nomer Ponsel'
                        keyboardType='numeric'
                    >
                    <Text>+62</Text>
                    </TextInput>
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