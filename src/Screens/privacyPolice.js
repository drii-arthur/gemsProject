import React from 'react'
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity,ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Components/header'
import { WebView } from 'react-native-webview'

const {height,width} = Dimensions.get('window')
class PrivacyPolice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:true,
        }
    }

    hideLoading = () => {
        this.setState({
            isLoading:false
        })
    }

    showLoading = () => {
        this.setState({
            isLoading:true
        })
    }
    render(){
        return(
            <View style={{flex:1,marginTop:25}}>
           <StatusBar backgroundColor='#39afb5' />
                <Header title='Privacy & Police' />
                
                <View style={{flex:1}}>
                    <WebView 
                    source={{ uri: 'https://facebook.github.io/react-native/' }}
                    onLoadStart={() => {this.showLoading()}}
                    onLoad={() => {this.hideLoading()}}
                    style={{ flex: 1 }}
                    />
                    {this.state.isLoading && 
                    <ActivityIndicator 
                        size='large' color='#39afb5' 
                        style={{
                            flex: 1,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center' }}
                        />}
                </View>
                
            </View>
        )
    }
}

export default PrivacyPolice

const styles = StyleSheet.create({
})