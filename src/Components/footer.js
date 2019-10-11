import React, {Component} from 'react'
import {View,Text,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {withNavigation} from 'react-navigation'

const {height} = Dimensions.get('window')
class Footer extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',height:height/11,borderColor:'grey',borderWidth:1}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {this.props.navigation.navigate('HomeStack')}}>
                    <Icon name={'md-home'} size={24} color='grey' />
                    <Text>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {this.props.navigation.navigate('TransactionsStack')}}>
                    <Icon name={'md-swap'} size={24} color='grey' />
                    <Text>Transaction</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',position:'relative'}} >
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ScanStack')}}>
                    <View style={{backgroundColor:'#39afb5',paddingVertical:8,paddingHorizontal:10,borderRadius:120,position:'absolute',left:-10,top:-35,borderWidth:5, borderColor:'#fff',borderColor:'#fff'}} >
                        
                    <Icon name={'md-qr-scanner'} size={28} color='#fff'  />
                    </View>
                    <Text style={{marginTop:20}}>Scan</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {this.props.navigation.navigate('DealsStack')}}>
                    <Icon name={'md-pricetags'} size={24} color='grey' />
                    <Text>Deals</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {this.props.navigation.navigate('AkunStack')}}>
                    <Icon name={'md-contact'} size={24} color='grey' />
                    <Text>Akun</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withNavigation(Footer)
