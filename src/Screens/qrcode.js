import React from 'react'
import {View,Text} from 'react-native'

class QrCode extends React.Component{
    render(){
        return(
            <View>
               <View style={{justifyContent:'center',marginVertical:50,alignItems:'center'}}>
                   <Text>
                       Scan QR Code ini Untuk Melakukan Transaksi
                   </Text>
               </View>
            </View>
        )
    }
}

export default QrCode