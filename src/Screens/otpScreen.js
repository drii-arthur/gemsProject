import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    Image
 } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import RNOtpVerify from 'react-native-otp-verify'
import AsyncStorage from '@react-native-community/async-storage'
import { izin } from '../Public/Actions/users'
import { connect } from 'react-redux'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'


const mainColor = '#39afb5'
class Otp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            otpCode: this.props.navigation.getParam('dataObj'),
            phoneNumber:''
        }
    }

    // getHash = () =>
    //     RNOtpVerify.getHash()
    //         .then(console.log)
    //         .catch(console.log);

    // startListeningForOtp = () =>
    //     RNOtpVerify.getOtp()
    //         .then(p => RNOtpVerify.addListener(this.otpHandler))
    //         .catch(p => console.log(p));

    // otpHandler = (message: string) => {
    //     const otp = /(\d{4})/g.exec(message)[1];

    //     this.setState({ otp });
    //     RNOtpVerify.removeListener();
    //     Keyboard.dismiss();
    // }

    // componentWillUnmount() {
    //     RNOtpVerify.removeListener();
    // }



    pinInput = React.createRef();
    _checkCode = () => {
        const dataObj = this.state.otpCode
        const codeConfirm = dataObj.otp
        const customer = dataObj.customer
        const token = dataObj.token
        const phone = dataObj.phone
        const status = dataObj.status

        if (this.state.code == codeConfirm) {
            AsyncStorage.setItem('name', (customer.name))
            AsyncStorage.setItem('phone', (phone))
            AsyncStorage.setItem('accountType', (customer.role))
            this.props.navigation.navigate('appStackNavigator')
            if (customer !== null) {
                if (typeof token === 'string') {
                    AsyncStorage.setItem('token', (token))
                }
               
            } else {
                this.props.navigation.navigate('Register', { codeConfirm, token })
            }
        } else {
            this.pinInput.current.shake()
                .then(() => this.setState({ code: '' }))
        }
    }

    componentDidMount = async () => {
        alert(this.state.otpCode.otp)
    }

    changeText = (code) => {
        const dataObj = this.state.otpCode
        const codeConfirm = dataObj.otp
        const customer = dataObj.customer
        const token = dataObj.token
        const phone = dataObj.phone
        const status = dataObj.status
        this.setState({code})
        if(code.length == 4){
            if (code == codeConfirm) {
            AsyncStorage.setItem('name', (customer.name))
            AsyncStorage.setItem('phone', (phone))
            AsyncStorage.setItem('accountType', (customer.role))
            this.props.navigation.navigate('appStackNavigator')
            if (customer !== null) {
                if (typeof token === 'string') {
                    AsyncStorage.setItem('token', (token))
                }
               
            } else {
                this.props.navigation.navigate('Register', { codeConfirm, token })
            }
        } else {
            this.pinInput.current.shake()
                .then(() => this.setState({ code: '' }))
        }
        }
        
        
    }

    render() {
        const { code } = this.state
        console.warn(code);
        
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='#39afb5' />
                <LinearGradient 
                    start={{x: 0, y: 0.5}} 
                    end={{x:1, y:1}} 
                    colors={['#39afb5','#57bfed']}
                    style={styles.wrapperTop}>
                    <Text style={styles.teksVerification}>Verifikasi Kode <Icon name='ios-phone-portrait' size={30} /></Text>
                    <Text style={{color:'#fff'}}>Kami telah mengirimkan kode otp ke nomor</Text>
                    <Text style={styles.teksNoPhone}>{this.state.otpCode.phone}</Text>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                    <SmoothPinCodeInput
                        ref={this.pinInput}
                        autoFocus={false}
                        cellStyle={styles.boxInput}
                        textStyle={styles.teksInput}
                        // cellStyleFocused={null}
                        // onFulfill={this._checkCode}
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
                <Text style={{fontSize: 11,
                        color: '#fff',}}> kode akan di kirim ulang dalam
                        <Text style={{fontSize:14,color:'yellow'}}> 90 </Text>
                        detik</Text>
                </LinearGradient>

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
    teksInput:{
        fontSize: 22,
        color: mainColor,
        marginVertical: 10
    }
});