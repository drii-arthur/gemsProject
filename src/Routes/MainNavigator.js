import React from 'react'
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import {MultiBar,MultiBarToggle} from 'react-native-multibar'

import HomePage from '../Screens/Dashboard/home'
import Deals from '../Screens/deals'
// import Scan from '../Screens/scan'
import Transactions  from "../Screens/transaction";
import Accounts from '../Screens/accounts'
import ScanScreen from '../Screens/qrScanner'
import Login from '../Screens/login'
import Otp from '../Screens/otpScreen'
import Register from '../Screens/register'
import NewPin from '../Screens/newPin'
import {Routes} from './Routes'

const HomeStack = createStackNavigator({
    Home:{screen:HomePage}
},{
    initialRouteName:'Home',
headerMode:'none'})

const TransactionsStack = createStackNavigator({
    Transaction:{screen:Transactions}
},{
headerMode:'none',
initialRouteName:'Transaction'})

const ScanStack = createStackNavigator({
    Scan:{screen:ScanScreen}
},{
headerMode:'none',
initialRouteName:'Scan'
})

const DealsStack = createStackNavigator({
    Deals:{screen:Deals}
},{
headerMode:'none'})

const AkunStack = createStackNavigator({
    Akun:{screen:Accounts}
},{
headerMode:'none',
initialRouteName:'Akun'})

const AuthStack = createStackNavigator({
    Login,
    Register,
    Otp,
    NewPin
},{
    headerMode:'none',
    initialRouteName:'NewPin'
    
})

// const appStack = createMaterialTopTabNavigator ({
//     Home: {
//         screen: HomePage,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon name={'md-home'} size={24} color={tintColor} />

//             ),
//         },
//     },
//     Transactions: {
//         screen: Transactions,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon size={24} name='md-swap' color={tintColor} />
//             ),
//         },
//     },
//     Scan: {
//         screen: Scan,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 // <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => {console.log("FAB pressed")}} visible={true} iconTextComponent={<Icon name="md-swap"/>} style={{zIndex:1}} />
//                 <Icon size={24} name='md-qr-scanner' color={'#fff'} style={{backgroundColor:'#39afb5',poisition:'absolute',bottom:30,left:0,textAlign:'center',paddingHorizontal:10,borderRadius:120,marginHorizontal:-10,paddingVertical:10,elevation:10}} />
//             ),
//         },
//     },
//     Deals: {
//         screen: Deals,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon size={24} name='md-pricetags' color={tintColor} />

//             ),
//         },
//     },
//     Akun: {
//         screen: Accounts,
//         navigationOptions: {
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon size={24} name='md-contact' color={tintColor} />

//             ),
//         },
//     },
// },
// {
//     tabBarPosition: 'bottom',
//     swipeEnabled: false,
//     animationEnabled: false,
//     tabBarOptions: {
//         activeTintColor: '',
//         inactiveTintColor: 'grey',
//         upperCaseLabel: false,
//         labelStyle: {
//             fontSize: 10,
//             margin: 0,
//             fontWeight: '700'
//         },
//         style: {
//             backgroundColor: '#fff',
//             elevation: 5,
//             height: 60,
//             paddingVertical: 0,
//             borderTopColor:'grey',
//             borderTopWidth:1,
//             zIndex:-1,
//         },
//         indicatorStyle: {
//             height: 0,
//         },
//         showIcon: true,
//     },
// })

// const appStackNavigator = createStackNavigator({
//   App :appStack
// },{
//     headerMode:'none'
// })

// const TabsNavigator = createBottomTabNavigator({
//     [Routes.TabsHome]: {
//         screen: HomePage,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="md-home"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     },
//     [Routes.TabsTransaction]: {
//         screen: Transactions,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="md-swap"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     },
//     MultiBar: {
//         screen: () => null,
//         navigationOptions: ({navigation}) => ({
//             tabBarIcon: () => (
//                 <MultiBarToggle
//                     navigation={navigation}
//                     actionSize={30}
//                     routes={[
//                         {
//                             routeName: Routes.OtherScreen,
//                             color: '#FF8360',
//                             icon: (
//                                 <Icon
//                                     name="md-home"
//                                     color="#333333"
//                                     size={15}
//                                 />
//                             )
//                         },
//                         {
//                             routeName: Routes.OtherScreen,
//                             color: '#E8E288',
//                             icon: (
//                                 <Icon
//                                     name="md-home"
//                                     color="#333333"
//                                     size={15}
//                                 />
//                             )
//                         },
//                         {
//                             routeName: Routes.OtherScreen,
//                             color: '#7DCE82',
//                             icon: (
//                                 <Icon
//                                     name="md-home"
//                                     color="#333333"
//                                     size={15}
//                                 />
//                             )
//                         },
//                     ]}
//                     icon={(
//                         <Icon
//                             name="md-plus"
//                             color="#FFFFFF"
//                             size={24}
//                         />
//                     )}
//                 />
//             )
//         }),
//         params: {
//             navigationDisabled: true
//         }
//     },
//     [Routes.TabsDeals]: {
//         screen: Deals,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="md-pricetags"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     },
//     [Routes.TabsProfile]: {
//         screen: Accounts,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="md-contact"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     }
// }, {
//     tabBarComponent: MultiBar,
//     tabBarOptions: {
//         showLabel: false,
//         activeTintColor: '#39afb5',
//         inactiveTintColor: '#586589',
//         style: {
//             backgroundColor: '#fff',
//         },
//         tabStyle: {}
//     }
// });

// const appStackNavigator = createStackNavigator({
//     TabsNavigator
// },
// {
//     headerMode:'none'
// })

const switchNavigator = createSwitchNavigator({
// appStackNavigator,
HomeStack,
TransactionsStack,
ScanStack,
DealsStack,
AkunStack,
AuthStack
},
{
    initialRouteName : 'AuthStack'
})

const AppContainer = createAppContainer(switchNavigator)

export default AppContainer
