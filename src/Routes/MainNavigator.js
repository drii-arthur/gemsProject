import React from 'react'
import {View,Image} from 'react-native'
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import FAB from 'react-native-fab'
import Mask from "react-native-mask"

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
// const HomeStack = createStackNavigator({
//     Home:{screen:HomePage}
// },{
//     initialRouteName:'Home',
// headerMode:'none'})

// const TransactionsStack = createStackNavigator({
//     Transaction:{screen:Transactions}
// },{
// headerMode:'none',
// initialRouteName:'Transaction'})

// const ScanStack = createStackNavigator({
//     Scan:{screen:ScanScreen}
// },{
// headerMode:'none',
// initialRouteName:'Scan'
// })

// const DealsStack = createStackNavigator({
//     Deals:{screen:Deals}
// },{
// headerMode:'none'})

// const AkunStack = createStackNavigator({
//     Akun:{screen:Accounts}
// },{
// headerMode:'none',
// initialRouteName:'Akun'})

const AuthStack = createStackNavigator({
    Login,
    Register,
    Otp,
    NewPin
},{
    headerMode:'none',
    initialRouteName:'NewPin'
    
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
                // <FAB snackOffset={10} buttonColor="#39afb5" iconTextColor="#fff" onClickAction={() => {console.log("FAB pressed")}} visible={true} iconTextComponent={<Icon name="md-qr-scanner"/>}  />
                <View style={{width:'80%',height:'90%',borderBottomLeftRadius:120,borderBottomRightRadius:120,poisition:'absolute',top:-2,left:1,borderWidth:7,borderColor:'#f9f9f7',borderTopWidth:0,elevation:2}}>
                <Icon size={26} name='md-qr-scanner' color={'#fff'} style={{backgroundColor:'#39afb5',textAlign:'center',paddingHorizontal:11,borderRadius:120,marginHorizontal:-10,paddingVertical:10,poisition:'absolute',top:-25,left:10,width:'100%',elevation:5}} />
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
            backgroundColor: '#ffffffff',
            elevation: 5,
            height: 55,
            paddingVertical: 0,
            marginTop:10
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
    Internet
},{
    headerMode:'none'
})


const switchNavigator = createSwitchNavigator({
appStackNavigator,
// HomeStack,
// TransactionsStack,
// ScanStack,
// DealsStack,
// AkunStack,
AuthStack
},
{
    initialRouteName : 'appStackNavigator'
})

const AppContainer = createAppContainer(switchNavigator)

export default AppContainer
