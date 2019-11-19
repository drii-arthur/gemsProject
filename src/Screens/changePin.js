import React,{Component,Fragment} from 'react';
import { View, Text, StatusBar, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { withNavigation } from 'react-navigation'
import {pin} from '../Public/Actions/users'
import AsyncStorage from '@react-native-community/async-storage'
import {connect} from 'react-redux'
import Header from '../Components/header'
import {Toast} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

const color = '#39afb5'
class ChangePin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            confirmCode:'',
            newCode:'',
            confirmPin:false,
            newPinCode:false,
            token:this.props.navigation.getParam('token2'),
            viewPin:false,
            hideIcon:false
        }
    }


    pinInput = React.createRef();

    oldPin = (code) => {
        if(code == '123456'){
            this.setState({
                newPinCode:true
            })
        }else {
            Toast.show({
            text: 'Pin Salah',
            type: "danger",
            position:'top',
            duration:1500,
            style:styles.toast
            })
            this.pinInput.current.shake()
                .then(() => this.setState({ code: '' }))
        }

    }

    newPin = (newCode) => {
        if(newCode.length == 6){
            this.setState({confirmPin:true})
        }else{
            this.pinInput.current.shake()
                .then(() => this.setState({ newCode: '' }))
        }
    }

    // _checkCode = async (confirmCode) => {
    //     if (confirmCode == this.state.code) {
    //         await this.props.dispatch(pin({pin:this.state.code,
    //         pin_confirm:confirmCode},this.state.token))
    //         .then(res => {
    //             this.props.navigation.navigate('appStackNavigator')
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
            
    //     } else {
    //         this.pinInput.current.shake()
    //             .then(() => this.setState({ confirmCode: '' }))
    //     }
    // }

    changeCode = (confirmCode) => {
        if(confirmCode == this.state.newCode){
            alert('berhasil')
            this.props.navigation.goBack()
        }else{
            Toast.show({
            text: 'Pin Tidak Sama',
            type: "danger",
            position:'top',
            duration:1500,
            style:styles.toast
            })
            this.pinInput.current.shake()
                .then(() => this.setState({ confirmCode: '' }))
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
        const {confirmCode} = this.state
        const { code } = this.state
        return (
            <View style={styles.continer}>
                <StatusBar backgroundColor={color} />
                <Header title='Change Pin' />
                
                <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
                {this.state.newPinCode == false ?
                <Fragment>
                <Text style={styles.text}>Masukan Pin Anda Saat Ini</Text>
                <View style={{width:'70%'}}>
                <Text style={{color:'#485460',textAlign:'center'}}>Pin di Gunakan Untuk masuk ke Akun Anda Dan Bertransaksi</Text>
                </View>
                <View style={{height:2,backgroundColor:color,marginBottom:15,width:50,marginTop:10}}></View>
                <SmoothPinCodeInput
                    mask={<View style={{
                        width: 8,
                        height: 8,
                        borderRadius: 25,
                        backgroundColor: color,
                    }}></View>}
                    maskDelay={100}
                    password={true}
                    autoFocus={true}
                    codeLength={6}
                    ref={this.pinInput}
                    cellStyle={{
                        borderBottomWidth: 1,
                        borderColor: '#39afb5',
                        width:25,
                        marginRight:8
                        }}
                    cellStyleFocused={{
                        borderColor: '#39afb5',
                        }}
                    onFulfill={this.oldPin}
                    value={code}
                    onTextChange={code => this.setState({ code })}
                /></Fragment>
                 :

                
                <Fragment >
                <Text style={[styles.text]}>Masukan Pin Baru</Text>
                <View style={{width:'70%'}}>
                <Text style={{color:'#485460',textAlign:'center'}}>Pin di Gunakan Untuk masuk ke Akun Anda Dan Bertransaksi</Text>
                </View>
                <View style={{height:2,backgroundColor:color,marginBottom:15,width:50,marginTop:10}}></View>
                
                <SmoothPinCodeInput
                    mask={<View style={{
                        width: 8,
                        height: 8,
                        borderRadius: 25,
                        backgroundColor: color,
                    }}></View>}
                    maskDelay={100}
                    password={this.state.viewPin == true ? false : true}
                    autoFocus={true}
                    codeLength={6}
                    ref={this.pinInput}
                    cellStyle={{
                        borderBottomWidth: 1,
                        borderColor: '#39afb5',
                        width:25,
                        marginRight:8
                        }}
                    cellStyleFocused={{
                        borderColor: '#39afb5',
                        }}
                    onFulfill={this.newPin}
                    value={this.state.newCode}
                    onTextChange={newCode => this.setState({ newCode })}
                />
                     
                </Fragment>
                }
               

                {this.state.confirmPin == true ? 
                <Fragment>
                    {this.state.hideIcon == false ? 
                 <View style={{width:'60%',alignItems:'flex-end',paddingRight: 10,marginTop:5,flexDirection: 'row',justifyContent:'space-between',paddingLeft:5}}>
                 <Text style={{color:'grey'}}>Tampilkan Pin</Text>
                        <Icon name={'md-eye'} size={24} color='grey' onPress={this.viewCode} />   
                    </View>:

                    <View style={{width:'60%',alignItems:'flex-end',paddingRight: 10,marginTop:5,flexDirection: 'row',justifyContent:'space-between'}}>
                 <Text style={{color:'grey'}}>Sembunyikan Pin</Text>
                        <Icon name={'md-eye-off'} size={24} color='grey' onPress={this.hideCode} />   
                    </View>

                    }
                <Text style={[styles.text,{marginTop:25}]}>Konfirmasi Pin Baru</Text>
                
                <View style={{height:2,backgroundColor:color,marginBottom:15,width:50,marginTop:10}}></View>
                    <SmoothPinCodeInput
                    mask={<View style={{
                        width: 8,
                        height: 8,
                        borderRadius: 25,
                        backgroundColor: color,
                    }}></View>}
                    maskDelay={100}
                    password={true}
                    autoFocus={true}
                    codeLength={6}
                    ref={this.pinInput}
                    cellStyle={{
                        borderBottomWidth: 1,
                        borderColor: '#39afb5',
                        width:25,
                        marginRight:8
                        }}
                    cellStyleFocused={{
                        borderColor: '#39afb5',
                        }}
                    onFulfill={this.changeCode}
                    value={confirmCode}
                    onTextChange={confirmCode => this.setState({ confirmCode })}
                /></Fragment>
                :null
                }
                
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

export default connect(mapStateToProps)(ChangePin)

const styles = StyleSheet.create({
    continer: {
        flex: 1
    },
    text: {
        color: color,
        fontSize: 15,
        marginBottom:5,
        fontWeight:'700'
    },
    forgotPassword: {
        color: color,
        fontSize: 15,
        fontWeight: '700'
    }
})