import React from 'react'
import {View,Text,ImageBackground,StatusBar,ScrollView} from 'react-native'
import Footer from '../Components/footer'
import CardAccounts from '../Components/cardAccount'

class Accounts extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#39afb5' />
                <CardAccounts />
                <ScrollView style={{flex:1}}>
                    <Text>Kode Referral</Text>
                </ScrollView>
                <View>
                    <Footer />
                </View>
            </View>
        )
    }
}

export default Accounts