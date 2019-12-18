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
        <View style={{height:10,backgroundColor:'#ecf0f1'}}></View>
    )
}
const {height} = Dimensions.get('window')
class DealsDetail extends Component{
    constructor(props){
        super(props)
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
                
                <View style={{height:height/10,backgroundColor:'#fff',padding:10}}>
                    <Text style={{color:'#39afb5',fontSize:16,fontWeight:'700'}}>{data.title}</Text>
                    <Text style={{fontSize:10}}>Rp <Text style={{fontSize:15}}>{data.Nominal}</Text></Text>
                </View>

                <Hr />

                <View style={{backgroundColor:'#fff',padding:10}}>
                    <Text style={{fontWeight:'700',marginBottom:8}}>Detail Voucher</Text>
                    <Text>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</Text>
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
                            <Text style={{marginHorizontal:8}}>{item}</Text>
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