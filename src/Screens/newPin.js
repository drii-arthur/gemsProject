import React,{Component,Fragment} from 'react';
import { View, Text, StatusBar, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { withNavigation } from 'react-navigation'
import {pin} from '../Public/Actions/users'
import {connect} from 'react-redux'

const color = '#39afb5'
class NewPin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            confirmCode:'',
            confirmPin:false,
            iduser:this.props.navigation.getParam('iduser')
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
            await this.props.dispatch(pin({pin:this.state.code,pin_confirm:confirmCode,iduser:this.state.iduser}))
            .then(res => {
                console.warn(res)
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
                <Text style={styles.text}>BUAT PIN BARU</Text>
                <View style={{height:2,backgroundColor:color,marginBottom:30,width:50}}></View>
                
                <SmoothPinCodeInput
                    placeholder={<View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 25,
                        backgroundColor: 'transparent',
                        borderColor: color,
                        borderWidth: 2
                    }}></View>}
                    mask={<View style={{
                        width: 7,
                        height: 7,
                        borderRadius: 25,
                        backgroundColor: color,
                    }}></View>}
                    codeLength={6}
                    ref={this.pinInput}
                    cellSpacing={0}
                    textStyle={{color:color,fontSize:20}}
                    keyboardType='numeric'
                    autoFocus={true}
                    maskDelay={100}
                    password={true}
                    cellStyle={null}
                    cellStyleFocused={null}
                    onFulfill={this.newPin}
                    value={code}
                    onTextChange={code => this.setState({ code })}
                />

                {this.state.confirmPin == true ?
                <Fragment>
                <Text style={[styles.text,{marginTop:20}]}>KONFIRMASI PIN</Text>
                <View style={{height:2,backgroundColor:color,marginBottom:30,width:50}}></View>
                <SmoothPinCodeInput
                    placeholder={<View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 25,
                        backgroundColor: 'transparent',
                        borderColor: color,
                        borderWidth: 2
                    }}></View>}
                    mask={<View style={{
                        width: 7,
                        height: 7,
                        borderRadius: 25,
                        backgroundColor: color,
                    }}></View>}
                    codeLength={6}
                    ref={this.pinInput}
                    keyboardType='numeric'
                    autoFocus={true}
                    maskDelay={100}
                    password={true}
                    cellStyle={null}
                    cellStyleFocused={null}
                    onFulfill={this._checkCode}
                    value={confirmCode}
                    onTextChange={confirmCode => this.setState({ confirmCode })}
                /></Fragment> : <Text></Text>
                }
                

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
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingTop: 50
    },
    text: {
        color: color,
        fontSize: 15,
        marginBottom:15,
    },
    forgotPassword: {
        color: color,
        fontSize: 15,
        fontWeight: '700'
    }
})