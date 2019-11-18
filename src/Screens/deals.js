import React from 'react'
import {
    View,
Text,
StatusBar,
StyleSheet,
Dimensions,
TouchableOpacity,
ScrollView,
FlatList,
Image,
ImageBackground,
Platform,

} from 'react-native'
import  Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'

import Banner from '../Components/banner'
import Header from '../Components/header'

const {width,height} = Dimensions.get('window')
const HEADER_HEIGHT = height/6
const color = "#39AFB5"
class Deals extends React.Component{
    constructor(){
        super()
        this.state = {
            randomColor : ['#0984e3','#00cec9','#fab1a0'],
            colorCode:'',
            data:[
                {
                    id:1,
                    icon: 'all'
                },
                 {
                    id:2,
                    icon: 'games'
                },
                 {
                    id:3,
                    icon: 'belanja'
                },
                 {
                    id:4,
                    icon: 'salon'
                },
                 {
                    id:5,
                    icon: 'all'
                },
                 {
                    id:6,
                    icon: 'all'
                }
            ]
        }
    }

    // componentWillMount(){
    //     this.changeColor()
    //     this.scrollY  = new Animated.Value(0)
    //     this.startHeaderHeight = 100
    //     this.endHeaderHeight = 50 + 25
    //     if(Platform.OS == "android"){
    //         this.startHeaderHeight = 120 + StatusBar.currentHeight
    //         this.endHeaderHeight = 50 + StatusBar.currentHeight
    //     }
    //     this.animatedHeaderHeight = this.scrollY.interpolate({
    //         inputRange:[0,50],
    //         outputRange:[this.startHeaderHeight,this.endHeaderHeight],
    //         // extrapolate:'clamp'
    //     })
    // }

    changeColor = () => {
        let color = this.state.randomColor[Math.floor(Math.random()*this.state.randomColor.length)]
        this.setState({
            colorCode:color
        })
    }
    render(){
        const scrollY = new Animated.Value(0)
        const headerY = Animated.interpolate(scrollY,{
            inputRange:[0,height/4],
            outputRange:[0,-height/4],
            extrapolate:'clamp'
        })
        const categoryY=Animated.interpolate(scrollY,{
            inputRange:[280,600],
            outputRange:[5,-35],
            // extrapolate:'clamp'
        })
        return(
            <View style={{flex:1,zIndex:-1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.2)" translucent={true} />
                
                <Animated.View
                style={{
                    height:height/6,
                    transform:[{translateY:headerY}],
                    zIndex:+1000,
                    position: 'absolute',
                    top:headerY,
                    left:0,
                    bottom:0,
                    right:0
                    }}
                >
                <Image 
                source={{uri:'https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-374.jpg?size=626&ext=jpg'}}
                style={{
                    width:width,
                    height:height/6,
                }}
                />
                {/* <ImageBackground 
                    source={{uri:'https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-374.jpg?size=626&ext=jpg'}} 
                    style={{height:height/6,marginBottom:16,width:'100%'}}>
                    <View style={{height:'100%',backgroundColor:'rgba(46, 204, 113,0.6)',justifyContent:'flex-end',paddingLeft:20,paddingBottom:20}}>
                    <Text style={{color:'#fff',fontSize:18,fontWeight:'700',letterSpacing:1}}>DEALS</Text>
                    </View>
                </ImageBackground> */}
                </Animated.View>

                <Animated.View 
                    style={{paddingHorizontal:10,height:height/12,transform:[{translateY:categoryY}],zIndex:1000,marginTop:categoryY,backgroundColor: '#fff',}}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data}
                        keyExtractor={(item) => item.id}
                        renderItem= {({item}) => {
                            return(
                                <TouchableOpacity style={s.listHorizontal}>
                                    <Text style={{color:'#fff'}}>{item.icon}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </Animated.View>
                
            <Animated.ScrollView
            // style={{zIndex:-1000}}
            scrollEventThrottle={10}
            bounces={false}
            onScroll={Animated.event(
                [
                    {nativeEvent:{contentOffset:{y:scrollY}
                    }}
                ]
            )}
            showsVerticalScrollIndicator={false}
            >
                {/* <View style={{height:height/6,padding:10}}>
                    <Image source={require('../Assets/Images/Dashboard_bg.png')} style={{height:height/9,width:'auto'}} />
                </View> */}
                <View style={{height:height/10,backgroundColor:'#fff',width:width}}></View>

                <View style={{backgroundColor:'red',height:height/6,marginHorizontal: 30,borderRadius:10,elevation:5,marginBottom:20}}>
                    <Image source={require('../Assets/Images/Slider-02.png')} style={{height:'100%',width:'100%',borderRadius:10}} />
                </View>
                <View style={{backgroundColor:'#fff',height:height/6,marginHorizontal: 30,borderRadius:10,elevation:5,marginBottom:20}}>
                    <Image source={require('../Assets/Images/Slider-01.png')} style={{height:'100%',width:'100%',borderRadius:10}} />
                </View>
                <View style={{backgroundColor:'red',height:height/6,marginHorizontal: 30,borderRadius:10,elevation:5,marginBottom:20}}>
                    <Image source={require('../Assets/Images/Slider-02.png')} style={{height:'100%',width:'100%',borderRadius:10}} />
                </View>
                 <View style={{backgroundColor:'red',height:height/6,marginHorizontal: 30,borderRadius:10,elevation:5,marginBottom:20}}>
                    <Image source={require('../Assets/Images/Slider-02.png')} style={{height:'100%',width:'100%',borderRadius:10}} />
                </View>
                <View style={{backgroundColor:'red',height:height/6,marginHorizontal: 30,borderRadius:10,elevation:5,marginBottom:20}}>
                    <Image source={require('../Assets/Images/Slider-02.png')} style={{height:'100%',width:'100%',borderRadius:10}} />
                </View>
                </Animated.ScrollView>
            </View>
        )
    }
}

export default Deals

const s = StyleSheet.create({
    listHorizontal:{
        backgroundColor:'#00cec9',
        height:height/16,
        marginRight:10,
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:20,
        alignItems:'center',
        marginTop:5,
        borderRadius:5
    }
})
