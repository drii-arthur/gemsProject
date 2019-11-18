import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,Picker,StatusBar,Image,Dimensions,TouchableOpacity } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import RNPickerSelect from 'react-native-picker-select'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modalbox'
import Header from '../Components/header'

const {height,width} = Dimensions.get('window')
const color = '#39afb5'
const colorP = '#485460'
class Bpjs extends Component{
    constructor(props){
        super(props)
        this.state = {
           noBpjs:'',
           payAs:'',
           isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
        }
    }


    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const data = {
            nomor : '081234567890',
            nama : 'Hengky'
        }
        console.log(this.state.noBpjs)
        return(
            <View style={{flex:1}}>
                 <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />            
                <Header title='BPJS' />            
            <View style={styles.wrapperInput}>

            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label='Masukan Nomor Anggota Anda'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='Masukan No BPJS anda'
            inputStyle={styles.textinput}
            onChangeText={(noBpjs) => {this.setState({noBpjs})}}
            // value={this.state.phone}
            />
            </View>
            {this.state.noBpjs == data.nomor ? this.refs.modal3.open()      
            : null
            }
            {this.state.noBpjs !== data.nomor && this.state.noBpjs.length == 12 ? (<View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                <View style={{width:200,height:200,marginBottom:20}}>
                <Image source={require('../Assets/Images/Notfound.png')} style={{width:undefined,height:undefined,flex:1}} resizeMode='contain' />
                </View>
                <Text style={{color:'#505050'}}>Data Tidak Di Temukan !!!</Text>
            </View>):null}

            <Modal style={[styles.modal, styles.modal3]} position={"bottom"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={[styles.text]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Keanggotaan BPJS : <Text style={{fontSize:15,fontWeight:'700'}}>{data.nomor}</Text></Text>
                    <Text style={styles.textP}>Nama Anggota : <Text style={{fontSize:15,fontWeight:'700'}}>{data.nama}</Text> </Text>
                    <Text style={styles.textP}>Metode Pembayaran : GEMS Cash </Text>
                    <Text style={{fontSize:18,color:'black',marginVertical:3}}>Detail</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between', paddingHorizontal:10}}>
                    <Text style={styles.textP}>BPJS</Text>
                    <Text style={styles.textP}>20.000{this.props.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#f9f9f7',paddingBottom:3,paddingHorizontal:10}}>
                    <Text style={styles.textP}>Harga</Text>
                    <Text style={styles.textP}>20.000{this.props.data}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18}}>Total</Text>
                    <Text style={{fontSize:18}}>20.000</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity
                            style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10}} >
                        <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:5}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Bayar</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={() => this.refs.modal3.close()}
                            style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}} >
                            <Text>Batalkan</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Bpjs

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#39AFB5',
        paddingVertical:12,
        paddingHorizontal:20,
        elevation:4,
        flexDirection:'row'
    },
    text:{
        color:'#fff',
        fontSize:18,
        marginLeft:20
    },
    wrapperInput:{
        paddingHorizontal:10,
        marginTop:50,
        alignItems:'center',
        marginBottom:20,
    },
    textinput:{
    },
    picker:{
        backgroundColor:'tomato'
    },
    modal: {
        paddingTop:5,
        paddingHorizontal:16,
        justifyContent:'center'
    },
    modal3: {
    height: height/2,
    width: width
    },
    text: {
        fontSize:17,
        color: color,
        textAlign:'center',
        marginBottom:10
    },
    textP:{
        color:colorP,
        marginBottom:5
    }
})