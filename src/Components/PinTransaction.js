import React,{Component,Fragment} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Modal
 } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { withNavigation } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import Icon from 'react-native-vector-icons/Ionicons'


import {getPin} from '../Public/Actions/users'

var Spinner = require('react-native-spinkit')
const {height,width} = Dimensions.get('window')
const color = '#39afb5'
class PinTransaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            perangkat:'Mobile',
            isLoading:false,
            token:'',
            errorPin:false,
            viewPin:false,
            hideIcon:false,
            success:false,
            types: 'ChasingDots',
        }
    }

    componentDidMount(){
        const token = AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({token:res})
            }
        })
    }


    pinInput = React.createRef()
    
    getPin = async (code) => {
        this.props.dispatch(getPin(this.state.token,code))
        .then(res => {
            console.log(res)
            const data = res.action.payload.data.data.result
            if(data == false) {
                this.pinInput.current.shake()
                .then(() => {this.setState({
                    code:'',
                    errorPin:true
                    },() => {setTimeout(() => {
                        this.setState({errorPin:false})
                    }, 1000)})})
            }
            else{
                this.setState({isLoading:true},() => {setTimeout(() => {
                    this.setState({success:true})
                }, 1000)})
            }
            
        })
        .catch(err => {
            console.log(err);
            this.pinInput.current.shake()
        })
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
        var type = this.state.types
        const {visible,close} = this.props
        const { code } = this.state
        return (
             <Modal
                    animationType="fade"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    }}>
                <View style={{flex:1,backgroundColor:'rgba(45, 52, 54,0.5)',elevation:3,justifyContent: 'center'}}>
                <View style={{flex:1,backgroundColor:'#fff',marginTop:height/6,borderTopLeftRadius:15,borderTopRightRadius:15}}>
                    <View style={{borderBottomColor:'grey',borderBottomWidth:1,height:height/14,marginBottom:50}}>
                    <TouchableOpacity 
                    onPress={close}
                    style={{height:'100%',width:50,alignItems:'center',justifyContent:'center'}}>
                    <Icon name='md-close' size={24} color='grey' />
                    </TouchableOpacity>
                    </View>
                
                <View style={{alignItems:'center'}}>
                {!this.state.isLoading ? 
                <>
                    <Text style={styles.textPin}>Masukan Pin</Text>
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
                    autoFocus={true}
                    maskDelay={200}
                    password={this.state.viewPin == false ? true : false}
                    cellStyle={styles.boxInput}
                    cellStyleFocused={null}
                    onFulfill={this.getPin}
                    value={code}
                    onTextChange={(code) => {this.setState({code})}}
                />
                    <View style={{width:'60%',alignItems:'flex-end',flexDirection: 'row',justifyContent:'space-between',paddingLeft:5}}>
                    <View style={{flex:1,paddingLeft:10}}>
                        {this.state.errorPin ? 
                        <Text style={{color:'#e74c3c'}}>oopps pin salah !!!</Text>
                        :
                        null}
                    </View>
                    {!this.state.hideIcon ? 
                        <Icon name={'md-eye-off'} size={24} color='grey' onPress={this.viewCode} />   
                        :
                        <Icon name={'md-eye'} size={24} color='grey' onPress={this.hideCode} />   
                    }
                    </View>
                    </>
                    :
                    (this.state.success) ? 
                    <>
                    <Text>Transfer Success</Text>
                    </>
                    :
                    <Spinner isVisible={this.state.isVisible} size={36} type={type} color='#39afb5'/>
                    
                    }
                    </View>

                    </View>

                    
                </View>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(withNavigation(PinTransaction))


const styles = StyleSheet.create({
    continer: {
       
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
        backgroundColor:color
    },
    boxInput:{
        width: 30,
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: color,
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
    textPin:{
        fontSize:15,
        color:color,
        fontWeight:'700'
    },
})