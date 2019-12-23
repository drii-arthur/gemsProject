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
import LinearGradient from 'react-native-linear-gradient'


const {height,width} = Dimensions.get('window')
const mainColor = '#39afb5'

const ListContent = (props) => {
        return(
            <TouchableOpacity style={s.content} onPress={props.route}>
                <View style={s.wrapIcon}>
                    <Image
                    resizeMode='contain'
                    style={{flex:1}}
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
        const {notif,saldo,point} = this.props
        return(
            <View
                style={s.container}>
                <ImageBackground
                    source={require('../Assets/Images/bg1.png')}
                    style={{width:'100%',height:'100%'}} resizeMode='cover'>
                <View style={s.topHeader}>
                    <View style={{width:width/4.5,height:25}}>
                        <Image 
                            style={s.image}
                            source={require('../Assets/Icons/Logo_gems.png')} resizeMode='contain' />
                    </View>
                        <Icon 
                            style={{position:'relative'}}
                            name={'md-notifications'} 
                            size={26} color={'#fff'} 
                            onPress={() => {this.props.navigation.navigate('Notification')}}
                        />
                        {notif !== 0 && notif !== '' ?
                        <View
                        style={{position:'absolute',width:13,height:13,borderRadius:13/2,backgroundColor:'#d63031',top:10,right:15,justifyContent:'center',alignItems:'center',}}
                        >
                        <Text style={{color:'#fff',fontSize:9,fontWeight:'700',padding:0}}>{notif}</Text>
                        </View>
                        :null
                        }
                </View>

                {/* content saldo */}
                <View 
                style={s.wrapperSaldo}>
                    <View style={s.right}>
                        <Text style={s.saldo}>Saldo</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={s.rp}>Rp</Text>
                        <Text style={s.nominal}>{saldo}</Text>
                    </View>
                    </View>
                    <View style={[s.kiri]}>
                        <LinearGradient
                            style={[s.kiri,{width:'100%',height:'100%',elevation:2}]}
                            start={{x: 0, y: 1}} 
                            end={{x: 2, y:1.}} 
                            colors={['#39afb5','#57bfed']}
                        >
                            <View style={s.wrapperPoint}>
                                <Image source={require('../Assets/Icons/coins.png')} resizeMode='center'/>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:12,color:'#fff',fontWeight:'700'}}>Point</Text>
                                <Text style={s.point}>{point}</Text>
                            </View>
                        </LinearGradient>
                        
                    </View>
                </View>
                {/* end of content saldo */}
                
                <View style={[s.card]}>
                    <ListContent icon={require('../Assets/Icons/TopUp_icon.png')} title='Top Up' route={() => {this.props.navigation.navigate('TopUp')}} />
                    <ListContent icon={require('../Assets/Icons/Barcode_icon.png')} title='Barcode' route={() => {this.props.navigation.navigate('QrCode')}} />
                    <ListContent icon={require('../Assets/Icons/Transfer_icon.png')} title='Transfer' route={() => {this.props.navigation.navigate('Transfer')}} />
                    <ListContent icon={require('../Assets/Icons/Withdraw_icon.png')} title='Withdraw' route={() => {this.props.navigation.navigate('TarikSaldo')}} />
                </View>

                <View style={{height:height/12}}></View>
                {/* </L> */}
                </ImageBackground>
            </View>
        )
    }
}
export default withNavigation(HeaderHome)

const s = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:height/2.4,
        justifyContent: 'flex-end',
        },
    card:{
        height:height/10,
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between',
        backgroundColor:'#fff',
        marginHorizontal:20,
        alignItems:'center',
        elevation:5,
        borderRadius:10,
        paddingVertical:5
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
        alignItems:'center',
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    title:{
        color:mainColor,
        fontSize:12
    },
    wrapIcon:{
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:35,
        height:35
    },
    wrapperSaldo:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        paddingLeft:20
    },
    right:{
        flex:2
    },
    saldo:{
        color:'#fff',
        fontSize:14,
        fontWeight:'700'
    },
    rp:{
        color:'yellow',
        marginTop:3,
        marginRight:3,
        fontSize:11
    },
    nominal:{
        fontSize:24,
        color:'yellow',
        fontWeight:'700'
    },
    kiri:{
        flex:1,
        height:50,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    point:{
        color:'yellow',
        fontWeight:'700'
    },
    wrapperPoint:{
        width:30,
        height:30,
        marginRight:8,
        borderRadius:30/2,
        borderWidth:2,
        borderColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    }
})