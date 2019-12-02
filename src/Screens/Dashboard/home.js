import React from 'react'
import {View,Text,StatusBar,StyleSheet,Dimensions,Image,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {withNavigation} from "react-navigation"
import DeviceInfo from 'react-native-device-info-2'

import HeaderHome from '../../Components/HeaderHome'
import BannerInfo from '../../Components/bannerInfo'
import ContentFeatures from '../../Components/contentFeatures'
import Banner from '../../Components/banner'
import CardsMerchant from '../../Components/merchantContent'
import Footer from '../../Components/footer'

const Hr = () => {
    return(
        <View style={{backgroundColor:'#ecf0f1',height:10,width:width}}></View>
    )
}

const apiLevel = DeviceInfo.getDeviceLocale()
const {height,width} = Dimensions.get('window')
class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notif:3
        }
    }
    
    // componentDidMount(){
    //     const token = AsyncStorage.getItem('token',(err,res) => {
    //         console.log(res,'token')
    //         if(err){
    //             this.props.navigation.navigate('AuthStack')
    //         }

    //     })
    // }

    render(){
        console.warn(apiLevel,'api')
        return(
            <View style={{flex:1}}>
                <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.3)" translucent={true} />
                <ScrollView>
                <HeaderHome />
                
                {/* <ImageBackground source={require('../../Assets/Images/Header.png')}
                imageStyle={{borderBottomRightRadius:150,borderBottomLeftRadius:150,transform:[{scaleX:1.5}]}}
                 style={styles.header}>
                <View style={{paddingHorizontal:20,paddingVertical:35,flexDirection:'row'}}>
                <View style={{flex:1,paddingVertical:5}}>
                <Image source={require('../../Assets/Icons/Logo_gems.png')} style={{width:width/3.5,height:25}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{width:26,height:26,marginRight:5}}>
                <Image source={require('../../Assets/Icons/Logo2.png')} style={{width:undefined,height:undefined,marginTop:3,flex:1}} />
                </TouchableOpacity>
                
                <Icon 
                style={{position:'relative'}} 
                name={'md-notifications'} 
                size={26} color={'#fff'} 
                onPress={() => {this.props.navigation.navigate('Notification')}
                } style={{marginLeft:10}} />
                {this.state.notif !== 0 && this.state.notif !== '' ?
                <View
                style={{position:'absolute',width:13,height:13,borderRadius:13/2,backgroundColor:'#d63031',top:-2,right:-5,justifyContent:'center',alignItems:'center',}}
                >
                <Text style={{color:'#fff',fontSize:9,fontWeight:'700',padding:0}}>{this.state.notif}</Text>
                </View>
                :null
                }
                </View>
                </View>
                </ImageBackground> */}
                
                {/* <View style={styles.conWrapperSaldo}>
                <LinearGradient  colors={[ '#39AFB5','#39AFB5','#7ed6df']}  style={styles.saldo} >

                    <View style={{borderRightWidth:1,borderRightColor:'#fff',flex:1,paddingHorizontal:20}}> */}
                        {/* button top up saldo cash */}
                        {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'#fff'}}>SALDO CASH</Text>
                         <TouchableOpacity style={{borderWidth:1,borderColor:'#fff',padding:3,borderRadius:5,marginLeft:7}} onPress={() => {this.props.navigation.navigate('TopUp')}}>
                        <Text style={{color:'#fff',fontSize:11}}>TOP UP</Text>
                        </TouchableOpacity> 
                        </View>
                        <Text style={{color:'yellow',fontSize:10,}}>Rp</Text>
                        <Text style={{fontSize:15,color:'yellow',marginTop:-15,marginLeft:13,fontWeight:'700'}}>20.000.000</Text>
                    </View>
                    
                    <View style={{flex:1,paddingLeft:20,position:'relative'}}> */}
                        {/* button top up saldo cash */}                     
                        {/* <Text style={{color:'#fff'}}>SALDO POINT</Text>
                        <Image 
                            style={styles.logoSaldoPoint}
                            source={require('../../Assets/Icons/Diamond_icon.png')} />
                        <Text style={{fontSize:15,color:'yellow',marginTop:-15,marginLeft:13,fontWeight:'700'}}>10.000</Text>
                    </View>

                </LinearGradient>
                </View> */}

                
                {/* contents icon features */}
                <ContentFeatures />

                <Hr />

                {/* content cards banner */}
                <View style={{ paddingBottom: 10,backgroundColor:'#fff',paddingTop:15 }}>
                        <Banner />
                </View>

                <Hr/>

                {/* content cards merchant */}
                <View style={{paddingLeft:15,marginBottom:10,paddingTop:10}}>
                    <Text>
                        Merchant Terdekat :
                    </Text>
                </View>
                <CardsMerchant />

                <Hr/>
                {/* content banner informasi */}
                <View style={{paddingLeft:15,marginBottom:10,paddingTop:10}}>
                    <Text>
                        Informasi :
                    </Text>
                </View>
                <BannerInfo />

                </ScrollView>
                
                <Footer/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    header:{
        height:height/3.5,
        position:'relative'
    },
    saldo:{
        flexDirection:'row',
        height:height/9,
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:5,
        elevation:5
    },
    conWrapperSaldo:{
        position:'absolute',
        left:0,
        top:height/5,
        paddingHorizontal:20,
        backgroundColor:'transparent',
        height:height/9,
        width:'100%',
        zIndex:999
},
    saldoCash:{

    },
    logoSaldoPoint:{
        width:9,
        height:9,
        marginTop:3
    }
})

export default withNavigation(HomePage)