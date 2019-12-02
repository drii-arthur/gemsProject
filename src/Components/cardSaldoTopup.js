import React from 'react'
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../Components/header'

const {height,width} = Dimensions.get('window')
class CardSaldo extends React.Component{
    render(){
        return(
                <View>
                 <LinearGradient colors={[ '#39AFB5','rgba(45, 152, 218,1.0)']} style={styles.cardSaldo}>
                    <Text style={styles.textSaldo}>Saldo Gems</Text>                   
                    <Text style={{color:'yellow',fontSize:13,fontWeight:'bold'}}>Rp 10.000</Text>               
                </LinearGradient>
                 <Text style={{textAlign:'center',marginTop:5,color:'#485460',fontSize:12}}>maks. Saldo Gems Rp.10.000.000</Text>
            </View>
        )
    }
}

export default CardSaldo

const styles = StyleSheet.create({
    cardSaldo: {
        height:height/9,
        marginTop:20,
        marginHorizontal:20,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        elevation:5
    },
    textSaldo: {
        color:'#fff',
        fontWeight:'700',
        fontSize:16,
        letterSpacing:1.5
    },
})