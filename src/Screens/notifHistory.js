import React,{Component} from "react"
import { View,Text,StyleSheet,FlatList,TouchableOpacity,Image } from "react-native"
import Icon  from "react-native-vector-icons/Ionicons";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

class NotifHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                // {
                // id:1,
                // title:'This is Text Dummy'
                // },
                // {
                // id:2,
                // title:'This is Text Dummy'
                // },
                // {
                // id:3,
                // title:'This is Text Dummy'
                // },
            ],
            opened:false
        }
    }

    handleOpen = (id) => {
        const {todos} = this.state
        const filtered = todos.filter(x => x.id !== id)

        this.setState({ 
            todos: filtered,
            opened:true
            })
            alert(this.state.opened)
            return filtered
    }

    render(){
        return(
            <View style={{flex:1}}>
            {this.state.data == '' ?
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:250,height:225,marginBottom:15}}>
                <Image source={require('../Assets/Images/Notfound.png')} style={{width:undefined,height:undefined,flex:1}} resizeMode='contain' />
                </View> 
             <Text style={{color:'grey',textAlign:'center'}}>Belum Ada History Nih!!!</Text>
             </View>
             
             :
            <FlatList
            data={this.state.data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity style={styles.list}
                    onPress={() => {this.handleOpen()}}
                    onLongPress={() => {alert('your long tap')}}
                    >
                    <Icon name={'md-information-circle-outline'} size={20} color={'grey'} />
                    <Text style={this.state.opened == false ? styles.textList : styles.listOpen}>{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
            />
            }

            </View>
        )
    }
}

export default NotifHistory

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#fff',
        padding:12,
        elevation:4,
        borderBottomWidth:3,
        borderBottomColor:'#39AFB5',
        flexDirection:'row'
    },
    text:{
        color:'#39AFB5',
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
    }
})