import React from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Animated
    } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {withNavigation} from "react-navigation"
import {saldo} from '../../Public/Actions/users'
import {connect} from 'react-redux'

import HeaderHome from '../../Components/HeaderHome'
import BannerInfo from '../../Components/bannerInfo'
import ContentFeatures from '../../Components/contentFeatures'
import Banner from '../../Components/banner'
import CardsMerchant from '../../Components/merchantContent'
import Footer from '../../Components/footer'

const Hr = () => {
    return(
        <View style={{backgroundColor:'#ecf0f1',height:10,width:width}}></View>
    )
}

const Label = (props) => {
    return(
        <View style={{paddingLeft:15,marginBottom:10,paddingTop:10}}>
                    <Text>
                       {props.label}
                    </Text>
                </View>
    )
}

const {height,width} = Dimensions.get('window')
class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notif:3,
            scrollY: new Animated.Value(0),
            saldo:'',
            token:'',
            point:''
        }
    }

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({token:res})
            }
        })
        const subs = 
            this.props.navigation.addListener('willFocus', () => {
                this.getSaldo()
            })
                this.getSaldo()
        }
        
    componentWillUnMount (){
        subs.remove()
    }
    
    getSaldo = async () => {
        await this.props.dispatch(saldo(this.state.token))
        .then(res => {
            this.setState({
                saldo:res.action.payload.data.data.nominal,
                point:res.action.payload.data.data.point,
                })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){

        const staticHeaders = this.state.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1]
        })
        return(
            <View style={{flex:1}}>
                <StatusBar barStyle="light-content" backgroundColor="rgba(30, 39, 46,0.3)" translucent={true} />

                <Animated.View
                    style={[styles.staticHeader,{opacity:staticHeaders}]}
                >
                <LinearGradient
                style={styles.staticHeader}
                    start={{x: 0, y: 1}} 
                    end={{x: 2, y:1.}} 
                    colors={['#39afb5','#57bfed']}
                >
                    <View style={styles.topHeader}>
                    <View style={{width:width/4.5,height:25}}>
                        <Image 
                            style={{flex:1,width:undefined,height:undefined}}
                            source={require('../../Assets/Icons/Logo_gems.png')} resizeMode='contain' />
                    </View>
                        <Icon 
                            style={{position:'relative'}}
                            name={'md-notifications'} 
                            size={26} color={'#fff'} 
                            onPress={() => {this.props.navigation.navigate('Notification')}}
                        />
                        {this.state.notif !== 0 && this.state.notif !== '' ?
                        <View
                        style={styles.badge}
                        >
                        <Text style={styles.teksNotif}>{this.state.notif}</Text>
                        </View>
                        :null
                        }
                </View>

                </LinearGradient>
                </Animated.View>

                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                        )}
                >
                <HeaderHome notif={this.state.notif} saldo={this.state.saldo} point={this.state.point} />
                
                
                {/* contents icon features */}
                <ContentFeatures />

                <Hr />

                {/* content cards banner */}
                <LinearGradient
                    colors={['#fff','rgba(85, 239, 196,0.2)']}
                    style={{ paddingBottom: 10,backgroundColor:'#fff',paddingTop:15 }}>
                        <Banner />
                </LinearGradient>

                <Hr/>

                {/* content cards merchant */}
                <Label label='Merchant Terdekat' />
                <CardsMerchant />

                <Hr/>
                {/* content banner informasi */}
                <Label label='Informasi' />
                <BannerInfo />

                </Animated.ScrollView>
                
                <Footer/>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(HomePage)


const styles = StyleSheet.create({
    header:{
        height:height/3.5,
        position:'relative'
    },
    saldo:{
        flexDirection:'row',
        height:height/9,
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:5,
        elevation:5
    },
    conWrapperSaldo:{
        position:'absolute',
        left:0,
        top:height/5,
        paddingHorizontal:20,
        backgroundColor:'transparent',
        height:height/9,
        width:'100%',
        zIndex:999
},
    saldoCash:{

    },
    logoSaldoPoint:{
        width:9,
        height:9,
        marginTop:3
    },
    staticHeader:{
        height:height/9,
        position:'absolute',
        top:0,
        right:0,
        left:0,
        zIndex:+1,
    },
    topHeader:{
        flexDirection: 'row',
        height:height/13,
        marginTop:height/26,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    badge:{
        position:'absolute',
        width:13,
        height:13,
        borderRadius:13/2,
        backgroundColor:'#d63031',
        top:10,
        right:15,
        justifyContent:'center',
        alignItems:'center'
    },
    teksNotif:{
        color:'#fff',
        fontSize:9,
        fontWeight:'700',
        padding:0
    }
})
