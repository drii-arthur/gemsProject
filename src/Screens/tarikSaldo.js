import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    Picker,
    } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {codeBank,addBank} from '../Public/Actions/bank'
import {connect} from 'react-redux'
import HeaderTransaction from '../Components/headerTransaction'
import Button from '../Components/button'
import AsyncStorage from '@react-native-community/async-storage'
import {profile} from '../Public/Actions/users'
import SweetAlert from 'react-native-sweet-alert'

const {height,width} = Dimensions.get('window')
class TarikSaldo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addBank: false,
            bank:'',
            hideButton:false,
            token:'',
            code:[],
            name:'',
            idUser:'',
            perangkat:'Mobile',
            rekening:'',
            nominal:''
        }
    }

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({token:res})
            }
        })
        await this.props.dispatch(codeBank(this.state.token))
        .then(res => {
            this.setState({code:res.action.payload.data.data})
        })
        .catch(err => {
            console.log(err)
        })

        await this.props.dispatch(profile(this.state.token))
        .then(res => {
        let data = res.action.payload.data.data
        this.setState({
        name:data.name,
        idUser:data.id
        })
    
        })
        .catch(err => {
            console.log(err)
        })

    //     this.keyboardDidShowListener = Keyboard.addListener(
    //     'keyboardDidShow',
    //     this.keyboardDidShow(),
    // );
    //     this.keyboardDidHideListener = Keyboard.addListener(
    //     'keyboardDidHide',
    //     this.keyboardDidHide(),
    //     );
    }

    // componentWillUnmount() {
    // this.keyboardDidShowListener.remove();
    // this.keyboardDidHideListener.remove();
    // }

    // method add bank

    addBank = async () => {
        await this.props.dispatch(addBank({
            biodata_id:this.state.idUser.toString(),
            bank_code_id:this.state.bank.toString(),
            name_user_bank:this.state.name,
            rekening_number:this.state.rekening,
            perangkat:this.state.perangkat
        },this.state.token))
        .then(res => {
            console.log(res);
            SweetAlert.showAlertWithOptions({
            title: 'Transaksi Berhasil',
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#000',
            otherButtonTitle: 'Cancel',
            otherButtonColor: '#dedede',
            style: 'success',
            cancellable: true
            },this.resetForm)
            
        })
        .catch(err => {
            console.log(err);
            
        })
    }

     resetForm = () => {
           this.setState({
               nominal:'',
               bank:'',
               rekening:'',
               addBank:false
           })
        }

    // keyboardDidShow = () => {
    //     this.setState({hideButton:false})
    // }


    // keyboardDidHide = () => {
    //     this.setState({
    //         hideButton:true
    //     })
    // }

    render(){
        console.warn(this.state.nominal);
        
        const Input = (props) => {
            return(
                <View style={s.wrapperInput} >
                    <Text style={s.label}>{props.label}</Text>
                    <TextInput
                        onChangeText={props.change}
                        value={props.value}
                        placeholder={props.placeholder}
                        keyboardType={props.type}
                        style={[s.input,props.styleInput]}/>
                </View>
            )
        }

        let codeBank = this.state.code.map( (s, i) => {
            return <Picker.Item key={i} value={s.id} label={s.code} />
        })

        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Withdraw' />
                <ScrollView style={{flex:1}}>
                <View style={s.wrapperInput} >
                    <Text style={s.label}>Masukan Nominal</Text>
                    <TextInput
                        onChangeText={(nominal) => this.setState({nominal})}
                        value={this.state.nominal}
                        placeholder='Masukan Nominal'
                        keyboardType='number'
                        style={[s.input]}/>
                </View>
                {/* <Input
                    value={this.state.nominal}
                    label='Nominal Withdraw'
                    placeholder='Masukan Nominal'
                    type='numeric'
                    change={(nominal) => this.setState({nominal})}
                /> */}

                <View>
                    <View style={{backgroundColor:'#f9f9f7',paddingVertical:5,paddingHorizontal:15}}>                
                        <Text style={s.label}>Pilih Bank</Text>
                    </View>                    
                    <View style={{alignItems:'center',marginVertical:10,}}>
                        <TouchableOpacity onPress={() => {this.setState({addBank:true})}}>
                            <Text style={{color:'#39afb5',fontWeight:'bold',letterSpacing:1}}>Tambah Bank</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                {this.state.addBank ?
                <View style={s.boxBank}>

                    <View style={s.wrapperInput} >
                    <Text style={s.label}>No Rekening</Text>
                    <TextInput
                        onChangeText={(rekening) => this.setState({rekening})}
                        value={this.state.rekening}
                        placeholder='xxxx-xxxx-xxxx'
                        keyboardType='numeric'
                        style={{backgroundColor:'#fff',paddingLeft:5}}/>
                    </View>
                    {/* <Input
                    // value={this.state.rekening}
                    onChange={(rekening) => {this.setState({rekening})}} 
                    label='No Rekening'
                    placeholder='xxxx-xxxx-xxxx'
                    type='numeric'
                    styleInput={{backgroundColor:'#fff',padding:0,alignItems:'center'}}
                    /> */}

                    <View style={[s.wrapperInput]}>
                    <Text style={s.label}>Code Bank</Text>
                    <Picker
                    selectedValue={this.state.bank}
                    style={{width: '100%',backgroundColor:'#fff',justifyContent:'center',padding:0}}
                    onValueChange={(code) => {
                        this.setState({bank:code}),console.log(code);
                        }
                    }>
                    <Picker.Item label="..." value="" />
                    {codeBank}
                    </Picker>
                    </View>

                    <Input 
                    label='Nama Rekening'
                    placeholder='xxxx-xxxx-xxxx'
                    type='default'
                    styleInput={{backgroundColor:'#fff',paddingLeft:5,height:null,color:'grey'}}
                    value={this.state.name}
                    />
                    </View>
                :
                <View style={{height:height/2.1}}>
                </View>
                }
                </ScrollView>

                {this.state.addBank == false ? 
                    <Button title='WITHDRAW' styles={{marginTop:5}} />
                : 
                <Button title='Tambah Bank' styles={{marginTop:5}} onpress={() => {this.addBank()}} />
                }
                

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        bank: state.bank,
        users:state.users
    }
}

export default connect(mapStateToProps)(TarikSaldo)

const s = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:15,
        marginBottom:10,
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#f9f9f7',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5,
        height:40,
        padding:0
    },
    label:{
        color:'#39afb5',
        fontWeight:'700'
    },
    inputBank:{
        paddingHorizontal:20
    },
    boxBank:{
        backgroundColor:'#f9f9f7',
        height:height/2.1,
        paddingVertical:20
    }
})