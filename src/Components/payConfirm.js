import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modalbox'
import { View,Text,StyleSheet,FlatList,StatusBar,Dimensions,TouchableOpacity } from "react-native"
import React,{Component} from 'react'

const color = '#39afb5'
const colorP = '#485460'
const {height,width} = Dimensions.get('window')

class PayConfirm extends Component{
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
    render(){
        return(
            <>
            <TouchableOpacity 
                onPress={() => this.refs.modal3.open()}
                style={{width:'47%',alignItems:'center',borderRadius:25,elevation:2,marginTop:20,zIndex:-3}} >
                    <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:25}}>
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Konfirmasi</Text>
                    </LinearGradient>
                </TouchableOpacity>
            <Modal style={[styles.modal, styles.modal3]} position={"bottom"} ref={"modal3"} isDisabled={this.state.isDisabled}>
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
                </>
        )
    }
}

export default PayConfirm
const styles  = StyleSheet.create({
    modal: {
        paddingTop:5,
        paddingHorizontal:16
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