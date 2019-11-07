import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar,Dimensions,TouchableOpacity,ScrollView } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import CardPulsa from '../Components/cardPulsa.js'
import Header from '../Components/header'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modalbox'

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
        //    contact: this.props.navigation.getParam('nomor')
        }
    }


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
    }

    // componentWillMount(){
    //     const phoneNumber = this.props.navigation.getParam('nomor')
    //     if(phoneNumber !== undefined) {
    //         this.setState({
    //             contact:phoneNumber
    //         })
    //         console.warn(this.state.contact,'contact')
    //     }
    //     else{
    //         this.setState({
    //             contact:''
    //         })
    //     }
        
    // }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const price = this.props.price
        console.warn(price)
        const {data} = this.state
        const contact = this.props.navigation.getParam('nomor')
        const {phone} = this.state
        console.warn(phone);
        
        return(
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
                <Header title='Pulsa' />
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
            <CardPulsa check={this.state.phone} getContact={contact} press={() => this.refs.modal3.open()}/>
             <Modal style={[styles.modal, styles.modal3]} position={"bottom"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={[styles.text]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Telpon : {this.state.phone || contact}</Text>
                    <Text style={styles.textP}>Operator : </Text>
                    <Text style={styles.textP}>Metode Pembayaran : GEMS Cash </Text>
                    <Text style={{fontSize:16,color:'black'}}>Detail</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.textP}>Pulsa</Text>
                    <Text style={styles.textP}>20.000{this.props.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:colorP,paddingBottom:3}}>
                    <Text style={styles.textP}>Harga</Text>
                    <Text style={styles.textP}>20.000{this.props.data}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18}}>Total</Text>
                    <Text>20.000</Text>
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

export default Pulsa

const styles = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:10,
        marginTop:50,
        alignItems:'center',
        marginBottom:20
    },
    textinput:{
    },
    modal: {
        paddingTop:5,
        paddingHorizontal:16
    },
    modal3: {
    height: height/2.3,
    width: width
    },
    text: {
        fontSize:15,
        color: color,
        textAlign:'center',
        marginVertical:5
    },
    textP:{
        color:colorP,
        marginBottom:5
    }
})