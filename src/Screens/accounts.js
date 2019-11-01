import React from 'react'
import {View,Text,ImageBackground,StatusBar,ScrollView,FlatList,TouchableOpacity,StyleSheet,Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {logout} from '../Public/Actions/users'
import {connect} from 'react-redux'
import CardAccounts from '../Components/cardAccount'
import Icon from 'react-native-vector-icons/Ionicons'
import { ListItem } from 'react-native-elements'
// import ListinProfile from '../Components/listInProfile'


class Accounts extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      token:'',
      nama: '',
      kontak:'',
      email:'',
      status:'',

    }
  }


componentDidMount = async() => {
  const nama = await AsyncStorage.getItem('nama')
  const kontak = await AsyncStorage.getItem('kontak')
  const status = await AsyncStorage.getItem('status')
  const email = await AsyncStorage.getItem('email')
  if(nama != null || kontak != null || status != null || email != null){
    this.setState({
      nama:nama,
      kontak:kontak,
      status:status,
      email:email
    })
  }
}

_handleLogout = async () => {
  const value = await AsyncStorage.getItem('id')
  if(value !== null){
    console.warn(value,'this here')
    this.setState({
        token: Number(value)
      })
    }
  await this.props.dispatch(logout({iduser:this.state.token}))
  .then(res => {
    AsyncStorage.removeItem('id')
    this.props.navigation.navigate('AuthStack')
  })
  .catch(err => {
    console.log(err)
  })
  return value
}
    render(){
      const {nama} = this.state
        return(
            <View style={{flex:1,marginTop:25}}>
              <StatusBar backgroundColor='#39afb5' />
                <CardAccounts nama={nama} kontak={this.state.kontak} email={this.state.email} status={this.state.status} logout={this._handleLogout} />
                <View style={{flex:1,backgroundColor:'#f9f9f7'}}>
                </View>
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