import React, { Component } from "react"
import { 
    View,
    Text,
    touchableOpacity,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    FlatList,
    SafeAreaView,
    TouchableOpacity
    } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Font from 'react-native-vector-icons/Entypo'
import { Container, Content, Accordion } from "native-base"
import CountDown from 'react-native-countdown-component'
import QRCode from 'react-native-qrcode-svg'
import Barcode from 'react-native-barcode-builder'

import Header from '../Components/header'


const Counter = (props) => {
    return(
        <CountDown
        size={20}
        until={86400}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
    )
}
const {height,width} = Dimensions.get('window')
class VoucherDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            reedemStatus : false
        }
    }

    render(){
        const data = this.props.navigation.getParam('item')
        return(
            <>
            <Header title={data.title}/>
                <ScrollView style={{backgroundColor:'#f9f9f7'}}>
                    <ImageBackground
                    imageStyle={{borderBottomRightRadius:50}} 
                    source={{uri:`${data.image}`}} style={{width:'100%',height:'100%'}} resizeMode='cover'
                    style={{height:height/4,backgroundColor:'#39afb5'}}>
                   
                    </ImageBackground>
                    
                    <View style={{backgroundColor:'#39afb5',padding:10,flexDirection:'row',borderBottomRightRadius:50,marginBottom:10}}>

                        <View style={{flexDirection:'row',flex:1}}>
                            <Icon name='sale' size={20} color='tomato' />
                            <Text style={{color:'#fff',marginLeft:5}}>Voucher<Text>{data.Nominal}</Text></Text>
                        </View>

                        <View style={{flexDirection:'row',flex:1}}>
                            <Icon name='timelapse' size={20} color='tomato' />
                            <Text style={{color:'#fff',marginLeft:5}}>Valid :<Text> {data.valid}</Text></Text>
                        </View>
                        
                    </View>

                    {this.state.reedemStatus ? 

                    <View style={{flex:1,justifyContent:'center',alignItems: 'center',paddingVertical: 25,marginBottom:25}}>
                        <Text style={{fontSize:18,fontWeight:'700'}}>{data.kodeVoucher}</Text>
                        <View style={{marginBottom:25}}>
                        <Barcode
                        value={data.kodeVoucher}
                        format="CODE128"
                        height={height/18}
                        width={1.8}                  
                    />
                    </View>
                    <QRCode
                        value={data.kodeVoucher}
                        logo={require('../Assets/Icons/logoscan.png')}
                        logoSize={30}
                        size={180}
                    />
                    
                    </View>
                    :
                    <>
                    <View style={{padding:10,marginTop:10}}>
                        
                        <View style={{height:height/8,backgroundColor:'rgba(52, 231, 228,0.1)',borderTopRightRadius:35,borderBottomLeftRadius:35,marginBottom:10}}>
                        <View style={{backgroundColor:'#39afb5',width:'50%',padding:5,borderTopRightRadius:55,marginTop:-12,paddingLeft:10,}}>
                            <Text style={{fontWeight:'bold',color:'#fff'}}>Lokasi Redeem</Text>
                        </View>
                        
                        
                        </View>
                    </View>
                    

                    
                    <View style={{padding:10,marginTop:10}}>
                        
                        <View style={{backgroundColor:'rgba(52, 231, 228,0.1)',borderTopLeftRadius:35,borderBottomRightRadius:35}}>
                        <View style={{backgroundColor:'#39afb5',width:'50%',padding:5,borderTopLeftRadius:55,marginTop:-12,paddingRight:10,alignSelf: 'flex-end',}}>
                            <Text style={{fontWeight:'bold',color:'#fff',alignSelf: 'flex-end',}}>Syarat & Ketentuan</Text>
                        </View>
                        <SafeAreaView style={{flex:1}}>
                        <FlatList
                        data={data.snk}
                        keyExtractor={(item,index) => index}
                        renderItem = {({item}) => {
                            return(
                                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal: 10,marginBottom:5}} >
                                    <Font name='dot-single' size={15} />
                                    <Text style={{marginRight:3}}>{item}</Text>
                                </View>
                            )
                        }}
                        />
                        </SafeAreaView>
                        </View>
                    </View>
                    </>
    }

                    {this.state.reedemStatus ? 
                    <>
                        <Counter />
                    </>:
                    null
                    }

                    {!this.state.reedemStatus ?

                    <TouchableOpacity 
                    onPress={() => {this.setState({reedemStatus:true})}}
                    style={{height:height/8,backgroundColor:'#39afb5',justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'700'}}>Reedem</Text>
                    <Text style={{color:'#fff'}}>Di Larang Mengklik tombol ini selain petugas</Text>
                    </TouchableOpacity>
                    :

                    <View 
                    onPress={() => {this.setState({reedemStatus:true})}}
                    style={{height:height/8,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'700'}}> Sudah di Reedem</Text>
                    <Text style={{color:'#fff'}}>Di Larang Mengklik tombol ini selain petugas</Text>
                    </View>
                    }

                   
                    
                </ScrollView>
                </>


        )
    }
}
export default VoucherDetail