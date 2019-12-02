import React from 'react'
import Icon  from "react-native-vector-icons/Ionicons"
import {View,Text,StatusBar,StyleSheet,Image,ScrollView,Dimensions,FlatList,TouchableOpacity} from 'react-native'
import CardSaldo from '../Components/cardSaldoTopup'
import Header from '../Components/header'
import HeaderTransaction from '../Components/headerTransaction'

const OptionsTopUp = (props) => {
    return(
        <TouchableOpacity style={styles.wrapperTopUp} onPress={props.route}>
            <View style={[styles.wrapperIcon,props.color]}>
                <Icon name={props.icon} size={20} color='#fff' />
            </View>
                <Text style={styles.textbody}>{props.title}</Text>
        </TouchableOpacity>
    )
}



const {height,width} = Dimensions.get('window')

const list = [
    {
    name: 'BCA',
    avatar: 'https://cdn.iconscout.com/icon/free/png-512/bca-225544.png',
    },
    {
    name: 'BANK PERMATA',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTNhEv9za0FBGd3FYMtS49WgmrUj4rs71c65AfwmpIc2mnS0m9',
    },
    {
    name: 'BANK RAKYAT INDONESIA',
    avatar: 'https://1.bp.blogspot.com/-DcBEcD_7wAo/WgLBoZ1qGlI/AAAAAAAAEm8/1nMnTy6QEG4ADlm0eKX92itUQaAtmPhuACLcBGAs/s400/bri.png',
    },
    {
    name: 'BANK Mandiri',
    avatar: 'https://1.bp.blogspot.com/-pBKWWv4H0YY/V15O0ZSZO9I/AAAAAAAAAJE/Xps9eUzp6q8hLNuvYTCtm9CaiyAdiaoCACKgB/s1600/Bank-Mandiri-Logo-Vector-Image.png',
    },
]

class TopUp extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>
            <StatusBar backgroundColor='#39AFB5' transculent={false} barStyle="dark-content" />
            
            <HeaderTransaction title="Top Up" />

            <View style={styles.select}>
                <Text style={styles.textSelect}> Pilih Metode Top up</Text>
            </View>
                
                <View style={{flex:1}}>
                {/* start option topup */}
                <ScrollView>
                <OptionsTopUp icon={'ios-card'} title='Debit Card' color={{backgroundColor:'#39AFB5'}} route={() => {this.props.navigation.navigate('Debit')}} />
                <OptionsTopUp icon={'ios-card'} title='ATM' color={{backgroundColor:'rgba(255, 99, 72,1.0)'}} activeOpacity={.9} />
                {/* start list bank */}
                <View style={{flexDirection:'row',paddingHorizontal:10}}>
                    <View style={{width:30}}></View>
                    <View style={{flex:1}}>
                        <FlatList
                        data={list}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity style={{height:50,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#f9f9f7',borderBottomWidth:1,alignItems:'center'}} onPress={() => {this.props.navigation.navigate('TopUpAtm',{item})}}>
                                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#fff'}}>

                                <View style={{height:40,justifyContent:'center',alignItems:'center',width:40,borderRadius:40/2,marginRight:10,borderColor:'#f1f2f6',borderWidth:1}}>
                                <Image source={{uri:`${item.avatar}`}} style={{width:'70%',height:'70%'}} />
                            </View>
                                    <Text  style={{fontSize:13,color:'#505050',fontFamily:'roboto'}}>{item.name}</Text>
                                </View>                                   
                                    <Icon name={'ios-arrow-forward'} size={16} color='grey' />
                                </TouchableOpacity>
                            )
                        }}
                        />
                    </View>
                </View>
                {/* end of list bank */}
                <OptionsTopUp icon={'ios-card'} title='Internet Banking' />
                </ScrollView>
                {/* end of option topup */}
                </View>
                <View>
                </View>
            </View>
        )
    }
}

export default TopUp

const styles = StyleSheet.create({
    text:{
        color:'#fff',
        fontSize:18,
        marginLeft:20
    },
    textbody: {
        fontSize:16,
        color:'#1e272e',
        marginLeft:15
    },
    select: {
        paddingHorizontal:15,
        paddingVertical:5,
        marginVertical:10,
        backgroundColor:'#f9f9f7'
    },
    textSelect: {
        color: '#485460',
        
    },
    wrapperTopUp: {
        flexDirection:'row',
        height:50,
        alignItems:'center',
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#f9f9f7',
        marginHorizontal:20
    },
    wrapperIcon: {
        height:30,
        width:30,
        borderRadius:30/2,
        backgroundColor:'rgba(255, 127, 80,1.0)',
        justifyContent:'center',
        alignItems:'center'
    },
})