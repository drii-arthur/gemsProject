import React from 'react'
import Icon  from "react-native-vector-icons/Ionicons"
import {View,Text,StatusBar,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Header from '../Components/header'

const List = (props) => {
    return(
        <TouchableOpacity style={{flexDirection:'row',height:40,alignItems:'center',paddingHorizontal:15,marginTop:15,borderBottomWidth:1,borderBottomColor:'#f9f9f7'}}onPress={props.route}>
            <View style={{width:26,height:26,padding:1}}>
                <Image source={props.icon} style={styles.imageIcon} />
            </View>
                    <Text style={styles.textbody}>{props.title}</Text>
                </TouchableOpacity>
    )
}
class More extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
                <Header title='Semua Kategory' />
                <View style={{flex:1}}>
                <List icon={require('../Assets/Icons/Pulsa_icon_2.png')} title='Pulsa' route={() => this.props.navigation.navigate('Pulsa')} />
                <List icon={require('../Assets/Icons/Paket_icon.png')} title='Paket data' route={() => this.props.navigation.navigate('PaketData')} />
                <List icon={require('../Assets/Icons/PLN_icon.png')} title='PLN' route={() => this.props.navigation.navigate('Pln')} />
                <List icon={require('../Assets/Icons/BPJS_icon.png')} title='BPJS' route={() => this.props.navigation.navigate('Bpjs')} />
                <List icon={require('../Assets/Icons/Asuransi_icon.png')} title='Asuransi' route={() => this.props.navigation.navigate('Asuransi')} />
                <List icon={require('../Assets/Icons/PDAM_icon.png')} title='PDAM' route={() => this.props.navigation.navigate('Pdam')} />
                <List icon={require('../Assets/Icons/Internet_icon.png')} title='Inernet' route={() => this.props.navigation.navigate('Internet')} />
                <List icon={require('../Assets/Icons/Games_icon.png')} title='Games' route={() => this.props.navigation.navigate('Games')} />
                </View>
                <View>
                </View>
            </View>
        )
    }
}

export default More

const styles = StyleSheet.create({
    imageIcon:{
        width:undefined,
        height:undefined,
        flex:1
    },
    textbody: {
        fontSize:16,
        color:'#1e272e',
        marginLeft:15
    }
})