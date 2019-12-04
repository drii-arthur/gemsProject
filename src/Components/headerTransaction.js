import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import Icon  from "react-native-vector-icons/Ionicons"
import {withNavigation} from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'

const {height} = Dimensions.get('window')
class HeaderTransaction extends React.Component{
    render(){

        return(
            <LinearGradient
                start={{x: 0, y: 1}} 
                end={{x: 2, y:1.}} 
                colors={['#39afb5','#57bfed']}
            >
                <View style={styles.header}>
                <TouchableOpacity onPress={() => {this.props.navigation.goBack()}} style={styles.button}>
                <Icon name={'ios-arrow-back'} size={24} color='#fff' />
                </TouchableOpacity>
            
                <Text style={styles.text}>
                {this.props.title}
                </Text>
                </View>
            
                <View style={styles.wrapperSaldo}>
                    <View style={styles.saldo}>
                        <Text style={styles.teksSaldo}>Saldo Gems</Text>
                        <Text style={styles.teksNominal}>10.000.000</Text>
                    </View>
                    <View style={{height:'30%',backgroundColor:'#fff',borderTopLeftRadius:35}}></View>
                </View>
            </LinearGradient>
        )
    }
}

export default withNavigation(HeaderTransaction)

const styles = StyleSheet.create({
     header:{
        paddingTop:25,
        height:height/8,
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
    },
    wrapperSaldo:{
        height:80,
        width:'100%'
    },
    saldo:{
        height:'70%',
        paddingHorizontal:20,
        justifyContent:'center'
    },
    teksSaldo:{
        color:'#fff',
        fontSize:10
    },
    teksNominal:{
        color:'yellow',
        fontSize:20,
        fontWeight:'700',
        letterSpacing:1.2
    }
})