import React,{Component} from 'react'
import {
    View,
    ActivityIndicator,
    Dimensions
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'


const {height,width} = Dimensions.get('window')
class Authentication extends Component {
    componentWillMount = async () => {
        await AsyncStorage.getItem('token',(err,token) => {
            if(token){
                this.props.navigation.navigate('HomePage')
            }else{
                this.props.navigation.navigate('Login')
            }
        })
    }
    render(){
    return (
            <View style={{ width: width, height: height,backgroundColor:'#39afb5',justifyContent: 'center',alignItems: 'center', }}>
                <ActivityIndicator size='large' color='#fff' paddingTop={200} />
            </View>
        )
    }
}

export default Authentication
