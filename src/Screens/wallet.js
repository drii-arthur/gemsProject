import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'
import HeaderTransaction from '../Components/headerTransaction'

class Wallet extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Wallet' />
                
                <View style={{paddingHorizontal:20}}>
                    <Text>Wallet</Text>
                </View>
                
            </View>
        )
    }
}

export default Wallet