import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import {withNavigation} from 'react-navigation'


const mainColor = '#39afb5'
const {height,width} = Dimensions.get('window')

const TabBar = (props) => {
    return(
        <TouchableOpacity 
            onPress={props.route}
            style={[s.tabbar]}>
            <Icon name={props.icon} size={24} color={mainColor} />
            <Text style={s.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

class Footer extends React.Component{
    render(){
        return(
            <View style={s.container}>
                <TabBar title='Home' icon='ios-home' route={() => this.props.navigation.navigate('HomePage')}/>
                <TabBar title='Wallet' icon='ios-wallet' route={() => {this.props.navigation.navigate('Wallet')}} />

                <LinearGradient 
                    style={[s.tabbar,s.scanner]} 
                    start={{x: 1, y: 0}} 
                    end={{x: 2, y:1}} 
                    colors={['#39afb5','#57bfed']}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('ScanScreen')}}>
                        <Image source={require('../Assets/Icons/Scan_icon.png')} style={{width:30,height:30}} />
                        </TouchableOpacity>
                </LinearGradient>

                <TabBar title='Deals' icon='md-pricetags' route={() => {this.props.navigation.navigate('Deals')}}/>           
                <TabBar title='Akun' icon='md-contact' route={() => {this.props.navigation.navigate('Accounts')}} />           
            </View>
        )
    }
}

export default withNavigation(Footer)

const s = StyleSheet.create({
    container:{
        height:height/12,
        flexDirection:'row',
        elevation:15,
        backgroundColor:'#fff'
    },
    tabbar:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:13,
        color:'grey'
    },
    scanner:{
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        margin:2,
        marginHorizontal:10
    }
})