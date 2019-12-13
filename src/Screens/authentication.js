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
class Authentication extends Component {
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
    return (
            <ImageBackground
            source={require('../Assets/Images/bg1.png')}
            resizeMode='cover'
             style={{ flex:1,backgroundColor:'#39afb5',justifyContent: 'center',alignItems: 'center', }}>
                <Image source={require('../Assets/Icons/Logo_gems.png')} />
                <ActivityIndicator size='large' color='#fff' paddingTop={200} />
            </ImageBackground>
        )
    }
}

export default Authentication
