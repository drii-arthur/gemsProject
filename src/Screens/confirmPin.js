import React,{Component,Fragment} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    Dimensions,
    ImageBackground,
    TouchableOpacity
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
class ConfirmPin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: this.props.navigation.getParam('code'),
            confirmCode:'',
            confirmPin:false,
            token:this.props.navigation.getParam('token'),
            perangkat:'Mobile',
            errorMessage:false
        }
    }


    pinInput = React.createRef();

    _checkCode = async (confirmCode) => {
        this.setState({confirmCode,errorMessage:false})
        if(confirmCode.length == 6){
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
                .then(() => this.setState({ errorMessage:true }))
        }
        }
        
    }


    render() {
        const {confirmCode, code } = this.state
        return (
            <View style={styles.continer}>
                <StatusBar backgroundColor={color} />
                <LinearGradient 
                    start={{x: 0, y: 0.5}} 
                    end={{x:1, y:1}} 
                    colors={['#39afb5','#57bfed']}
                style={styles.wrapperTop}>
                <View style={{height:height/14,flexDirection:'row'}}>
                    <TouchableOpacity
                    onPress={() => {this.props.navigation.goBack()}}
                    style={{justifyContent:'center',alignItems:'center',width:60,height:'100%',}}>
                        <Icon name='ios-arrow-back' color='#fff' size={24} />
                    </TouchableOpacity>
                    <View style={styles.wrapperInfo}>
                        <Text style={[styles.textPin,{marginLeft:-60}]}>Konfirmasi Pin</Text>
                    </View>
                </View>
                <View style={styles.wrapperInfo}>
                    <View style={styles.info}>
                        <Icon name='md-alert' size={24} color='#ffa502' />
                        <Text style={styles.textInfo}>Pin akan di gunakan untuk melakukan Transaksi dan kemanan akun</Text>
                    </View>
                        
                </View>

                <View style={[styles.wrapperInfo,{flex:2}]}>
                    <Text style={styles.textPin}>Konfirmasi Pin</Text>
                <SmoothPinCodeInput
                    mask={<View style={styles.mask}></View>}
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
                    />
                    {this.state.errorMessage ?
                    <> 
                    <Text style={{color:'red'}}>Pin Salah</Text>
                    </>
                    :null
                    }
                    </View>
                    <View style={{height:30}}></View>
                </LinearGradient>
                    
                <View
                    style={styles.wrapperKeyboard}>
                    <VirtualKeyboard color={'#39afb5'} pressMode='string' onPress={(confirmCode) => this._checkCode(confirmCode)} />
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

export default connect(mapStateToProps)(ConfirmPin)

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
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        marginLeft:5
    },
    teksInput:{
        fontSize: 22,
        color: color,
        marginVertical: 10
    },
    wrapperInfo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    info:{
        flexDirection:'row',
        paddingHorizontal:15,
        backgroundColor:'rgba(236, 204, 104,1.0)',
        marginHorizontal:35,
        alignItems:'center',
        paddingVertical:5,
        borderRadius:5,
        borderColor:'#fff',
        borderWidth:1,
        marginTop:15
    },
    textInfo:{
        color:'rgba(47, 53, 66,1.0)',
        marginLeft:10
    },
    textPin:{
        fontSize:15,
        color:'#fff',
        fontWeight:'700'
    },
    mask:{
        width: 10,
        height: 10,
        borderRadius: 10/2,
        backgroundColor: '#fff',
    }
})