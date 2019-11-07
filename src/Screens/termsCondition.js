import React from 'react'
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity,ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Components/header'
import { WebView } from 'react-native-webview'
import {withNavigation} from 'react-navigation'

const {height,width} = Dimensions.get('window')
class TermsConditions extends React.Component{
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
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
                <Header title='Terms & Conditions' />
                <View style={{flex:1}}>
                    <WebView 
                    source={{ uri: 'https://gems.id/privacy.html' }}
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

export default withNavigation(TermsConditions)

const styles = StyleSheet.create({
   
})