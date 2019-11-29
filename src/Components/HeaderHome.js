import React,{Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {withNavigation} from 'react-navigation'


const {height,width} = Dimensions.get('window')
const mainColor = '#39afb5'

const ListContent = (props) => {
        return(
            <TouchableOpacity style={s.content} onPress={props.route}>
                <View style={s.wrapIcon}>
                    <Image
                    resizeMode='contain'
                    style={s.image}
                    source={props.icon} />
                </View>
                <Text style={s.title}>{props.title}</Text>
            </TouchableOpacity>
        )
    }

class HeaderHome extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <View style={s.container}>
                <View style={s.topHeader}>
                        <Image 
                            source={require('../Assets/Icons/Logo_gems.png')} style={{width:width/3.5,height:25}}/>
                        <Icon name={'md-notifications'} 
                    size={26} color={'#fff'} />
                </View>
                <View style={{flex:1}}></View>
                
                <View style={[s.card]}>
                    <ListContent icon={require('../Assets/Icons/TopUp_icon.png')} title='Top Up' route={() => {this.props.navigation.navigate('TopUp')}} />
                    <ListContent icon={require('../Assets/Icons/Barcode_icon.png')} title='Barcode' route={() => {this.props.navigation.navigate('QrCode')}} />
                    <ListContent icon={require('../Assets/Icons/Transfer_icon.png')} title='Transfer' route={() => {this.props.navigation.navigate('Transfer')}} />
                    <ListContent icon={require('../Assets/Icons/Withdraw_icon.png')} title='Withdraw' route={() => {this.props.navigation.navigate('TarikSaldo')}} />
                </View>
            </View>
        )
    }
}
export default withNavigation(HeaderHome)

const s = StyleSheet.create({
    container:{
        backgroundColor:mainColor,
        height:height/2,
        justifyContent: 'flex-end',
        },
    card:{
        backgroundColor:'#f9f9f7',
        height:height/5,
        borderTopLeftRadius: height/13,
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between',
        elevation:5,
        paddingTop:10
    },
    topHeader:{
        flexDirection: 'row',
        height:height/13,
        marginTop:height/26,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    content:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
    },
    image:{
        flex:1
    },
    title:{
        color:mainColor
    },
    wrapIcon:{
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:35,
        height:35
    }
})