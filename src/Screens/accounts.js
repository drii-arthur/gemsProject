import React from 'react'
import {View,Text,ImageBackground,StatusBar,ScrollView,FlatList} from 'react-native'
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


keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    bottomDivider
    chevron
  />
)
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#39afb5' />
                <CardAccounts />
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
                    <View style={{paddingHorizontal:15,paddingVertical:5,backgroundColor:'#fff',marginTop:10}}>
                    <Text  style={{fontSize:17,color:'#505050',fontFamily:'roboto'}}>Logout</Text>
                    </View>
                 </View>
            </View>
        )
    }
}

export default Accounts