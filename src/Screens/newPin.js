import React,{Component,Fragment} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    Dimensions,
    ImageBackground
 } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { withNavigation } from 'react-navigation'
import {pin} from '../Public/Actions/users'
import AsyncStorage from '@react-native-community/async-storage'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import Icon from 'react-native-vector-icons/Ionicons'

const {height,width} = Dimensions.get('window')
const color = '#39afb5'
class NewPin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            confirmCode:'',
            confirmPin:false,
            token:this.props.navigation.getParam('token2'),
            perangkat:'Mobile'
        }
    }


    pinInput = React.createRef();

    newPin = (code) => {
        if(code.length == 6){
            this.setState({
                confirmPin:true
            })
        }else {
            this.pinInput.current.shake()
                .then(() => this.setState({ code: '' }))
        }

    }

    _checkCode = async (confirmCode) => {
        if (confirmCode == this.state.code) {
            await this.props.dispatch(pin({pin:this.state.code,
            pin_confirm:confirmCode,perangkat:this.state.perangkat},this.state.token))
            .then(res => {
                this.props.navigation.navigate('appStackNavigator')
            })
            .catch(err => {
                console.log(err)
            })
            
        } else {
            this.pinInput.current.shake()
                .then(() => this.setState({ confirmCode: '' }))
        }
    }


    render() {
        const {confirmCode} = this.state
        const { code } = this.state
        return (
            <View style={styles.continer}>
                <StatusBar backgroundColor={color} />
                <ImageBackground
                source={{uri:'https://i.pinimg.com/564x/18/74/5a/18745a629d8247aaa6977b6ac5ece09d.jpg'}}
                resizeMode='cover'
                style={styles.wrapperTop}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row',paddingHorizontal:15,backgroundColor:'#ffbe76',marginHorizontal:35,alignItems:'center',paddingVertical:5,borderRadius:5,borderColor:'#fff',borderWidth:1,marginTop:15}}>
                            <Icon name='md-alert' size={24} color='tomato' />
                            <Text style={{color:'#30336b',marginLeft:10}}>Pin akan di gunakan untuk melakukan Transaksi dan kemanan akun</Text>
                        </View>
                        
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:15,color:'#fff',fontWeight:'700'}}>Buat Pin Baru</Text>
                    
                    <SmoothPinCodeInput
                    mask={<View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10/2,
                        backgroundColor: color,
                    }}></View>}
                    cellStyleFocused={{borderWidth:1,borderColor:color}}
                    codeLength={6}
                    ref={this.pinInput}
                    cellSpacing={0}
                    textStyle={styles.teksInput}
                    keyboardType='numeric'
                    autoFocus={false}
                    maskDelay={100}
                    password={true}
                    cellStyle={styles.boxInput}
                    cellStyleFocused={null}
                    onFulfill={this.newPin}
                    value={code}
                    onTextChange={code => this.setState({ code })}
                />

                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    {this.state.confirmPin == true ?
                <>
                <Text style={{fontSize:15,color:'#fff',fontWeight:'700'}}>Konfirmasi Pin</Text>
                <SmoothPinCodeInput
                    mask={<View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10/2,
                        backgroundColor: color,
                    }}></View>}
                    textStyle={styles.teksInput}
                    codeLength={6}
                    ref={this.pinInput}
                    keyboardType='numeric'
                    autoFocus={false}
                    maskDelay={100}
                    password={true}
                    cellStyle={styles.boxInput}
                    cellStyleFocused={null}
                    onFulfill={this._checkCode}
                    value={confirmCode}
                    onTextChange={confirmCode => this.setState({ confirmCode })}
                /></> : null
                }

                    </View>
                    <View style={{height:30}}></View>
                </ImageBackground>
                
               
                
                <View
                    style={styles.wrapperKeyboard}>
                    <VirtualKeyboard color={color} pressMode='string' onPress={(val) => this.changeText(val)} />
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

export default connect(mapStateToProps)(NewPin)

const styles = StyleSheet.create({
    continer: {
        flex: 1,
    },
    forgotPassword: {
        color: color,
        fontSize: 15,
        fontWeight: '700'
    },
    wrapperTop:{
        height:height/2.3,
        borderBottomLeftRadius:50
    },
    wrapperKeyboard:{
        borderTopLeftRadius:35,
        marginTop:-30,
        flex:1,
        zIndex:+1,
        paddingTop:30,
        backgroundColor:'#fff'
    },
    boxInput:{
        width: 30,
        height: 30,
        borderRadius:5,
        backgroundColor:'#fff',
        marginLeft:5
    },
    teksInput:{
        fontSize: 22,
        color: color,
        marginVertical: 10
    }
})