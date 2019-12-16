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
    Keyboard
    } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import HeaderTransaction from '../Components/headerTransaction'
import Button from '../Components/button';

const {height,width} = Dimensions.get('window')
class TarikSaldo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addBank: false,
            bank:'',
            hideButton:false,
        }
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        this.keyboardDidShow(),
    );
        this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        this.keyboardDidHide(),
        );
    }

    componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = () => {
        this.setState({hideButton:false})
    }


    keyboardDidHide = () => {
        this.setState({
            hideButton:true
        })
    }

    render(){
        const Input = (props) => {
            return(
                <View style={s.wrapperInput} >
                    <Text style={s.label}>{props.label}</Text>
                    <TextInput
                        // onSubmitEditing={Keyboard.dismiss}
                        placeholder={props.placeholder}
                        keyboardType={props.type}
                        style={[s.input,props.styleInput]}>
                    </TextInput>
                </View>
            )
        }
        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Withdraw' />
                <ScrollView style={{flex:1}}>
                <Input 
                    label='Nominal Withdraw'
                    placeholder='Masukan Nominal'
                    type='numeric'
                />

                <View>
                    <View style={{backgroundColor:'#f9f9f7',paddingVertical:5,paddingHorizontal:20}}>                
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
                    <View style={[s.wrapperInput]}>
                    <Text style={s.label}>Pilih Akun Bank</Text>
                    <Picker
                    selectedValue={this.state.bank}
                    style={{height: 40, width: '100%',backgroundColor:'#fff',justifyContent:'center',padding:0}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({bank: itemValue})
                    }>
                    <Picker.Item label="..." value="" />
                    <Picker.Item label="PT.BANK CABANG ASIA TBK" value="BCA" />
                    <Picker.Item label="PT.Bank Mandiri TBK" value="MANDIRI" />
                    </Picker>
                    </View>

                    <Input 
                    label='No Rekening'
                    placeholder='xxxx-xxxx-xxxx'
                    type='numeric'
                    styleInput={{backgroundColor:'#fff',padding:0,alignItems:'center'}}
                    />

                    <Input 
                    label='Nama Rekening'
                    placeholder='xxxx-xxxx-xxxx'
                    type='default'
                    styleInput={{backgroundColor:'#fff'}}
                    />
                    </View>
                :
                <View style={{height:height/2.1}}>
                </View>
                }

                {this.state.addBank == false ? 
                    <Button title='WITHDRAW' styles={{marginTop:5}} />
                : 
                <Button title='Tambah Bank' styles={{marginTop:5}} />
                 }
                </ScrollView>
                
                

            </View>
        )
    }
}

export default TarikSaldo

const s = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:20,
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