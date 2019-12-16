import React, { Component } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ImageBackground,
    FlatList,
    Image
} from 'react-native'
import {withNavigation} from 'react-navigation'

const {height,width} = Dimensions.get('window')

class ListWallet extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {data} = this.props
        console.warn(data);
        
        if(data != ''){
             return(
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem= {({item}) => {
                return(
                    <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('VoucherDetail',{item})}} 
                    style={s.box} key={item.id}>
            <ImageBackground
            imageStyle={{height:'100%',borderTopLeftRadius:25}} 
            source={{uri:`${item.image}`}}
            style={{height:'70%',paddingHorizontal:25,justifyContent:'center'}}>
                <Text style={{color:'yellow'}}>Voucher</Text>
                <Text style={{color:'yellow'}}>Rp <Text>{item.Nominal}</Text></Text>
            </ImageBackground>
            <View style={{flex:1,paddingHorizontal: 25,justifyContent: 'center',}}>
                <Text style={{fontSize:11}}>Valid</Text>
                <Text style={{fontSize:13}}>{item.valid}</Text>
            </View>
                
            </TouchableOpacity>
                )
            }}
            /> 
        )
        }
        else{
            return(
                <View style={{flex:1,justifyContent:'center',alignItems: 'center',}}>
                    <View style={{width:width/1.5,height:width/1.5,justifyContent: 'center',alignItems: 'center',}}>
                        <Image source={require('../Assets/Images/Notfound.png')}
                        resizeMode='center' />
                    </View>
                    <View>
                        <Text>Belum ada Transaksi !!!</Text>
                    </View>
                </View>
            )
        }
    }
}
export default withNavigation(ListWallet)

const s = StyleSheet.create({
    box:{
        height:height/6,
        backgroundColor:'#f9f9f7',
        position:'relative',
        elevation:5,
        marginBottom: 15,
        marginHorizontal: 15,
        borderTopLeftRadius:25,
        borderBottomRightRadius:25
    },
    curve:{
        position:'absolute',
        width:18,
        height:18,
        backgroundColor:'#fff',
        borderRadius:18/2,
    }
})