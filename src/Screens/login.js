import React, {Component} from 'react'
import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Picker,
    Image,
    ActivityIndicator
    } from 'react-native'
import Axios from 'axios'
import {login} from '../Public/Actions/users'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {Toast} from 'native-base'
import PhoneInput from 'react-native-phone-input'
import ModalPickerImage from './modalPickerImage'
import LinearGradient from 'react-native-linear-gradient'
import DeviceInfo from 'react-native-device-info'

const {height} = Dimensions.get('window')
var Spinner = require('react-native-spinkit')
class Login extends Component{
    constructor(props){
        super(props)
        // this.input = React.createRef();
        this.state = {
            numberCode: '',
            phone:'',
            perangkat:'Mobile',
            showToast: false,
            kode:'+62',
            isLoading:false,
            types: [ 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            isVisible: true,
            index:1
        }
    }

    componentDidMount = () => {
        this.getDevices()
        let brand = DeviceInfo.getBrand()
        let deviceId = DeviceInfo.getDeviceId();
        let model = DeviceInfo.getModel()
    }

    
    getDevices = () => {
        DeviceInfo.getDevice().then(device => {
            this.setState({perangkat:device})
        console.log(device,'devices')
})
    }
    

    resetForm = () => {
        this.setState({
            phone:''
        })
    }

    handleLogin =  async () => {
        this.setState({isLoading:true})
        let phone = this.state.kode + this.state.phone
        if(phone.length < 10 || phone.length > 14){
            Toast.show({
            text: 'nomor tidak valid',
            type: "danger",
            position:'top',
            duration:1500,
            style:styles.toast
            })
            this.setState({isLoading:false})
        }
        else{
        await this.props.dispatch(login({phone:phone,perangkat:this.state.perangkat,signcode:'test'}))
        .then(async (res) => {
            const dataObj = res.action.payload.data.data
            let id = dataObj.id
            let otp = dataObj.otp
            let token = dataObj.token
                    Toast.show({
                    text:'Login sukses',
                    buttonText: "Okay",
                    type: "success",
                    position:'top',
                    duration:1000,
                    style:styles.toast
                })
                    this.setState({isLoading:false})
                    this.props.navigation.navigate('Otp',{dataObj})
                
        })
        .catch((err) => {
            this.setState({isLoading:false})
            Toast.show({
            text: "error",
            type: "warning",
            position:'top',
            duration:2000,
            style:styles.toast

        })
        })
        }
    }
    render(){
        var type = this.state.types[this.state.index]
        return(
            // container
            <LinearGradient
                style={{flex:1}}
                    start={{x: 1, y: 0}} 
                    end={{x: 2, y:1.}} 
                    colors={['#39afb5','#57bfed']}
                >
            <ScrollView >
                <StatusBar backgroundColor='#39afb5' />

                {/* logo Image */}
                <View style={styles.logoImage}>
                    <Image source={require('../Assets/Icons/Logo_gems.png')} />
                </View>
                {/* input */}
                <View style={styles.wrapperInput}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#fff',fontWeight:'700',fontSize:15}}>{this.state.kode}</Text>
                        <View style={{flex:1,paddingHorizontal:10}}>
                            <TextInput 
                            onChangeText={(phone) => {this.setState({phone}) 
                                if(phone.substring(0,1) == 0){
                                    this.resetForm()
                                }
                            }}
                            value={this.state.phone}
                            style={styles.input}
                            placeholder='Nomer Ponsel'
                            keyboardType='numeric'
                            placeholderTextColor="#fff"
                            />
                        </View>
                    </View>
                    
                    <TouchableOpacity 
                        onPress={this.handleLogin}
                        style={styles.button}>
                        {this.state.isLoading == false ? 
                        <Text style={[styles.textButton,{borderRadius:0}]}>MASUK</Text>
                        :
                        <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={24} type={type} color='#fff'/>
                        }
                    </TouchableOpacity>
                
                </View>
                
            </ScrollView>
            </LinearGradient>
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
        height:height/1.8,
        justifyContent:'center',
        alignItems:'center',
    },
    wrapperInput:{
        paddingHorizontal:50,
        flex:1,
    },
    input:{
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        height:40,
        padding:0,
        color:'#fff',
        letterSpacing:1.2,
        fontWeight:'700'
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
        borderRadius:25,
        marginTop:50,
        marginBottom: 10,
        borderWidth:1,
        borderColor:'#fff'
    },
    textButton:{
        color:'#fff',
        fontSize:16,
        fontWeight:'700'
    },
})