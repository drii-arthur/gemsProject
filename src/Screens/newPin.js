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
    TouchableOpacity,
    ActivityIndicator
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
            perangkat:'Mobile',
            isLoading:false,
            viewPin:false,
            hideIcon:false,
        }
    }


    pinInput = React.createRef();

    
    changeText = (code) => {
        let token = this.state.token
        this.setState({code})
        if(code.length == 6){
            this.setState({
                isLoading:true
                },() => setTimeout(() => {
                    this.setState({isLoading:false})
                    this.props.navigation.navigate('ConfirmPin',{code,token})
                }, 700))
            
        }
        
    }

    viewCode = () => {
        this.setState({
            viewPin:true,
            hideIcon:true
        })
    }

    hideCode = () => {
        this.setState({
            viewPin:false,
            hideIcon:false
        })
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
                    <TouchableOpacity style={styles.iconBack}>
                        <Icon name='ios-arrow-back' color='#fff' size={24} />
                    </TouchableOpacity>
                    <View style={styles.wrapperInfo}>
                        <Text style={[styles.textPin,{marginLeft:-60}]}>Buat Pin</Text>
                    </View>
                </View>
                    <View style={styles.wrapperInfo}>
                        <View style={styles.info}>
                            <Icon name='md-alert' size={24} color='#ffa502' />
                            <Text style={styles.textInfo}>Pin akan di gunakan untuk melakukan Transaksi dan kemanan akun</Text>
                        </View>
                        
                    </View>
                    <View style={[styles.wrapperInfo,{flex:2}]}>
                    <Text style={styles.textPin}>Buat Pin Baru</Text>
                    
                    {this.state.isLoading ?
                    <> 
                    <ActivityIndicator size='large' color='#fff' />
                    </>
                    :
                    <>
                    <SmoothPinCodeInput
                    mask={<View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10/2,
                        backgroundColor: '#fff',
                    }}></View>}
                    cellStyleFocused={{borderWidth:1,borderColor:color}}
                    codeLength={6}
                    ref={this.pinInput}
                    cellSpacing={0}
                    textStyle={styles.teksInput}
                    keyboardType='numeric'
                    autoFocus={false}
                    maskDelay={200}
                    password={this.state.viewPin == false ? true : false}
                    cellStyle={styles.boxInput}
                    cellStyleFocused={null}
                    onFulfill={this.newPin}
                    value={code}
                />
                <View style={{width:'60%',alignItems:'center',paddingRight: 13,marginTop:5,flexDirection: 'row',height:25,justifyContent:'flex-end'}}>
                    {!this.state.hideIcon ?
                    <> 
                    <Icon name={'md-eye-off'} size={24} color='#fff' onPress={this.viewCode} />
                    </>
                    :
                    <>
                    <Icon name={'md-eye'} size={24} color='#fff' onPress={this.hideCode} />
                    </>
                    }
                </View>
                </>
                }

                    </View>
                    <View style={{height:30}}></View>
                </LinearGradient>
                
                <View
                style={styles.wrapperKeyboard}>
                    <VirtualKeyboard color={'#39afb5'} pressMode='string' onPress={(code) => this.changeText(code)} />
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
        color: '#fff',
        marginVertical: 10
    },
     wrapperInfo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textPin:{
        fontSize:15,
        color:'#fff',
        fontWeight:'700'
    },
    textInfo:{
        color:'rgba(47, 53, 66,1.0)',
        marginLeft:10
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
    iconBack:{
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:'100%',
    }
})