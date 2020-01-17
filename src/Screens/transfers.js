import React,{Component} from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    Keyboard
    } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage'
import {transfer} from '../Public/Actions/transaction'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import {Toast} from 'native-base'
import SweetAlert from 'react-native-sweet-alert'

import CardSaldo from '../Components/cardSaldoTopup'
import HeaderTransaction from '../Components/headerTransaction'
import Button from '../Components/button'
import PinTransaction from '../Components/PinTransaction'
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
                    ref={props._refs}
                    onSubmitEditing={props.submit}
                    returnKeyType='next'
                    />
                </View>
    )
}



class Transfer extends Component{
        constructor(props){
            super(props)
            this.state = {
                phone:'',
                nominal:'',
                pesan:'',
                token:'',
                isLoading:false,
                modalVisible: false,
                showButton:true,
                modalVisible2:false,
                kodeTelpon:'+62',
                kodeContact:false,
                errorMessage:''
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
// call get data from contact
                this.getDataNumber()
            })
            this.getDataNumber()

// call metode handle keyboard
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnMount (){
        subs.remove()
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

// handle keyboard
    _keyboardDidShow = () => {
    this.setState({showButton:false})
    
    }

    _keyboardDidHide = () => {
            this.setState({showButton:true})
    
    }
// end of handle keyboard


// metode handle transaction
    handleTransfer = async () => {
        this.setState({isLoading:true})
        await this.props.dispatch(transfer({
            phone:this.state.kodeContact == false ? this.state.kodeTelpon+this.state.phone : this.state.phone,
            status_invoice:'GEMSOUT',
            code_invoice:'',
            category:'C',
            subject:'TRANSFER',
            description:this.state.pesan,
            amount:this.state.nominal,
            tax:'300',
            perangkat:'Mobile',
            },this.state.token))
        .then(res => {
            console.log(res)
            SweetAlert.showAlertWithOptions({
            title: 'Transaksi Berhasil',
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#000',
            otherButtonTitle: 'Cancel',
            otherButtonColor: '#dedede',
            style: 'success',
            cancellable: true
            },this.resetForm)
            this.setState({isLoading:false})
            
        })
        .catch(err => {
            // alert(this.props.transaction.errMessage)
            const errorMessage = this.props.transaction.errMessage
            SweetAlert.showAlertWithOptions({
            title: 'SomeThing Wrong' ,
            subTitle: errorMessage.toString(),
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#000',
            otherButtonTitle: 'Cancel',
            otherButtonColor: '#dedede',
            style: 'error',
            cancellable: true
            },this.resetForm)
            this.setState({isLoading:false})
            
        })
    }
// end of metode handle transaction


// metode handle get data from contact
        getDataNumber =  () => {
            let contact = this.props.navigation.getParam('nomor')
            if(contact != undefined){
            this.setState({
                phone:contact,
                kodeContact:true
            })
            }
        }
// end of metode handle data from contact


        setModalVisible(visible) {
            if(this.state.phone.length < 10 || this.state.phone.length > 14){
            Toast.show({
            text: 'nomor tidak valid',
            type: "danger",
            position:'top',
            duration:1500,
            // style:styles.toast
            })
            this.setState({isLoading:false})
        }else if(this.state.nominal == ''){
            Toast.show({
            text: 'nominal tidak boleh kosong',
            type: "danger",
            position:'top',
            duration:1500,
            })
        }
        else{
        this.setState({modalVisible: visible});
        }
        }

        setModalVisible2(visible2) {
            this.setState({modalVisible2:visible2})
        }

        resetForm = () => {
           this.setState({
               phone:'',
               nominal:'',
               pesan:'',
               isLoading:false
           })
        }

        reset = () => {
        this.setState({
            phone:''
        })
    }

    render(){
        const Detail = (props) => {
            return(
                <View style={{paddingHorizontal:20,flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}>{props.label}</Text>
                    <Text style={{marginRight:10}}>:</Text>
                    <Text style={{flex:2}}>{props.data}</Text>
                </View>
            )
        }

        const ListCard = () => {
            return(
                <LinearGradient 
                colors={['cyan','#39afb5']}
                style={{height:'100%',width:5,position:'absolute',top:0,left:0,borderTopLeftRadius:25,borderBottomLeftRadius:25}}>
                </LinearGradient>
            )
        }
        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Transfer'/>
                <ScrollView style={{flex:1}}>
                
                <View style={[s.wrapperInput]}>
                    <Text style={s.label}>No Ponsel Antar GEMS</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    {!this.state.kodeContact ? 
                        <Text style={{color:'grey'}}>{this.state.kodeTelpon}</Text>
                        :null}
                        <TextInput
                        placeholder='8XX-XXXX_XXXX'
                        keyboardType='numeric'
                        style={s.input}
                        onSubmitEditing={() => {this.nominal.focus()}}
                        returnKeyType='next'
                        onChangeText={(phone) => {this.setState({phone})
                            if(phone.substring(0,1) == 0){
                                    this.reset()
                                }
                        }}
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
                    _refs={(input) => this.nominal = input}
                    submit={() => {this.message.focus()}}
                />

                <View style={{flexDirection: 'row',height:60,marginTop:-15,paddingHorizontal:10}}>
                    <TouchableOpacity 
                    onPress={() => {this.setState({nominal:'50000'})}}
                    style={s.list}>
                    <ListCard />
                        <Text style={s.nominal}>50.000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({nominal:'100000'})}}
                     style={s.list}>
                     <ListCard />
                        <Text style={s.nominal}>100.000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {this.setState({nominal:'200000'})}}
                    style={s.list}>
                    <ListCard />
                        <Text style={s.nominal}>200.000</Text>
                    </TouchableOpacity>
                </View>

                <View style={[s.wrapperInput,{marginTop:10}]}>
                    <Text style={s.label}>Pesan <Text style={{color:'#bdc3c7'}}>(Optional)</Text></Text>
                    <TextInput
                        ref={(input) => this.message = input}
                        placeholder='Masukan Pesan Anda'
                        multiline={true}
                        underlineColorAndroid="transparent"
                        returnKeyType='next'
                        onChangeText={(pesan) => this.setState({pesan})}
                        style={{height:100,backgroundColor:'#f9f9f7',borderRadius:5,marginVertical:5,paddingHorizontal:5,textAlignVertical: 'top'}}
                    />
                </View>

               

                </ScrollView>
                 <PinTransaction visible={this.state.modalVisible2} close={() => {this.setModalVisible2(!this.state.modalVisible2)}} transaction={() => {this.handleTransfer()}} loading={this.state.isLoading} />
                
                {this.state.showButton == true ? 
                <Button title={!this.state.isLoading ? 'TRANSFER' : 'LOADING'} onpress={() => this.setModalVisible(true)} />
                :null}

                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    this.setModalVisible(!this.state.modalVisible)
                    }}>
                    <View style={{flex:1,backgroundColor:'rgba(45, 52, 54,0.5)',elevation:3,justifyContent: 'flex-end'}}>
                        
                    <View style={{backgroundColor:'#fff',paddingTop:20,borderTopLeftRadius: 25,borderTopRightRadius: 25}}>
                    <View style={{height:2,width:40,backgroundColor:'grey',alignSelf:'center',marginBottom:20}}></View>
                    
                        <Detail label='No. Tujuan' data={this.state.kodeContact == false ? this.state.kodeTelpon+this.state.phone : this.state.phone} />
                        <Detail label='Nominal' data={this.state.nominal} />
                        <Detail label='Subject' data={'Transfer'} />
                        <Detail label='Tax' data='300' />
                        <Detail label='Description' data={this.state.pesan} />
                    {/* tombol tombol */}
                    <View style={{flexDirection:'row',marginVertical:10}}>
                        <TouchableHighlight
                        style={{flex:1,justifyContent:'center',alignItems:'center',margin:10,borderColor:'grey',borderWidth:1,borderRadius:5,paddingVertical:7}}
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <Text>Batal</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        style={{flex:1,margin:10,borderColor:'#fff',borderWidth:1,borderRadius:5}}
                        onPress={() => {this.setModalVisible(!this.state.modalVisible),this.setModalVisible2(true)
                        }}>
                            <LinearGradient
                            style={{width:'100%',paddingVertical:7,justifyContent:'center',alignItems:'center',borderRadius:5}}
                            start={{x: 0, y: 1}} 
                            end={{x: 2, y:1.}} 
                            colors={['#39afb5','#326db5']}
                            >
                                <Text style={{color:'#fff'}}>Konfirmasi</Text>
                            </LinearGradient>
                        </TouchableHighlight>
                    </View>
                    {/* akhir tombol tombol */}
                </View>
            </View>
        </Modal >
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
        marginRight:5,
        color:'grey'
    },
    list:{
        margin:10,
        flex:1,
        borderColor:'#39afb5',
        borderWidth:1,
        borderRadius:7,
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative'
    },
    nominal:{
        fontFamily: 'FredokaOne-Regular',
        fontWeight:'bold',
        color:'#39afb5',
        fontSize:14
    }
})