import React from 'react'
import {View,Text} from 'react-native'
import Footer from '../Components/footer'

class Deals extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                <Text>Deals Pages</Text>
                </View>
                <View>
                    <Footer />
                </View>
            </View>
        )
    }
}

export default Deals