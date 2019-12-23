import React,{Component} from 'react'
import {
    View,
    ActivityIndicator,
    Dimensions,
    ImageBackground,
    Image
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'


const {height,width} = Dimensions.get('window')
var Spinner = require('react-native-spinkit')
class Authentication extends Component {
    constructor(props){
        super(props)
        this.state = {
            types: [ 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            isVisible: true,
            index:1
        }
    }
    componentDidMount = async () => {
        await AsyncStorage.getItem('token',(err,token) => {
            setTimeout(() => {
                 if(token){
                this.props.navigation.navigate('HomePage')
            }else{
                this.props.navigation.navigate('Login')
            }
            }, 1000)
           
        })
    }
    render(){
        var type = this.state.types[this.state.index]
    return (
            <ImageBackground
            source={require('../Assets/Images/bg1.png')}
            resizeMode='cover'
             style={{ flex:1,backgroundColor:'#39afb5',justifyContent: 'center',alignItems: 'center', }}>
                <Image source={require('../Assets/Icons/Logo_gems.png')} />
                <Spinner isVisible={this.state.isVisible} size={24} type={type} color='#fff'/>
            </ImageBackground>
        )
    }
}

export default Authentication
