import React from 'react'
import {View,Text,StatusBar,StyleSheet,Dimensions,Image,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import ContentFeatures from '../../Components/contentFeatures'
import Banner from '../../Components/banner'
import CardsMerchant from '../../Components/merchantContent'
import BannerInfo from '../../Components/bannerInfo'
import Icon from 'react-native-vector-icons/Ionicons'
import Footer from '../../Components/footer'

const {height} = Dimensions.get('window')
class HomePage extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#39afb5' />
                <View style={styles.header}>
                <ImageBackground source={require('../../Assets/Images/Header.png')}
                imageStyle={{borderBottomRightRadius:30,borderBottomLeftRadius:30}}
                 style={styles.header}>
                    <View>
                        <Image />
                    </View>
                </ImageBackground>
                </View>
                <View style={styles.conWrapperSaldo}>
                <ImageBackground
                source={require('../../Assets/Images/Dashboard_bg.png')}
                imageStyle={{ borderRadius: 5 }}
                style={styles.saldo}>
                    <View style={{borderRightWidth:1,borderRightColor:'#fff',flex:1,paddingLeft:20,position:'relative'}}>
                        {/* button top up saldo cash */}
                    <TouchableOpacity style={{position:'absolute',top:5,right:10,borderWidth:1,borderColor:'#fff',padding:3,borderRadius:5}}>
                                <Text style={{color:'#fff',fontSize:11}}>TOP UP</Text>
                            </TouchableOpacity>                        
                        <Text style={{color:'#fff'}}>SALDO CASH</Text>
                        <Text style={{color:'yellow',fontSize:10,}}>Rp</Text>
                        <Text style={{fontSize:15,color:'yellow',marginTop:-15,marginLeft:13,fontWeight:'700'}}>20.000.000</Text>
                    </View>
                    
                    <View style={{flex:1,paddingLeft:20,position:'relative'}}>
                        {/* button top up saldo cash */}
                    <TouchableOpacity style={{position:'absolute',top:5,right:10,borderWidth:1,borderColor:'#fff',padding:3,borderRadius:5}}>
                                <Text style={{color:'#fff',fontSize:11}}>TOP UP</Text>
                            </TouchableOpacity>                        
                        <Text style={{color:'#fff'}}>SALDO POINT</Text>
                        <Image 
                            style={styles.logoSaldoPoint}
                            source={require('../../Assets/Icons/Diamond_icon.png')} />
                        <Text style={{fontSize:15,color:'yellow',marginTop:-15,marginLeft:13,fontWeight:'700'}}>10.000</Text>
                    </View>

                </ImageBackground>
                </View>

                <ScrollView>
                {/* contents icon features */}
                <ContentFeatures />

                {/* content cards banner */}
                <View style={{ paddingBottom: 20 }}>
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
                <Footer />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header:{
        height:height/6,
        borderBottomLeftRadius:120,
        borderBottomRightRadius:120,
        position:'relative'
    },
    saldo:{
        flexDirection:'row',
        height:height/11,
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:5,
        zIndex:1
    },
    conWrapperSaldo:{
        position:'absolute',
        left:0,
        top:90,
        paddingHorizontal:20,
        backgroundColor:'transparent',
        height:height/11,
        width:'100%',
        zIndex:1
},
    saldoCash:{

    },
    logoSaldoPoint:{
        width:9,
        height:9,
        marginTop:3
    }
})

export default HomePage