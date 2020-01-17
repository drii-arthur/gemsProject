import React from 'react'
import Icon  from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import {withNavigation} from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'


const {height} = Dimensions.get('window')
class Header extends React.Component{
     constructor(props){
            super(props)
        }
    render(){
       

        return(
            <LinearGradient 
            start={{x: 0, y: 1}} 
                end={{x: 2, y:1.}} 
                colors={['#39afb5','#57bfed']}
            style={[styles.header,this.props.s]}>
            <View style={{flexDirection: 'row',flex:1}}>
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}} style={styles.button}>
                <Icon name={'ios-arrow-back'} size={24} color='#fff' />
            </TouchableOpacity>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={[styles.text,this.props.styleText]}>
                    {this.props.title}
                </Text>
                </View>
            </View>
            <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{backgroundColor:'#fff',height:25,borderTopLeftRadius:25}}></View>
            </View>
                
            </LinearGradient>
        )
    }
}

export default withNavigation(Header)

const styles = StyleSheet.create({
     header:{
        paddingTop:35,
        backgroundColor:'#39AFB5',
        height:height/6,
        flexDirection:'column'
    },
    text:{
        color:'#fff',
        fontSize:18,
        marginLeft:-40
    },
    button:{
        width:40,
        alignItems:'center',
        justifyContent:'center'
    }
})