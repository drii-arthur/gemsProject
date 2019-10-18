import React from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Transfer from '../Screens/transfers'
import QrCode from '../Screens/qrcode'
import TarikSaldo from '../Screens/tarikSaldo'
class Transactions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index:0,
            routes: [
                { key: 'Transfer', title: 'Transfer'},
                { key: 'QrCode', title: 'Qr Code'},
                { key: 'TarikSaldo', title: 'Tarik Saldo'},
            ]
        }
    }
    render(){
        return(
            <View style={styles.container}>
                 <StatusBar backgroundColor='#39afb5' />
                 <TabView style={{ backgroundColor: '#fff' }}
        navigationState={this.state}
        renderScene={SceneMap({
          Transfer: Transfer,
          QrCode: QrCode,
          TarikSaldo:TarikSaldo
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={props =>
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'white' }}
                style={styles.tabNav}
                labelStyle={styles.labelStyle}
            />
        }
      />
            </View>
        )
    }
}

export default Transactions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scene: {
        flex: 1,
    },
    tabNav: {
        backgroundColor: '#39afb5',
        paddingVertical: 0
    },
    labelStyle: {
        fontSize: 14,
        fontWeight: '700',
    }
})
