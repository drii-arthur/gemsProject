import React from 'react'
import {View,Text,ImageBackground,StatusBar,ScrollView,FlatList,TouchableOpacity,StyleSheet,Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {logout} from '../Public/Actions/users'
import {connect} from 'react-redux'
import CardAccounts from '../Components/cardAccount'
import Icon from 'react-native-vector-icons/Ionicons'
import { ListItem } from 'react-native-elements'
import {profile,upgradeProfile} from '../Public/Actions/users'
import ImagePicker from 'react-native-image-picker'
import Axios from 'axios'
import {qrCode} from '../Public/Actions/Qr'

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
      idUser:'',
      image:'',
      uri:'',
      fileName:'',
      qrCode:'gemssssssssss',
    }
  }


componentDidMount = async () => {
  const token = await AsyncStorage.getItem('token',(err,res) => {
    if(res) {
      this.setState({token:res})
    }else{alert(err)}
  })
  await this.props.dispatch(profile(this.state.token))
  .then(res => {
    let data = res.action.payload.data.data
    this.setState({
      name:data.name,
      phone:data.phone,
      status:data.status,
      idUser:data.id,
      image:data.photo_profile
    })
    
  })
  .catch(err => {
    console.log(err)
  })

   await this.props.dispatch(qrCode(this.state.token))
            .then(res => {
                console.log(res.action.payload.data.data)
                this.setState({qrCode:res.action.payload.data.data})
            })
            .catch(err => {
                console.log(err)
                
            })
}



_handleCamera = () => {
        const options = {
            storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        }
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            // if(response.uri){
              
            //     this.setState({
            //       image:response.uri,
            //       uri:response.uri,
            //       fileName:response.fileName
            //     }, () => {this.handleUpdate()})            
            // }

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    // const source = { uri: response.uri };
    this.setState({
      image: response.uri,
      uri:response.path,
      fileName:response.fileName
    })
    this.handleUpdate()
  }
});
    }

    handleUpdate = async () => {
      let formData = new FormData();
                formData.append('photo_profile', {
                uri: this.state.uri,
                type: 'image/jpeg',
                name: this.state.fileName,
            })
            formData.append('perangkat','mobile')
            // const data = {
            //   photo_profile : this.state.uri,
            //   perangkat:'mobile'
            // }
      await this.props.dispatch(upgradeProfile(this.state.idUser,{photo_profile:this.state.uri,perangkat:'Mobile'},this.state.token))
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err,'errorr')
      })
    }

    


_handleLogout = async () => {
  const token = await AsyncStorage.getItem('token',(err,res) => {
    if(res){
      AsyncStorage.removeItem('token')
      AsyncStorage.removeItem('name')
      AsyncStorage.removeItem('phone')
      AsyncStorage.removeItem('accountType')
      AsyncStorage.removeItem('id')
      this.props.navigation.navigate('AuthStack')
    }else{
      alert('gagal cuk')
    }
  })
}
    render(){
      console.log(this.state.image)
        return(
            <View style={{flex:1}}>
              <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.3)" translucent={true} />
                <CardAccounts name={this.state.name} phone={this.state.phone} status={this.state.status} id={this.state.idUser} image={this.state.image} logout={this._handleLogout} handleCamera={this._handleCamera} qrCode={this.state.qrCode}/>
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