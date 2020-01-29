import React, { Component } from 'react';
import { View, Text,StatusBar,FlatList,Dimensions,Image,StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {gamesVoucher} from '../Public/Actions/layanan'
import {connect} from 'react-redux'


import Header from '../Components/header'

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      token:''
    };
  }

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('token',(err,res) => {
      if(res){
        this.setState({token:res})
      }
    })

    this.props.dispatch(gamesVoucher(12,this.state.token))
    .then(res => {
      this.setState({data:res.action.payload.data.products})
    })
    .catch(err => {
      alert(err)
    })

  } 

  render() {
    console.log(this.state.data,'data');
    return (
      <View>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
      <Header title='Games' />
      <FlatList 
        data={this.state.data}
        keyExtractor={(item,index) => index}
        renderItem={({item,index}) => {
          return(
            item.product_id == 57 ||
            item.product_id == 62 ||
            item.product_id == 69 ||
            item.product_id == 72 ||
            item.product_id == 80 ||
            item.product_id == 264 || 
            item.product_id == 185 ||
            item.product_id == 304 ||
            item.product_id == 243 ||
            item.product_id == 203 ||
            item.product_id == 201 ||
            item.product_id == 199 ||
            item.product_id == 17 
            ? 
            <TouchableOpacity key={index}>
              <Text>{item.product_name}</Text>
            </TouchableOpacity>:
            null
          )
        }}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        layanan: state.layanan
    };
};

export default connect(mapStateToProps)(Games)
