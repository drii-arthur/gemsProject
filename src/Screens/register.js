import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    StatusBar,
    Dimensions,
    Image,
    ImageBackground,
    Linking
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient'
import {signup} from '../Public/Actions/users'
import {connect} from 'react-redux'
import Icons from 'react-native-vector-icons/Ionicons'
import Font from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'


const Input = (props) => {
    return(
        <View style={styles.wrapperInput}>
                <Font name={props.icon} size={props.size} color={mainColor} />
                <TextInput 
                placeholder={props.title}
                onChangeText={props.onChange}
                style={styles.TextInput}
                value={props.value}
                keyboardType={props.type}
                returnKeyType={props.next}
                onSubmitEditing={props.submit}
                ref={props._refs}
                />
            </View>
    )
}

const Alert = (props) => {
    return(
        <View style={{width:width,position:'absolute',height:50,top:15,left:0,paddingHorizontal:25}}>
            <View style={{backgroundColor:'rgba(231, 76, 60,0.2)',flex:1,borderRadius:5,flexDirection:'row',alignItems:'center',paddingHorizontal:10,borderColor:'rgba(192, 57, 43,0.8)',borderWidth:2}}>
                <Icons name='md-alert' size={24} color="#c0392b" />
                <Text style={{color:'#c0392b',marginLeft:10,fontWeight:'700'}}>{props.message}</Text>
            </View>
        </View>
    )
} 


const {height,width} = Dimensions.get('window')
const mainColor = '#39afb5'
class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            code:this.props.navigation.getParam('codeConfirm'),
            email:'',
            status:1,
            token:this.props.navigation.getParam('token'),
            perangkat:'Mobile',
            checked:false,
            error:false,
            errorMessage:''
        }
    }

    _checked = () => {
        this.setState({
            checked:true
        })
    }

    _handleInput = (teks,name) => {
        this.setState({
            [name]:teks
        })
    }

    _hideError = () => {
        setTimeout(() => {
            this.setState({error:false})
        }, 2000)
    }

    emailRegex = (email) => {
        //One or more after '@' and minimum domain 2 character
        let emailRegex = /^[\d\w\._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    handleRegister = async () => {
        if(this.state.name == ''){
            this.setState({
                error:true,
                errorMessage:'Nama Tidak Boleh Kosong !!!'
            },() => {this._hideError()})
            
        }
        else if(this.state.email == ''){
            this.setState({
                error:true,
                errorMessage:'Email Tidak Boleh Kosong !!!'
            },() => {this._hideError()})
        }
        else if(!this.emailRegex(this.state.email)){
            this.setState({
                error:true,
                errorMessage:'Email Tidak Valid !!!'
            },() => {this._hideError()})
        }
        else if(this.state.checked == false){
            this.setState({
                error:true,
                errorMessage:'Mohon Centang Syarat dan ketentuan'
            },() => {this._hideError()})
        }
        else{
        await this.props.dispatch(signup({ 
            name:this.state.name,
            otp:this.state.code,
            email:this.state.email,
            status:this.state.status,
            perangkat:this.state.perangkat
            },
            this.state.token
            ))
        .then(res => {
            const dataObj = res.action.payload.data.data
            const token2 = dataObj.token
            const statustype = dataObj.role
            const name = dataObj.name
            const phone = dataObj.phone
            console.warn(statustype,'status2');
            
            AsyncStorage.setItem('accountType',(statustype))
            AsyncStorage.setItem('name',(name))
            AsyncStorage.setItem('phone',(phone))
            AsyncStorage.setItem('token',(token2))
            this.props.navigation.navigate('NewPin',{token2})
        })
        .catch(err => {
            const otpCode = this.props.users.errMessage
            console.log(this.props.users.errMessage)
            console.log(err)
        })

    }
    }

    render(){
        
        
        return(
            <ScrollView style={{flex: 1}}>
             <StatusBar backgroundColor='#39afb5' />
                 <ImageBackground
                 imageStyle={{borderBottomLeftRadius:35}}
                    source={require('../Assets/Images/bg1.png')}
                    resizeMode='cover'
                    style={styles.wrapperTop}>
                     <TouchableOpacity 
                    onPress={() => {this.props.navigation.goBack()}}
                    style={{height:height/15,width:width/7,position:'absolute',top:0,justifyContent:'center',left:0,alignItems:'center'}}>
                    <Icons name='ios-arrow-back' size={24} color='#fff' />
                    </TouchableOpacity>

                    <View style={{flex:1}}></View>
                    {/* logo */}
                    <View style={styles.wrapperLogo}>
                       <Image source={require('../Assets/Icons/Logo_gems.png')} resizeMode='contain' style={styles.image} /> 
                    </View>
                    {/* end of logo */}
                    
                    {/* teks daftar akun */}
                    <View style={styles.wrapperRegisTer}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.teksRegister}>Daftar Akun</Text>
                        <Font name='users' size={22} color='#fff' />
                        </View>
                    </View>
                    {/* end of teks daftar akun */}
                </ImageBackground>

                <View style={styles.wrapperCenter}>
                    {this.state.error ? 
                    <Alert message={this.state.errorMessage} />
                    :null}

                    <Input 
                    icon='user' 
                    size={16}
                    title='Masukan Nama Lengkap' 
                    onChange={(teks) => {this._handleInput(teks,'name')}}
                    value={this.state.name}
                    next='next'
                    submit={() => {this.emailInput.focus()}}
                     />

                    <Input 
                    icon='envelope'
                    size={12} 
                    title='Masukan Alamat Email' 
                    onChange={(teks) => {this._handleInput(teks,'email')}}
                    value={this.state.email}
                    type='email-address'
                    _refs={(input) => this.emailInput = input}
                    />


                    <View style={{flexDirection:'row'}}>
                        <CheckBox
                        checked={this.state.checked}
                        size={20}
                        checkedIcon={<Icons name='md-checkbox' size={20} color={mainColor} onPress={() => this.setState({checked:false})} />}
                        containerStyle={{padding:0}}
                        onPress={this._checked}
                        />
                        <Text style={{color:'grey',fontSize:12}}>
                            Dengan Melanjutkan Saya Setuju Dengan <Text onPress={() => Linking.openURL('https://gems.id/terms.html')} style={{color:'#39afb5',fontWeight:'bold'}}>SYARAT & KETENTUAN</Text> & <Text onPress={() => Linking.openURL('https://gems.id/privacy.html') } style={{color:'#39afb5',fontWeight:'bold'}}>KEBIJAKAN PRIVASI</Text>
                        </Text>
                        
                    </View>

                    <TouchableOpacity 
                    onPress={this.handleRegister}
                    style={styles.button}>
                        <LinearGradient
                        start={{x:1,y:0}}
                        end={{x:0,y:1}}
                        colors={[mainColor,'#57bfed']}
                        style={[styles.button,{marginTop:0,paddingVertical:10}]}
                        >
                            <Text style={styles.textButton}>DAFTAR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.wrapperBottom}>

            </View>
        </ScrollView>
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
    TextInput:{
        paddingLeft:10,
        height:40,
        fontSize:15,
        fontFamily:'roboto',
        },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#39afb5',
        borderRadius:25,
        marginTop:50,
        width:width/1.2,
        elevation:3
    },
    textButton:{
        color:'#fff',
        fontSize:14,
        fontWeight:'700'
    },
    wrapperTop:{
        alignItems: 'center',
        height:height/3.2,
        justifyContent:'center',
        borderBottomLeftRadius:50,
        elevation:3
    },
    wrapperBottom:{
        justifyContent:'center',
        alignItems:'center',
    },
    wrapperLogo:{
        width:width/3,
        height:20,
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    wrapperRegisTer:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        width:width,
        paddingRight:25,
        paddingBottom:25
    },
    teksRegister:{
        fontSize:18,
        fontFamily:'roboto',
        color:'#fff',
        marginRight:10
    },
    wrapperInput:{
        backgroundColor:'#fff',
        width:width/1.2,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        marginBottom:20,
        height:height/15,
        borderBottomWidth: 1,
        borderBottomColor: '#39afb5',
    },
    wrapperCenter:{
        height:height/1.6,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:35,
        position:'relative'
    }
})