import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,Picker,StatusBar,TouchableOpacity,Dimensions } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../Components/header'
// import PayConfirm from '../Components/payConfirm'
import Modal from 'react-native-modalbox'
import LinearGradient from 'react-native-linear-gradient'


const color = '#39afb5'
const colorP = '#485460'
const {height,width} = Dimensions.get('window')
class Pln extends Component{
    constructor(props){
        super(props)
        this.state = {
           noMeter:'',
           payAs:'',
           prabayar:false,
           isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
            coverScreen:false
        }
    }


    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View style={{flex:1}}>
                 <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.2)" translucent={true} />            
                <Header title='PLN' />
            <View style={styles.wrapperInput}>
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

        {this.state.prabayar ? 
            (<>
        <Text style={{color:'#39afb5',alignSelf:'flex-start',marginLeft:15,fontWeight:'bold',fontSize:15}}>
            Pilih Bulan
            </Text>
            <RNPickerSelect
            style={{height:100,backgroundColor:'red'}}
            onValueChange={(value) => 
                console.warn(value)}
            items={[
                { label: 'Januari', value: 'Januari' },
                { label: 'February', value: 'February' },
            ]}
            />
            </> )
            : null }

            <Input
            disabled={this.state.noMeter.length == 10 ? true : false}
            inputContainerStyle={{borderBottomColor:'#ecf0f1',}}
            keyboardType='numeric'
            label='No Meter / ID Pelanggan'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='0000.0000.0000'
            inputStyle={styles.textinput}
            onChangeText={(noMeter) => {this.setState({noMeter})}}
            value={this.state.noMeter}
            />

            {/* <TouchableOpacity 
                onPress={() => this.refs.modal3.open()}
                style={{width:'47%',alignItems:'center',borderRadius:25,elevation:2,marginTop:20}} >
                    <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:25}}>
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Konfirmasi</Text>
                    </LinearGradient>
                </TouchableOpacity> */}
            
            </View>
            {this.state.noMeter.length == 10 ? this.refs.modal3.open() : null}
            <Modal 
            style={[styles.modal, styles.modal3]} position={"bottom"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={[styles.text]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Telpon : {this.state.phone}</Text>
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

export default Pln

const styles = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:10,
        marginTop:50,
        alignItems:'center',
        marginBottom:20
    },
    textinput:{
        color:'#505050'
    },
    picker:{
        backgroundColor:'tomato'
    },
    modal: {
        paddingTop:5,
        paddingHorizontal:16,
    },
    modal3: {
    height: height/2,
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