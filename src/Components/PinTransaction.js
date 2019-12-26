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
    ActivityIndicator,
    Modal
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
class PinTransaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            perangkat:'Mobile',
            isLoading:false,
        }
    }


    pinInput = React.createRef();

    
    // changeText = (code) => {
    //     this.setState({code})
    //     if(code.length == 6){
    //         this.setState({
    //             isLoading:true
    //             },() => setTimeout(() => {
    //                 this.setState({isLoading:false})
    //                 this.props.navigation.navigate('ConfirmPin',{code,token})
    //             }, 700))
            
    //     }
        
    // }

    // viewCode = () => {
    //     this.setState({
    //         viewPin:true,
    //         hideIcon:true
    //     })
    // }

    // hideCode = () => {
    //     this.setState({
    //         viewPin:false,
    //         hideIcon:false
    //     })
    // }




    render() {
        const { code } = this.state
        return (
             <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    }}>
                <View style={{flex:1,backgroundColor:'rgba(45, 52, 54,0.5)',elevation:3,justifyContent: 'center'}}>
                <View style={{backgroundColor:'#fff',height:height/3,justifyContent:'center',alignItems:'center',marginHorizontal: 20,borderRadius:10}}>
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
                    onFulfill={this.newPin}
                    value={code}
                    onTextChange={(code) => {this.setState({code})}}
                />

                    </View>
                </View>
            </Modal>
        )
    }
}


export default (PinTransaction)

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
        color:color,
        fontWeight:'700'
    },
})