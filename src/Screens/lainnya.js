import React from 'react'
import Icon  from "react-native-vector-icons/Ionicons"
import {View,Text,StatusBar,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Header from '../Components/header'

const List = (props) => {
    return(
        <TouchableOpacity style={{flexDirection:'row',height:40,alignItems:'center',paddingHorizontal:15,marginTop:15,borderBottomWidth:1,borderBottomColor:'#f9f9f7'}}onPress={props.route}>
                    <Image source={props.icon} style={styles.imageIcon} />
                    <Text style={styles.textbody}>{props.title}</Text>
                </TouchableOpacity>
    )
}
class More extends React.Component{
    render(){
        return(
            <View style={{flex:1,marginTop:25}}>
            <StatusBar backgroundColor='#39afb5' transculent={false} />
                <Header title='Semua Kategory' />
                <View style={{flex:1}}>
                <List icon={require('../Assets/Icons/Pulsa_icon_2.png')} title='Pulsa' route={() => this.props.navigation.navigate('Pulsa')} />
                <List icon={require('../Assets/Icons/Paket_icon.png')} title='Paket data' route={() => this.props.navigation.navigate('PaketData')} />
                <List icon={require('../Assets/Icons/PLN_icon.png')} title='PLN' route={() => this.props.navigation.navigate('Pln')} />
                <List icon={require('../Assets/Icons/BPJS_icon.png')} title='BPJS' route={() => this.props.navigation.navigate('Bpjs')} />
                <List icon={require('../Assets/Icons/Asuransi_icon.png')} title='Asuransi' route={() => this.props.navigation.navigate('Asuransi')} />
                <List icon={require('../Assets/Icons/PDAM_icon.png')} title='PDAM' route={() => this.props.navigation.navigate('Pdam')} />
                <List icon={require('../Assets/Icons/Internet_icon.png')} title='Inernet' route={() => this.props.navigation.navigate('Internet')} />
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
        width:24,
        height:24
    },
    textbody: {
        fontSize:16,
        color:'#1e272e',
        marginLeft:15
    }
})