import React from 'react'
import {View,Text,ImageBackground,StatusBar,ScrollView,FlatList,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {logout} from '../Public/Actions/users'
import {connect} from 'react-redux'
import CardAccounts from '../Components/cardAccount'
import Icon from 'react-native-vector-icons/Ionicons'
import { ListItem } from 'react-native-elements'

  const list = [
  {
    name: 'Payment Cards',
  },
  {
    name: 'Change Pin',
  },
   {
    name: 'Change Profil Picture',
  },
   {
    name: 'Help',
  },
   {
    name: 'Terms & Conditions',
  },
   {
    name: 'Privacy Police',
  }
]

class Accounts extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      token:'',
      nama: '',
      kontak:'',
      email:'',
      status:''
    }
  }


keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    bottomDivider
    chevron
  />
)

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
      console.warn(nama)
      console.warn(this.state.token)
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#39afb5' />
                <CardAccounts nama={nama} kontak={this.state.kontak} email={this.state.email} status={this.state.status} />
                <View style={{flex:1,backgroundColor:'#dfe4ea'}}>
                <View style={{paddingHorizontal:15,backgroundColor:'#fff',flexDirection:'row',alignItems:'center',paddingVertical:5,marginBottom:10}}>
                <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                <Icon name={'md-gift'} size={30} color={'orange'} />
                <Text style={{fontSize:17,marginLeft:10,color:'#505050',fontFamily:'roboto'}}>GEM Referral Kode</Text>
                </View>
                <View>
                <Text  style={{fontSize:17,marginLeft:10,color:'#505050',fontFamily:'roboto'}}>1234567</Text>
                </View>     
                </View>
                <FlatList
                    style={{color:'#505050'}}
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderItem}
                    />
                    <TouchableOpacity style={{paddingHorizontal:15,paddingVertical:5,backgroundColor:'#fff',marginTop:10}} onPress={this._handleLogout}>
                    <Text  style={{fontSize:17,color:'#505050',fontFamily:'roboto'}}>Logout</Text>
                    </TouchableOpacity>
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