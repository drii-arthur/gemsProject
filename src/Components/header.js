import React from 'react'
import Icon  from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import {withNavigation} from 'react-navigation'

const {height} = Dimensions.get('window')
class Header extends React.Component{
    render(){

        return(
            <View style={styles.header}>
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}} style={styles.button}>
                <Icon name={'ios-arrow-back'} size={24} color='#fff' />
            </TouchableOpacity>
            
                <Text style={styles.text}>
                {this.props.title}
                </Text>
            </View>
        )
    }
}

export default withNavigation(Header)

const styles = StyleSheet.create({
     header:{
        paddingTop:25,
        backgroundColor:'#39AFB5',
        height:height/9,
        elevation:4,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:18,
        marginLeft:20
    },
    button:{
        paddingHorizontal:10,
        height:55,
        width:40,
        alignItems:'center',
        justifyContent:'center'
    }
})