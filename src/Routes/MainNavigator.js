import React from 'react'
import {View,Image} from 'react-native'
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

import HomePage from '../Screens/Dashboard/home'
import Deals from '../Screens/deals'
import Scan from '../Screens/scan'
import Transactions  from "../Screens/transaction";
import Accounts from '../Screens/accounts'
import ScanScreen from '../Screens/qrScanner'
import Login from '../Screens/login'
import Otp from '../Screens/otpScreen'
import Register from '../Screens/register'
import NewPin from '../Screens/newPin'
import Notification from "../Screens/notifications"
import Pulsa from "../Screens/pulsa"
import PaketData from '../Screens/paketData'
import Pln from '../Screens/pln'
import Bpjs from '../Screens/bpjs'
import Internet from '../Screens/internet'
import Pdam from '../Screens/pdam'
import Asuransi from '../Screens/asuransi'
import ContactList from '../Screens/contact'
import PrivacyPolice from '../Screens/privacyPolice'
import TermsConditions from '../Screens/termsCondition'
import Help from '../Screens/help'
import More from '../Screens/lainnya'
import TopUp from '../Screens/topUp'
import Debit from '../Screens/debit'
import TopUpAtm from '../Screens/topupAtm'
import UpgradePremium from '../Screens/upgradePremium'
import ChangePin from '../Screens/changePin'
import Games from '../Screens/games'
import QrCode from '../Screens/qrcode'
import TarikSaldo from '../Screens/tarikSaldo'
import Transfer from '../Screens/transfers'
import Wallet from '../Screens/wallet'
import Authentication from '../Screens/authentication'


const AuthStack = createStackNavigator({
    Authentication,
    Login,
    Register,
    Otp,
    NewPin
},{
    headerMode:'none',
    initialRouteName:'Login'
    
})

// const appStack = createBottomTabNavigator ({
//     Home: {
//         screen: HomePage,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon name={'md-home'} size={26} color={tintColor} />

//             ),
//         },
//     },
//     Transactions: {
//         screen: Transactions,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon size={26} name='md-swap' color={tintColor} />
//             ),
//         },
//     },
//     Scan:{
//         screen: ScanScreen,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 // <View style={{flex:1,borderBottomLeftRadius:150,borderBottomRightRadius:150,poisition:'absolute',top:-0.5,left:0,right:0,bottom:0,justifyContent:'center',backgroundColor:'#f9f9f7',padding:10}}>
//                 //     <View style={{backgroundColor:'#39afb5',justifyContent:'center',alignItems:'center',borderRadius:48/2,poisition:'absolute',top:-15,left:0,width:48,height:48,right:0}}>
//                 //     <Image source={require('../Assets/Icons/Scan.png')} style={{width:22,height:20}} /> 
//                 //     {/* <Icon size={26} name='md-qr-scanner' color={'#fff'} /> */}
//                 //      </View> 
//                 // </View>
//                 <LinearGradient 
//                 start={{x: 3, y: 1}} 
//                 end={{x: 0, y: 1}} 
//                 colors={['#4BC0C8','#34e7e4','#39afb5']}
//                 style={{flex:1,backgroundColor:'#39afb5',poisition:'absolute',top:0,left:0,right:0,bottom:0,justifyContent:'center',paddingHorizontal:20,borderBottomRightRadius:20,borderTopLeftRadius:20,marginTop:20,paddingVertical:25}}>
//                     <Image source={require('../Assets/Icons/Scan_icon.png')} style={{width:25,height:25}} />
//                 </LinearGradient>
//             ),
//         },
//     },
//     Deals: {
//         screen: Deals,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon size={26} name='md-pricetags' color={tintColor} />

//             ),
//         },
//     },
//     Akun: {
//         screen: Accounts,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon size={26} name='md-contact' color={tintColor} />

//             ),
//         },
//     },
// },
// {
//     tabBarPosition: 'bottom',
//     swipeEnabled: false,
//     animationEnabled: false,
//     tabBarOptions: {
//         activeTintColor: '#39afb5',
//         inactiveTintColor: 'grey',
//         upperCaseLabel: false,
//         labelStyle: {
//             marginBottom: 5,
//             fontWeight: '700'
//         },
//         style: {
//             backgroundColor: 'transparent',
//             height: 55,
//             paddingVertical: 0,
//             position:'relative',
//             borderTopWidth:0.5,
//             borderTopColor:'rgba(189, 195, 199,0.5)'
//         },
//         indicatorStyle: {
//             height: 0,
//         },
//         showIcon: true,
//         showLabel:{screen:Scan ? false : true}
//     },
// })

const appStackNavigator = createStackNavigator({
    // App :appStack,
    HomePage,
    Deals,
    Accounts,
    Notification,
    Pulsa,
    Wallet,
    PaketData,
    Pln,
    Bpjs,
    Asuransi,
    Pdam,
    Internet,
    ContactList,
    PrivacyPolice,
    TermsConditions,
    Help,
    More,
    TopUp,
    Debit,
    TopUpAtm,
    UpgradePremium,
    ChangePin,
    Games,
    QrCode,
    Transfer,
    TarikSaldo,
    ScanScreen
},{
    headerMode:'none',
})


const switchNavigator = createSwitchNavigator({
appStackNavigator,
AuthStack
},
{
    initialRouteName : 'AuthStack'
})

const AppContainer = createAppContainer(switchNavigator)

export default AppContainer
