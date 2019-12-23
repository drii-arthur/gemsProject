import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions
 } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import AsyncStorage from '@react-native-community/async-storage'
import { izin } from '../Public/Actions/users'
import { connect } from 'react-redux'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {Toast} from 'native-base'
import SmsListener from 'react-native-android-sms-listener'
import CountDown from 'react-native-countdown-component'


const Counter = (props) => {
    return(
        <CountDown
        size={14}
        until={30}
        onFinish={props.onfinish}
        digitStyle={{backgroundColor: 'transparent',width:16}}
        timeToShow={['S']}
        timeLabels={{s: null}}
        digitTxtStyle={{color: '#fff'}}
        showSeparator
      />
    )
}
const {height,width} = Dimensions.get('window')
const mainColor = '#39afb5'
class Otp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            otpCode: this.props.navigation.getParam('dataObj'),
            phoneNumber:'',
            codeConfirm:'',
            error:false,
            noResponSms:false
        }
    }


    getSMs = () => {
    let subscription = SmsListener.addListener(message => {
    let verificationCodeRegex = /([\d]{4})/

    if (verificationCodeRegex.test(message.body)) {
    let verificationCode = message.body.match(verificationCodeRegex)[1]
    this.setState({codeConfirm:verificationCode})
    subscription.remove()
    return
    }
        })
    }

    handleErrorSms = () => {
        this.setState({noResponSms:true})
    }


    pinInput = React.createRef()

    componentDidMount = async () => {
        this.getSMs()
    }

    changeText = (code) => {
        const dataObj = this.state.otpCode
        const confirmCode = dataObj.otp
        const customer = dataObj.customer
        const token = dataObj.token
        const phone = dataObj.phone
        const status = dataObj.status
        this.setState({code})
        if(code.length == 4){
            if (code == this.state.codeConfirm || code == confirmCode) {
                if (customer !== null) {
                    if (typeof token === 'string') {
                    AsyncStorage.setItem('token', (token))
                }
                this.props.navigation.navigate('appStackNavigator')
                } else {
                this.props.navigation.navigate('Register', { codeConfirm, token })
                }
            } else {
            this.pinInput.current.shake()
            .then(() => {
                this.setState({error:true})
                Toast.show({
                text: 'Otp tidak valid',
                type: "danger",
                position:'top',
                duration:1500,
                style:styles.toast
            })
            })
        }
        }
        
        
    }

    render() {
        const { code } = this.state
        
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='#39afb5' />
                    <ImageBackground
                    source={require('../Assets/Images/bg2.png')}
                    resizeMode='cover'
                    style={styles.wrapperTop}>
                    <TouchableOpacity 
                    onPress={() => {this.props.navigation.goBack()}}
                    style={{height:height/15,width:width/7,position:'absolute',top:0,justifyContent:'center',left:0,alignItems:'center'}}>
                    <Icon name='ios-arrow-back' size={24} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.teksVerification}>Verifikasi Kode <Icon name='ios-phone-portrait' size={30} /></Text>
                    <Text style={{color:'#fff'}}>Kami telah mengirimkan kode otp ke nomor</Text>
                    <Text style={styles.teksNoPhone}>{this.state.otpCode.phone}</Text>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                    <SmoothPinCodeInput
                        ref={this.pinInput}
                        autoFocus={false}
                        cellStyle={!this.state.error ? styles.boxInput : styles.boxError }
                        textStyle={styles.teksInput}
                        value={code}
                        onTextChange={this.changeText}
                    />
                    </TouchableWithoutFeedback>
                    <Text style={{
                        fontSize: 11,
                        color: '#fff',
                        marginTop:20
                    }}>
                        Tidak menerima kode?
                </Text>
                {!this.state.noResponSms ? 
                <View style={{flexDirection:'row',alignItems:'center',height:16}}>
                <Text style={{fontSize: 11,color: '#fff'}}> kode akan di kirim ulang dalam waktu
                </Text>
                    <Counter onfinish={this.handleErrorSms} />
                    <Text style={{color:'#fff',fontSize:11}}>Detik</Text>
                </View>
                :
                <TouchableOpacity>
                    <Text style={{color:'#fff'}}>Kirim Ulang</Text>
                </TouchableOpacity>
                }
                </ImageBackground>

                <View
                    style={styles.wrapperKeyboard}>
                    <VirtualKeyboard color={mainColor} pressMode='string' onPress={(code) => this.changeText(code)} />
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
        borderBottomColor: '#39afb5'
    },
    underlineStyleHighLighted: {
        borderColor: "#39afb5",
    },
    wrapperKeyboard:{
        flex:1.1,
        borderTopLeftRadius:35,
        paddingTop:30,
        backgroundColor:'#fff',
        marginTop:-30
    },
    wrapperTop:{
        justifyContent: 'center',
         alignItems: 'center',
         flex: 1 
    },
    teksVerification:{
        fontSize: 18,
        color:'yellow',
        marginBottom:5
    },
    teksNoPhone:{
        fontSize:16,
        color:'yellow',
        marginTop:5,
        marginBottom:25
    },
    boxInput:{
        width: 35,
        height: 35,
        backgroundColor:'rgba(255, 255, 255,0.7)',
    },
    boxError:{
        width: 35,
        height: 35,
        backgroundColor:'rgba(255, 255, 255,0.7)',
        borderColor:'tomato',
        borderWidth:1
    },
    teksInput:{
        fontSize: 22,
        color: mainColor,
        marginVertical: 10
    },
    toast:{
        marginTop:-20
    }
});