import React from 'react'
import {View,Text,Dimensions} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import Barcode from 'react-native-barcode-builder'
import Header from '../Components/header'

const {height,width} = Dimensions.get('window')
class QrCode extends React.Component{
    render(){
        return(
            <View>
            <Header title='Barcode'/>
               <View style={{justifyContent:'center',marginVertical:50,alignItems:'center'}}>
                   <Text>
                       Scan QR Code ini Untuk Melakukan Transaksi
                   </Text>
                   <View style={{marginVertical:50,borderRadius:10,elevation:2,padding:20}}>
                   <QRCode
                        value="jancook"
                        logo={require('../Assets/Icons/logoscan.png')}
                        logoSize={30}
                        size={160}
                    />
                   </View>
                   <View style={{borderRadius:10,elevation:2,padding:5}}>
                   <Barcode
                   value="1234567890123456"
                   format="CODE128"
                   height={height/18}
                   width={1.4}                  
                    />
                   </View>
               </View>
            </View>
        )
    }
}

export default QrCode