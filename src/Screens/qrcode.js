import React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet
    } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import Barcode from 'react-native-barcode-builder'
import Header from '../Components/header'
import {connect} from 'react-redux'
import {qrCode} from '../Public/Actions/Qr'
import AsyncStorage from '@react-native-community/async-storage'


const {height,width} = Dimensions.get('window')
const mainColor = '#39afb5'


class QrCode extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            token:'',
            qrCode:'gems'
        }
        }
        
        componentDidMount = async () => {
            const token  = await AsyncStorage.getItem('token', (err,res) => {
                if(res) {
                    this.setState({token:res})
                }
            })
            await this.props.dispatch(qrCode(this.state.token))
            .then(res => {
                console.log(res.action.payload.data.data);
                this.setState({qrCode:res.action.payload.data.data})
                
            })
            .catch(err => {
                console.log(err)
                
            })
        }
    
    render(){
        return(
            <View>
            <Header title='Barcode'/>
                <View style={s.container}>
                    <Text style={{marginHorizontal:20,textAlign:'center'}}>
                        Scan QR Code ini Untuk Melakukan Transaksi
                    </Text>
                    <View style={s.scan}>
                    <QRCode
                        value={this.state.qrCode}
                        logo={require('../Assets/Icons/logoscan.png')}
                        logoSize={30}
                        size={200}
                    />
                    </View>
                    <View style={{borderRadius:5,elevation:2,padding:5}}>
                    </View>

                    {/* <View style={[s.clip,s.garis]}>
                        <View style={{backgroundColor:mainColor,height:1,width:'100%'}}></View>
                    </View>
                    <View style={[s.clip,s.leftClip]}></View>
                    <View style={[s.clip,s.rightClip]}></View> */}

                </View>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        Qr: state.Qr
    };
};

export default connect(mapStateToProps)(QrCode)

const s =  StyleSheet.create({
    container:{
        justifyContent:'center',
        marginVertical:50,
        alignItems:'center',
        marginHorizontal:35,
        paddingVertical: 35,
        borderRadius:5,
        position:'relative',
        borderColor:mainColor,
        borderWidth:1,
    },
    clip:{
        position:'absolute',
        bottom:height/6,
        height:30,
        width:15,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:mainColor,
    },
    rightClip:{
        borderTopLeftRadius:25,
        borderBottomLeftRadius: 25,
        borderRightWidth:0,
        right:-1
    },
    leftClip:{
        borderTopRightRadius:25,
        borderBottomRightRadius: 25,
        borderLeftWidth:0,
        left:-1,
    },
    scan:{
        marginVertical:35,
        borderRadius:10,
        paddingBottom:25,
        paddingHorizontal: 35,
    },
    garis:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:30,
        borderWidth:0
    }
})