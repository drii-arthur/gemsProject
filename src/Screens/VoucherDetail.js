import React, { Component } from "react"
import { 
    View,
    Text,
    touchableOpacity,
    Dimensions,
    StyleSheet,
    ImageBackground
    } from "react-native"

import Header from '../Components/header'

const {height,width} = Dimensions.get('window')
class VoucherDetail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Header title='Voucher' />
            </View>
        )
    }
}
export default VoucherDetail