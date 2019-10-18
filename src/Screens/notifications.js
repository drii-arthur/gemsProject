import React,{Component} from "react"
import { View,Text,StyleSheet,FlatList,TouchableOpacity,Dimensions } from "react-native"
import Icon  from "react-native-vector-icons/Ionicons";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Notif from '../Screens/notifNotif'
import NotifHistory from '../Screens/notifHistory'

class Notification extends Component{
    constructor(props){
        super(props)
        this.state = {
            index:0,
            routes: [
                { key: 'Notif', title: 'Notifications'},
                { key: 'NotifHistory', title: 'History'},
            ]
        }
    }

    // handleOpen = (id) => {
    //     const {todos} = this.state
    //     const filtered = todos.filter(x => x.id !== id)

    //     this.setState({ 
    //         todos: filtered,
    //         opened:true
    //         })
    //         alert(this.state.opened)
    //         return filtered
    // }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View style={{flex:1}}>
            <View style={styles.header}>
            <Icon name={'ios-arrow-back'} size={24} color='#fff' onPress={() => {this.props.navigation.goBack()}} />
                <Text style={styles.text}>
                Notifikasi
                </Text>
            </View>
            <TabView style={{ backgroundColor: '#fff' }}
        navigationState={this.state}
        renderScene={SceneMap({
         Notif:Notif,
         NotifHistory:NotifHistory,
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

export default Notification

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#39afb5',
        padding:12,
        flexDirection:'row'
    },
    text:{
        color:'#fff',
        fontSize:18,
        marginLeft:20
    },
    list:{
        padding:18,
        borderBottomWidth:1,
        borderBottomColor:'#ecf0f1',
        flexDirection:'row',
        alignItems:'center'
    },
    listOpen:{
        fontWeight:'bold',
        marginLeft:10,
        color:'grey'
    },
    textList:{
        fontWeight:'bold',
        marginLeft:10
    },
     tabNav: {
        backgroundColor: '#39afb5',
        paddingVertical: 0
    },
    labelStyle: {
        fontSize: 12,
        fontWeight: '700',
    }
})