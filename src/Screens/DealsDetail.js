import React,{ Component } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

import Button from '../Components/button'

const Hr = () => {
    return(
        <View style={{height:8,backgroundColor:'#ecf0f1'}}></View>
    )
}
const {height} = Dimensions.get('window')
class DealsDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            detail:false
        }
    }

    _handleDetail = () => {
        this.setState({detail:true})
    }
    _hideDetail = () => {
        this.setState({detail:false})
    }

    render(){
        const data = this.props.navigation.getParam('item')
        return(
            <View style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                source={{uri:`${data.image}`}}
                style={{height:height/3}}
                >
                <LinearGradient
                colors={['rgba(57, 175, 181, 0.5)','transparent']}
                style={{height:'40%',paddingTop:25}}
                >
                <TouchableOpacity 
                onPress={() => {this.props.navigation.goBack()}}
                style={{width:50,justifyContent: 'center',alignItems: 'center',paddingVertical: 10,}}>
                    <Icon name="ios-arrow-back" size={24} color='#fff' />
                </TouchableOpacity>
                </LinearGradient>
                </ImageBackground>
                
                <View style={{height:height/10,backgroundColor:'#fff',padding:10,flexDirection:'row'}}>
                    <View style={{flex:2}}>
                        <Text style={{color:'#39afb5',fontSize:16,fontWeight:'700'}}>{data.title}</Text>
                        <Text style={{fontSize:10}}>Rp <Text style={{fontSize:15}}>{data.Nominal}</Text></Text>
                    </View>

                    <View style={{justifyContent:'flex-end',flex:1}}>
                        <Text style={{fontSize:10,color:'grey'}}>Valid : <Text style={{fontSize:13,}}>{data.valid}</Text></Text>
                    </View>
                </View>

                <Hr />

                <View style={{backgroundColor:'#fff',padding:10}}>
                    <Text style={{fontWeight:'700',marginBottom:8}}>Detail Voucher</Text>
                    {!this.state.detail ? 
                    <Text style={{marginLeft:10,color:'grey'}}>{data.detail.substr(0,100) + '...'} <Text style={{color:'#39afb5'}} onPress={this._handleDetail}>Lihat Detail</Text></Text>
                    :
                    <>
                    <Text style={{marginLeft:10,color:'grey'}}>{data.detail}</Text>
                    <Text style={{color:'#39afb5',marginTop:5,marginLeft:10}} onPress={this._hideDetail}>Sembunyikan Detail</Text>
                    </>
                    }
                </View>

                <Hr />

                <View style={{height:height/8,backgroundColor:'#fff',padding:10}}>
                <Text style={{fontWeight:'700',marginBottom:8}}>Lokasi Reedem</Text>
                </View>

                <Hr />

                <View style={{flex:1,marginTop:10,padding:10}}>
                <Text style={{fontWeight:'700',marginBottom:8}}>Syarat & Ketentuan</Text>
                <FlatList 
                data={data.snk}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={{flexDirection:'row',alignItems: 'center',marginBottom:3,paddingHorizontal:10}}>
                            <Icon name='md-radio-button-off' size={6} />
                            <Text style={{marginHorizontal:8,color:'grey'}}>{item}</Text>
                        </View>
                    )
                }}
                />
                </View>

                </ScrollView>
                <Button title='BELI VOUCHER' />
            </View>
        )
    }
}

export default DealsDetail