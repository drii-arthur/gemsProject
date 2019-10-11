import React from 'react'
import {View,Text,ImageBackground,Dimensions,Image} from 'react-native'

const {height,width} = Dimensions.get('window')
class CardAccounts extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'#ecf0f1'}}>
                <View style={{padding:15}}>
                    <ImageBackground
                    source={require('../Assets/Images/Card_bg.png')}
                    style={{width:'100%',height:height/3.3}}
                    imageStyle={{borderRadius:10}}
                    >
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:15}}>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>GEMS</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>UPGRADE TO PREMIUM</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <View style={{width:width/4,height:height/9,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{width:'100%',height:'100%',borderRadius:10}}
                            source={require('../Assets/Images/Qr_icon.png')}
                            />
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',letterSpacing:1}}>Sehren</Text>
                            <Text style={{color:'#fff',letterSpacing:1,fontSize:25}}>0812-1234-5678</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>MEMBER SINCE</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>8/1/2019</Text>
                        </View>
                    </View>
                    
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default CardAccounts