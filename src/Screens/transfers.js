import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
    } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage'
import {transfer} from '../Public/Actions/transaction'
import {connect} from 'react-redux'

import CardSaldo from '../Components/cardSaldoTopup'
import HeaderTransaction from '../Components/headerTransaction'
import Button from '../Components/button'

const Input = (props) => {
    return(
        <View style={s.wrapperInput}>
                    <Text style={s.label}>{props.label}</Text>
                    <TextInput
                    placeholder={props.placeholder}
                    keyboardType='numeric'
                    style={s.input}
                    onChangeText={props.onchange}
                    value={props.value}
                    />
                </View>
    )
}

class Transfer extends React.Component{
     constructor(props){
            super(props)
            this.state = {
                phone:'',
                nominal:'',
                pesan:'',
                token:'',
                isLoading:false
            }
     }

    componentDidMount = async () => {
        const token = AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({token:res})
            }
        })
        const subs = 
            this.props.navigation.addListener('willFocus', () => {
                this.getDataNumber()
            })

            this.getDataNumber()           
        }
    componentWillUnMount (){
        subs.remove()
    }

    handleTransfer = async () => {
        this.setState({isLoading:true})
        await this.props.dispatch(transfer({
            phone:this.state.phone,
            status_invoice:'GEMSOUT',
            code_invoice:'',
            subject:'TRANSFER',
            description:this.state.pesan,
            amount:this.state.nominal,
            tax:'300',
            perangkat:'Mobile'
            },this.state.token))
        .then(res => {
            console.log(res)
            alert('transfer berhasil')
            this.setState({isLoading:false})
            
        })
        .catch(err => {
            console.log(err)
            this.setState({isLoading:false})
            
        })
    }

        getDataNumber =  () => {
            let contact = this.props.navigation.getParam('nomor')
            if(contact != undefined){
            this.setState({
                phone:contact
            })
            }
        }
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Transfer'/>
                <ScrollView style={{flex:1}}>
                
                <View style={[s.wrapperInput]}>
                    <Text style={s.label}>No Ponsel Antar GEMS</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TextInput
                        placeholder='08XX-XXXX_XXXX'
                        keyboardType='numeric'
                        style={s.input}
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}>
                        </TextInput>
                        <Icon name='md-person' size={24} color='#39afb5' style={{marginRight:15}} onPress={() => {this.props.navigation.navigate('Contact')}} />
                        <Icon name='md-qr-scanner' size={24} color='#39afb5' onPress={() => {this.props.navigation.navigate('ScanScreen')}} />
                    </View>
                    
                </View>

                <Input 
                    placeholder='Min Transfer 50000'
                    label='Nominal Transfer'
                    onchange={(nominal) => {this.setState({nominal})}}
                    value={this.state.nominal}
                />

                <View style={{flexDirection: 'row',height:60,marginTop:-15,paddingHorizontal:10}}>
                    <TouchableOpacity 
                    onPress={() => {this.setState({nominal:'50000'})}}
                    style={s.list}>
                        <Text>50.000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({nominal:'100000'})}}
                     style={s.list}>
                        <Text>100.000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {this.setState({nominal:'200000'})}}
                    style={s.list}>
                        <Text>200.000</Text>
                    </TouchableOpacity>
                </View>

                <View style={[s.wrapperInput,{marginTop:10}]}>
                    <Text style={s.label}>Pesan</Text>
                    <TextInput
                        placeholder='Masukan Pesan Anda'
                        multiline={true}
                        underlineColorAndroid="transparent"
                        onChangeText={(pesan) => this.setState({pesan})}
                        style={{height:100,backgroundColor:'#f9f9f7',borderRadius:5,marginVertical:5,paddingHorizontal:5,textAlignVertical: 'top'}}
                    />
                </View>

                </ScrollView>
                

                <Button title={!this.state.isLoading ? 'TRANSFER' : 'LOADING'} onpress={() => this.handleTransfer()} />

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        transaction: state.transaction
    }
}

export default connect(mapStateToProps)(Transfer)


const s = StyleSheet.create({
    wrapperInput:{
        marginBottom:10,
        paddingHorizontal:15
    },
    label:{
        color:'#39afb5',
        fontWeight:'700'
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#f9f9f7',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5,
        marginVertical:5,
        flex:1,
        marginRight:5
    },
    list:{
        margin:10,
        flex:1,
        borderColor:'grey',
        borderWidth:1,
        borderRadius:7,
        justifyContent: 'center',
        alignItems: 'center',
    }
})