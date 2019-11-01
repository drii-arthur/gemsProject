import React from 'react'
import {View,Image} from 'react-native'
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'

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


const AuthStack = createStackNavigator({
    Login,
    Register,
    Otp,
    NewPin
},{
    headerMode:'none',
    initialRouteName:'Login'
    
})

const appStack = createBottomTabNavigator ({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name={'md-home'} size={26} color={tintColor} />

            ),
        },
    },
    Transactions: {
        screen: Transactions,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='md-swap' color={tintColor} />
            ),
        },
    },
    Scan: {
        screen: ScanScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <View style={{width:'100%',height:'95%',borderBottomLeftRadius:150,borderBottomRightRadius:150,poisition:'absolute',top:-1.3,borderWidth:12,                        borderColor:'#f9f9f7',borderTopWidth:2}}>
                    <View style={{backgroundColor:'#39afb5',justifyContent:'center',alignItems:'center',borderRadius:48/2,poisition:'absolute',top:-25,left:0,width:48,height:48}}>
                    <Icon size={26} name='md-qr-scanner' color={'#fff'} />
                    </View>
                </View>
            ),
        },
    },
    Deals: {
        screen: Deals,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='md-pricetags' color={tintColor} />

            ),
        },
    },
    Akun: {
        screen: Accounts,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='md-contact' color={tintColor} />

            ),
        },
    },
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: '#39afb5',
        inactiveTintColor: 'grey',
        upperCaseLabel: false,
        labelStyle: {
            marginBottom: 5,
            fontWeight: '700'
        },
        style: {
            backgroundColor: 'transparent',
            height: 55,
            paddingVertical: 0,
            position:'relative',
            borderTopWidth:0.5,
            borderTopColor:'rgba(189, 195, 199,0.5)'
        },
        indicatorStyle: {
            height: 0,
        },
        showIcon: true,
    },
})

const appStackNavigator = createStackNavigator({
    App :appStack,
    Notification,
    Pulsa,
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
    UpgradePremium
},{
    headerMode:'none',
})


const switchNavigator = createSwitchNavigator({
appStackNavigator,
AuthStack
},
{
    initialRouteName : 'appStackNavigator'
})

const AppContainer = createAppContainer(switchNavigator)

export default AppContainer