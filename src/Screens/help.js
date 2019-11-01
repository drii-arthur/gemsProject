import React from 'react'
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Components/header'

const {height,width} = Dimensions.get('window')
class Help extends React.Component{
    render(){
        return(
            <View style={{flex:1,marginTop:25}}>
           <StatusBar backgroundColor='#39afb5' />
                <Header title='Help' />                
                <View>
                </View>
            </View>
        )
    }
}

export default Help

const styles = StyleSheet.create({
    header: { 
        height:55,
        elevation:3,
        backgroundColor:'#39afb5',
        alignItems:'center',
        paddingHorizontal:16,
        flexDirection:'row',
        marginTop:20
    },
    textHeader: {
        color:'#fff',
        marginLeft:25,
        fontSize:18,
        fontWeight:'700'
    }
})