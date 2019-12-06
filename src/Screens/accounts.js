import React from 'react'
import {View,Text,ImageBackground,StatusBar,ScrollView,FlatList,TouchableOpacity,StyleSheet,Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {logout} from '../Public/Actions/users'
import {connect} from 'react-redux'
import CardAccounts from '../Components/cardAccount'
import Icon from 'react-native-vector-icons/Ionicons'
import { ListItem } from 'react-native-elements'
// import ListinProfile from '../Components/listInProfile'

import Footer from '../Components/footer'


class Accounts extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      token:'',
      name: '',
      phone:'',
      status:'',
    }
  }


componentDidMount = async() => {
  const name = await AsyncStorage.getItem('name')
  const phone = await AsyncStorage.getItem('phone')
  await AsyncStorage.getItem('accountType',(err,res) => {
    console.log(res)
    if(res){
      this.setState({
        status:res
      })
    }
    
  })
  if(name != null || phone != null){
    this.setState({
      name:name,
      phone:phone,
    })
  }
}

_handleLogout = async () => {
  const token = await AsyncStorage.getItem('token',(err,res) => {
    if(res){
      AsyncStorage.removeItem('token')
      AsyncStorage.removeItem('name')
      AsyncStorage.removeItem('phone')
      AsyncStorage.removeItem('accountType')
      this.props.navigation.navigate('AuthStack')
    }else{
      alert('gagal cuk')
    }
  })
//   if(value !== null){
//     console.warn(value,'this here')
//     this.setState({
//         token: value
//       })
//     }
//   await this.props.dispatch(logout(this.state.token))
//   .then(res => {
//     AsyncStorage.removeItem('token')
//     AsyncStorage.removeItem('name')
//     AsyncStorage.removeItem('phone')
//     AsyncStorage.removeItem('status')
//     this.props.navigation.navigate('AuthStack')
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   return value
}
    render(){
      console.warn(this.state.status)
        return(
            <View style={{flex:1,marginTop:25}}>
              <StatusBar barStyle="dark-content" backgroundColor="#39afb5" translucent={true} />
                <CardAccounts name={this.state.name} phone={this.state.phone} status={this.state.status} logout={this._handleLogout} />
                <View style={{flex:1,backgroundColor:'#f9f9f7'}}>
                </View>
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

export default connect(mapStateToProps)(Accounts)
const styles = StyleSheet.create({
    modal: {
    justifyContent: 'center',
    alignItems: 'center'
    },
    modal3: {
    height: 300,
    width: 300
    },
    text: {
    color: "black",
    fontSize: 22
  }
})