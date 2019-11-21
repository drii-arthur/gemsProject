import React from 'react'
import {View,Text,StatusBar,StyleSheet,Dimensions,Image,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import ContentFeatures from '../../Components/contentFeatures'
import Banner from '../../Components/banner'
import CardsMerchant from '../../Components/merchantContent'
import BannerInfo from '../../Components/bannerInfo'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {withNavigation} from "react-navigation"
import DeviceInfo from 'react-native-device-info-2'

const apiLevel = DeviceInfo.getDeviceLocale()
const {height,width} = Dimensions.get('window')
class HomePage extends React.Component{
    
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
            <View style={{flex:1,zIndex:-1}}>
                <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.3)" translucent={true} />
                
                <ImageBackground source={require('../../Assets/Images/Header.png')}
                imageStyle={{borderBottomRightRadius:120,borderBottomLeftRadius:120,transform:[{scaleX:1.5}]}}
                 style={styles.header}>
                <View style={{paddingHorizontal:20,paddingVertical:35,flexDirection:'row'}}>
                <View style={{flex:1,paddingVertical:5}}>
                <Image source={require('../../Assets/Icons/Logo_gems.png')} style={{width:width/3.5,height:25}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                <Icon name={'md-wallet'} size={24} color='#fff' />
                <Icon  name={'md-notifications'} size={24} color={'#fff'} onPress={() => {this.props.navigation.navigate('Notification')}
                } style={{marginLeft:10}} />
                </View>
                </View>
                </ImageBackground>
                
                <View style={styles.conWrapperSaldo}>
                <LinearGradient  colors={[ '#39AFB5','#39AFB5','#7ed6df']}  style={styles.saldo} >

                    <View style={{borderRightWidth:1,borderRightColor:'#fff',flex:1,paddingHorizontal:20}}>
                        {/* button top up saldo cash */}
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'#fff'}}>SALDO CASH</Text>
                         <TouchableOpacity style={{borderWidth:1,borderColor:'#fff',padding:3,borderRadius:5,marginLeft:7}} onPress={() => {this.props.navigation.navigate('TopUp')}}>
                        <Text style={{color:'#fff',fontSize:11}}>TOP UP</Text>
                        </TouchableOpacity> 
                        </View>
                        <Text style={{color:'yellow',fontSize:10,}}>Rp</Text>
                        <Text style={{fontSize:15,color:'yellow',marginTop:-15,marginLeft:13,fontWeight:'700'}}>20.000.000</Text>
                    </View>
                    
                    <View style={{flex:1,paddingLeft:20,position:'relative'}}>
                        {/* button top up saldo cash */}                     
                        <Text style={{color:'#fff'}}>SALDO POINT</Text>
                        <Image 
                            style={styles.logoSaldoPoint}
                            source={require('../../Assets/Icons/Diamond_icon.png')} />
                        <Text style={{fontSize:15,color:'yellow',marginTop:-15,marginLeft:13,fontWeight:'700'}}>10.000</Text>
                    </View>

               </LinearGradient>
                </View>

                <ScrollView>
                {/* contents icon features */}
                <ContentFeatures />

                {/* content cards banner */}
                <View style={{ paddingBottom: 10 }}>
                        <Banner />
                </View>

                {/* content cards merchant */}
                <View style={{paddingLeft:15,marginBottom:10}}>
                    <Text>
                        Merchant Terdekat :
                    </Text>
                </View>
                <CardsMerchant />
                {/* content banner informasi */}
                <View style={{paddingLeft:15,marginBottom:10}}>
                    <Text>
                        Informasi :
                    </Text>
                </View>
                <BannerInfo />

                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header:{
        height:height/4.5,
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
        top:height/6.5,
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