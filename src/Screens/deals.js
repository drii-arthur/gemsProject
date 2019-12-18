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
const data2 = [
            {
                    Nominal:'70.000',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL1HbA31_pQcwzjRNYwCM0JhpK3nl9CFeSwGlABhIjxz1ZYbGv',
                    valid:'20-20-2020',
                    kodeVoucher:'0988980',
                    id:1,
                    title:'Voucher Dimsum 100 rb',
                    snk:['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Curabitur id mauris ornare, auctor lectus interdum, molestie nisi.',
                        'In egestas sapien et magna laoreet luctus',
                        'Aenean sed massa at quam fringilla pulvinar posuere et tortor',
                        'Vivamus facilisis nisi at enim dapibus, eu fermentum dolor condimentum.']
                },
                {
                    Nominal:'75.000',
                    image:'http://www.rejuve.co.id/files/website_banner_launching_summer_calamansi_fruit_1185x709px_01.jpg',
                    valid:'20-30-2020',
                    kodeVoucher:'0988980',
                    id:2,
                    title:'Voucher Yushinoya 100 rb',
                    snk:['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Curabitur id mauris ornare, auctor lectus interdum, molestie nisi.',
                        'In egestas sapien et magna laoreet luctus',
                        'Aenean sed massa at quam fringilla pulvinar posuere et tortor',
                        'Vivamus facilisis nisi at enim dapibus, eu fermentum dolor condimentum.']
                },
                {
                    Nominal:'50.000',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL1HbA31_pQcwzjRNYwCM0JhpK3nl9CFeSwGlABhIjxz1ZYbGv',
                    valid:'20-15-2020',
                    kodeVoucher:'0988980',
                    id:3,
                    title:'Voucher Apa Aja 75.000',
                    snk:['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Curabitur id mauris ornare, auctor lectus interdum, molestie nisi.',
                        'In egestas sapien et magna laoreet luctus',
                        'Aenean sed massa at quam fringilla pulvinar posuere et tortor',
                        'Vivamus facilisis nisi at enim dapibus, eu fermentum dolor condimentum.']
                },
                {
                    Nominal:'75.000',
                    image:'http://www.rejuve.co.id/files/website_banner_launching_summer_calamansi_fruit_1185x709px_01.jpg',
                    valid:'20-30-2020',
                    kodeVoucher:'0988980',
                    id:4,
                    title:'Voucher Yushinoya 100 rb',
                    snk:['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Curabitur id mauris ornare, auctor lectus interdum, molestie nisi.',
                        'In egestas sapien et magna laoreet luctus',
                        'Aenean sed massa at quam fringilla pulvinar posuere et tortor',
                        'Vivamus facilisis nisi at enim dapibus, eu fermentum dolor condimentum.']
                },
                {
                    Nominal:'75.000',
                    image:'http://www.rejuve.co.id/files/website_banner_launching_summer_calamansi_fruit_1185x709px_01.jpg',
                    valid:'20-30-2020',
                    kodeVoucher:'0988980',
                    id:5,
                    title:'Voucher Yushinoya 100 rb',
                    snk:['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Curabitur id mauris ornare, auctor lectus interdum, molestie nisi.',
                        'In egestas sapien et magna laoreet luctus',
                        'Aenean sed massa at quam fringilla pulvinar posuere et tortor',
                        'Vivamus facilisis nisi at enim dapibus, eu fermentum dolor condimentum.']
                },
        ]
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
            <View style={{flex:1,}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.2)" translucent={true} />
            <Header title='Deals' />
                <View 
                    style={{paddingHorizontal:10,height:height/12,backgroundColor: '#fff',}}>
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
                </View>

                <View style={{marginTop:20}} >
                    <FlatList 
                    data={data2}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity 
                            onPress={() => {this.props.navigation.navigate('DealsDetail',{item})}}
                            activeOpacity={0.9}
                            style={s.box}>
                                <Image source={{uri:`${item.image}`}} style={s.image}/>
                                <View style={s.left}>
                                    <View style={{flex:2,}}>
                                        <Text style={{color:'#39afb5',fontWeight:'bold'}}>{item.title}</Text>
                                        <Text style={{fontSize:11,color:'grey'}}>Rp <Text style={{fontSize:14}}>{item.Nominal}</Text></Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end'}}>
                                        <Text style={{fontSize:11,color:'grey'}}>Valid : <Text style={{fontSize:13}}>{item.valid}</Text></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    />
                </View>
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
        marginTop:10,
        borderRadius:5
    },
    box:{
        height:height/4,
        marginHorizontal: 15,
        elevation:5,
        marginBottom:20,
        borderRadius:10,
        backgroundColor:'#fff'
    },
    image:{
        height:'70%',
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    left:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:5,
        flexDirection:'row'
    }
})
