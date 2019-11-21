import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar,Dimensions,TouchableOpacity,ScrollView,Image,Picker } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import CardPulsa from '../Components/cardPulsa'
import Header from '../Components/header'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modalbox'
import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage from '@react-native-community/async-storage'
import {pulsa} from '../Public/Actions/layanan'
import {connect} from 'react-redux'

const color = '#39afb5'
const colorP = '#485460'
const {height,width} = Dimensions.get('window')
class Pulsa extends Component{
    constructor(props){
        super(props)
        this.state = {
            phone:'',
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
            payAs:'',
            pulsa:[],
            token:'',
            prabayar:false,
            type:'REGULER',
            provider:'TELKOMSEL'
        //    contact: this.props.navigation.getParam('nomor')
        }
    }

    // validateNumber = async () => {
    //     let phone = this.state.phone
    //     if(
    //         phone.substring(0,4) == '0813' ||
    //         phone.substring(0,4) == '0812' ||  
    //         phone.substring(0,4) == '0811' ||    
    //         phone.substring(0,4) == '0822' ||    
    //         phone.substring(0,4) == '0853' ||    
    //         phone.substring(0,4) == '0852' ||    
    //         phone.substring(0,4) == '0823' 
    //         ) {
    //             this.setState({
    //                 type: 'REGULER',
    //                 provider:'TELKOMSEL'
    //             })
    //         }

    //         await this.props.dispatch(pulsa(this.state.type,this.state.provider,this.state.token))
    //     .then(res => {
    //         console.log(res)
    //         this.setState({pulsa:res.action.payload.data.data})
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    // }

    checkNumber = (teks,name) => {
        let contact = this.props.navigation.getParam('nomor')
        if(contact != undefined){
            this.setState({
                [name]:contact,
                phone:''
            })
        }
        this.setState({
            [name]:teks,
        })
        // this.validateNumber()
    }

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({
                    token:res
                })
            }

            this.props.dispatch(pulsa(this.state.type,this.state.provider,this.state.token))
        .then(res => {
            console.log(res)
            this.setState({pulsa:res.action.payload.data.data})
        })
        .catch(err => {
            console.log(err)
        })
        })
        
        
    }


    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const {pulsa} = this.state
        console.log(pulsa,'data pulsa');
        
        const contact = this.props.navigation.getParam('nomor')
        const {phone} = this.state
        console.warn(phone);
        
        return(
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
                <Header title='Pulsa' />
                <View style={{marginTop:25,paddingLeft:5,paddingRight:15}}>
                 <Text style={{color:'#39afb5',alignSelf:'flex-start',marginLeft:15,fontWeight:'bold',fontSize:15}}>
            Jenis Layanan
            </Text>
                <RNPickerSelect
            onValueChange={(value) => {
                if(value == 'Prabayar'){
                    this.setState({
                        prabayar:true
                    })
                }else{
                    this.setState({prabayar:false})
                }
                console.warn(value)}}
            items={[
                { label: 'Prabayar', value: 'Prabayar' },
                { label: 'Pasca Bayar', value: 'pasca bayar' },
            ]}
            />
            </View>

            <View style={styles.wrapperInput}>
            {contact !== '' ? 
            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label='Phone Number'
            labelStyle={{color:color,fontSize:14}}
            placeholder='Masukan No hp anda'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            rightIcon={<Font name={'address-book'} size={24} color={color} onPress={() => {this.props.navigation.navigate('ContactList')}} />}
            >
            <Text>{contact}</Text>
            </Input>
            :
            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label='Phone Number'
            labelStyle={{color:color,fontSize:14}}
            placeholder='Masukan No hp anda'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            rightIcon={<Font name={'address-book'} size={24} color={color} onPress={() => {this.props.navigation.navigate('ContactList')}} />}
            />
            }
            
            </View>
            <CardPulsa check={this.state.phone} pulsa={pulsa} prabayar={this.state.prabayar} getContact={contact} press={() => this.refs.modal3.open()}/>
             <Modal style={[styles.modal, styles.modal3]} position={"bottom"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                <View style={{height:6,justifyContent:'center',alignItems:'center',marginTop:5}}>
                <View style={{backgroundColor:'grey',height:3,width:width/10}}></View>
                </View>
                    <Text style={[styles.text]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Telpon : <Text style={{fontWeight:'700'}}>{phone || contact}</Text></Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.textP}>Operator : </Text>
                        <Image 
                         style={{height:35,width:60}}
                        source={{uri:'https://1.bp.blogspot.com/-C64gdRuVaJM/XW4zTQRSZgI/AAAAAAAABAg/mrYpbD-rYkkmIzv9PZRaK99pDvhpueCLwCLcBGAs/s400/Logo%2BTelkomsel%2BTerbaru.png'}}  />
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={styles.textP}>Metode Pembayaran : </Text>
                        <Picker
                        selectedValue={this.state.language}
                        style={{flex:1,alignItems:'center',height:30,justifyContent:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }
                        itemStyle={{color:'blue',fontSize:13}}
                        >
                        <Picker.Item label="Gems Cash" value="Gems Cash"/>
                        <Picker.Item label="Gems Point" value="Gems Point" />
                        </Picker>
                    </View>
                    
                    
                    <Text style={{fontSize:16,color:color,fontWeight:'700',marginBottom:5}}>Detail</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                    <Text style={styles.textP}>Pulsa</Text>
                    <Text style={styles.textP}>20.000{this.props.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#f9f9f7',paddingBottom:3,paddingHorizontal:10}}>
                    <Text style={styles.textP}>Harga</Text>
                    <Text style={styles.textP}>20.000{this.props.data}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:12}}>
                    <Text style={{fontSize:18,color:colorP,fontWeight:'700'}}>Total</Text>
                    <Text style={{fontSize:18,color:colorP,fontWeight:'700'}}>20.000</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity 
                            style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10}} >
                        <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:5}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Konfirmasi</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => this.refs.modal3.close()} style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}} >
                            <Text>Batalkan</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        layanan: state.layanan
    };
};

export default connect(mapStateToProps)(Pulsa)

const styles = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:10,
        marginVertical:20,
        alignItems:'center'
    },
    textinput:{
    },
    modal: {
        paddingTop:5,
        paddingHorizontal:16,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modal3: {
    height: height/2,
    width: width
    },
    text: {
        fontSize:15,
        color: color,
        textAlign:'center',
        marginVertical:10,
        fontWeight:'700'
    },
    textP:{
        color:colorP,
        marginBottom:5
    }
})