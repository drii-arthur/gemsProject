import React,{Component} from 'react'
import {View,Text,StyleSheet,StatusBar} from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import RNOtpVerify from 'react-native-otp-verify'
import AsyncStorage from '@react-native-community/async-storage'
import {izin} from '../Public/Actions/users'
import {connect} from 'react-redux'

class Otp extends Component{
    constructor(props){
        super(props)
        this.state = {
            code:'',
            otpCode : this.props.navigation.getParam('dataObj')
        }
    }

    getHash = () =>
    RNOtpVerify.getHash()
    .then(console.log)
    .catch(console.log);

    startListeningForOtp = () =>
    RNOtpVerify.getOtp()
    .then(p => RNOtpVerify.addListener(this.otpHandler))
    .catch(p => console.log(p));

    otpHandler = (message: string) => {
        const otp = /(\d{4})/g.exec(message)[1];

        this.setState({ otp });
        RNOtpVerify.removeListener();
        Keyboard.dismiss();
}

    componentWillUnmount() {
    RNOtpVerify.removeListener();
    }

    

    pinInput = React.createRef();
    _checkCode = async (code) => {
        const dataObj = this.state.otpCode
        const iduser = dataObj.iduser
        const codeConfirm = dataObj.code
        console.warn(iduser,'kiye')
        if (code ==  codeConfirm) {
            await this.props.dispatch(izin({iduser:iduser,code:codeConfirm}))
            .then(res => {
                console.log(res)
                let ket = res.action.payload.data.ket
                let nama = res.action.payload.data.nama
                let kontak = res.action.payload.data.kontak
                let email = res.action.payload.data.email
                let id = res.action.payload.data.id
                let status = res.action.payload.data.status
                if(ket == 'menuju halaman home premium'){
                    AsyncStorage.setItem('id',JSON.stringify(id))
                    AsyncStorage.setItem('nama',JSON.stringify(nama))
                    AsyncStorage.setItem('kontak',JSON.stringify(kontak))
                    AsyncStorage.setItem('status',JSON.stringify(status))
                    AsyncStorage.setItem('email',JSON.stringify(email))
                this.props.navigation.navigate('appStackNavigator',{iduser})
                }else{
                    this.props.navigation.navigate('NewPin',{iduser})
                }
                 
            })
            .catch(err => {
                const idUser = this.props.users.errMessage
                console.log(err)
            })
            
        } else {
            this.pinInput.current.shake()
                .then(() => this.setState({ code: '' }))
        }
    }

    render(){
        const { code } = this.state
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#39afb5' />
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{color:'#39afb5',fontSize:18,letterSpacing:2}}>Masukkan <Text style={{fontWeight:'bold'}}>KODE OTP</Text></Text>
                    <View style={{height:2,width:'25%',backgroundColor:'#39afb5',marginTop:15,marginBottom:50}} />
                    <SmoothPinCodeInput
                    ref={this.pinInput}
                    keyboardType='numeric'
                    autoFocus={true}
                    cellStyle={{
                        width:30,
                        height:30,                     
                        borderBottomColor:'#39afb5',
                        borderBottomWidth:3,
                    }}
                    textStyle={{
                        fontSize: 24,
                        color: '#39afb5',
                        marginVertical:5
                    }}
                    cellStyleFocused={null}
                    onFulfill={this._checkCode}
                    value={code}
                    onTextChange={code => this.setState({ code })}
                />
                <Text style={{
                fontSize:18,
                    color:'#39afb5'
                    }}>
                60 Detik
                </Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(Otp)

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45,
    },

    borderStyleHighLighted: {
      borderColor: "#39afb5",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor:'#39afb5'
    },
    underlineStyleHighLighted: {
      borderColor: "#39afb5",
    },
  });