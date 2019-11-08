import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    StatusBar
} from 'react-native'
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'

import {signup} from '../Public/Actions/users'
import {connect} from 'react-redux'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            code:this.props.navigation.getParam('codeConfirm'),
            email:'',
            status:1,
            token:this.props.users.token
        }
    }

    handleInput = (teks,name) => {
        this.setState({
            [name]:teks
        })
    }

    handleRegister = async () => {
        await this.props.dispatch(signup({ 
            name:this.state.name,
            otp:this.state.code,
            email:this.state.email,
            status:this.state.status}))
        .then(res => {
            const dataObj = res.action.payload.data
            // this.props.navigation.navigate('Otp',{dataObj})
            console.log(res.action.payload.data,'this is data')
            console.log(code)
        })
        .catch(err => {
            const otpCode = this.props.users.errMessage
            console.log(this.props.users.errMessage)
            console.log(err)
        })
    }

    render(){
        console.warn(this.state.token,'oooo');
        
        console.warn(this.state.name);
        
        
        return(
            <View style={{flex: 1}}>
             <StatusBar backgroundColor='#39afb5' />
            <View style={{ alignItems: 'center',flex:1,justifyContent:'center' }}>
                <Text style={{color:'#39afb5',fontSize:18,}}>Buat <Text style={{fontWeight:'bold'}}> Akun</Text></Text>
                <View style={{height:2,width:50,backgroundColor:'#39afb5',marginTop:10,marginBottom:30}}></View>
                
                <TextInput placeholder='Nama Lengkap'
                onChangeText={(teks) => {this.handleInput(teks,'name')}}
                style={styles.TextInput}
                 />
                 <TextInput placeholder='Email'
                 onChangeText={(teks) => {this.handleInput(teks,'email')}}
                style={styles.TextInput}
                 />
                 {/* <TextInput placeholder='Kode Referal'
                style={{borderBottomWidth:1,
                borderBottomColor:'grey',
                width:'80%',
                paddingLeft:10,
                height:40,
                fontSize:15,
                fontFamily:'roboto',
                marginTop:10
                }}
                 /> */}

                <Text style={{marginHorizontal:50,marginTop:20,color:'#39afb5'}}>
                DENGAN MELANJUTKAN SAYA SETUJU DENGAN SYARAT & KETENTUAN & KEBIJAKAN PRIVASI
                </Text>
                <TouchableOpacity 
                    onPress={this.handleRegister}
                    style={styles.button}>
                        <Text style={styles.textButton}>DAFTAR</Text>
                    </TouchableOpacity>
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

export default connect(mapStateToProps)(Register)
const styles = StyleSheet.create({
    TextInput:{borderBottomWidth:1,
                borderBottomColor:'grey',
                width:'80%',
                paddingLeft:10,
                height:40,
                fontSize:15,
                fontFamily:'roboto',
                marginTop:10
                },
    button:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        width:'100%',
        backgroundColor:'#39afb5',
        borderRadius:25,
        marginTop:30,
        elevation:3,
        width:'50%'
    },
    textButton:{
        color:'#fff',
        fontSize:14,
        fontWeight:'700'
    },
})