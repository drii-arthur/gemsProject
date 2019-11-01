import React from 'react'
import Icon  from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'


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
        backgroundColor:'#39AFB5',
        height:55,
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