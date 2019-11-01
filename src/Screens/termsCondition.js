import React from 'react'
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Components/header'
import {withNavigation} from 'react-navigation'

const {height,width} = Dimensions.get('window')
class TermsConditions extends React.Component{
    render(){
        return(
            <View style={{flex:1,marginTop:25}}>
            <StatusBar backgroundColor='#39afb5' />
                <Header title='Terms & Conditions' />
                
                <View>
                </View>
            </View>
        )
    }
}

export default withNavigation(TermsConditions)

const styles = StyleSheet.create({
   
})