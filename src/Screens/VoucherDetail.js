import React, { Component } from "react"
import { 
    View,
    Text,
    touchableOpacity,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView
    } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Content, Accordion } from "native-base"

import Header from '../Components/header'

const {height,width} = Dimensions.get('window')
class VoucherDetail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const data = this.props.navigation.getParam('item')
        return(
                <ScrollView style={{backgroundColor:'#f9f9f7'}}>
                 <Header title={data.title}/>
                    <ImageBackground 
                    source={{uri:`${data.image}`}} style={{width:'100%',height:'100%'}} resizeMode='cover'
                    style={{height:height/5}}>
                   
                    </ImageBackground>
                    
                    <View style={{backgroundColor:'#39afb5',padding:10,flexDirection:'row'}}>

                        <View style={{flexDirection:'row',flex:1}}>
                            <Icon name='sale' size={20} color='tomato' />
                            <Text style={{color:'#fff',marginLeft:5}}>Voucher<Text>{data.Nominal}</Text></Text>
                        </View>

                        <View style={{flexDirection:'row',flex:1}}>
                            <Icon name='timelapse' size={20} color='tomato' />
                            <Text style={{color:'#fff',marginLeft:5}}>Valid :<Text> {data.valid}</Text></Text>
                        </View>
                        
                    </View>

                    <View style={{padding:10,marginTop:10}}>
                        
                        <View style={{height:height/4,backgroundColor:'rgba(52, 231, 228,0.1)',borderTopRightRadius:35,borderBottomLeftRadius:35}}>
                        <View style={{backgroundColor:'#39afb5',width:'50%',padding:5,borderTopRightRadius:55,marginTop:-12,paddingLeft:10,}}>
                            <Text style={{fontWeight:'bold',color:'#fff'}}>Lokasi Redeem</Text>
                        </View>
                        
                        
                        </View>
                    </View>

                    
                    <View style={{padding:10,marginTop:10}}>
                        
                        <View style={{height:height/4,backgroundColor:'rgba(52, 231, 228,0.1)',borderTopRightRadius:35,borderBottomLeftRadius:35}}>
                        <View style={{backgroundColor:'#39afb5',width:'50%',padding:5,borderTopRightRadius:55,marginTop:-12,paddingLeft:10,}}>
                            <Text style={{fontWeight:'bold',color:'#fff'}}>Syarat & Ketentuan</Text>
                        </View>
                        
                        </View>
                    </View>

                   
                    
                </ScrollView>


        )
    }
}
export default VoucherDetail