
import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Dimensions
    } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from "react-native-camera"
import BarcodeMask from 'react-native-barcode-mask'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {connect} from 'react-redux'
import {AccessCode} from '../Public/Actions/Qr'
import AsyncStorage from '@react-native-community/async-storage'
import Header from "../Components/header";

const {height,width} = Dimensions.get('window')
class ScanScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      handleTorch:false,
      qrCode:'',
      token:''
    }
  }

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('token',(err,res) => {
      if(res){
        this.setState({token:res})
      }
    }) 
  }

  _flashOn = () => {
    this.setState({
      handleTorch:true
    })
    
  }

  _flashOff = () => {
    this.setState({
      handleTorch:false
    })
    
  }

    onSuccess = async (e) => {
        console.log('this data',(e.data))
        this.setState({qrCode:e.data},() => {this.handleQr()} )
        
    }

    handleQr = async () => {
        await this.props.dispatch(AccessCode(this.state.qrCode,this.state.token))
        .then(res => {
          const nomor =res.action.payload.data.data.hp
          this.props.navigation.navigate('Transfer',{nomor:nomor})
        })
        .catch(err => {
          console.log(err)
        })
    }
    reactivate = () => {
      this._setScanning(true)
    }
    render(){
      
        return(
          <View style={{flex:1}}>
          {/* <Header title='Scan'/> */}
          <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{position:'absolute',top:35,left:20,zIndex:+1}}>
          <Icon name='close-circle-outline' size={26} color='#fff'  />
          </TouchableOpacity>
          
            <QRCodeScanner
            onRead={(e) => this.onSuccess(e)}
            showMarker={true}
            ref={(node) => { this.scanner = node }}
            customMarker={
              <>
              <BarcodeMask
              width={width/2}
              height={width/2.2}
              animatedLineColor='#39afb5'
              edgeColor='#39afb5'
              />

              {/* flashlight */}
              <View style={styles.wrapperFlash}>
              {this.state.handleTorch == false ? 
                <TouchableOpacity 
                style={styles.flash}
                onPress={() => {this._flashOn()}}>
                  <Icon name='flashlight-off' size={30} color='#39afb5' />
                </TouchableOpacity>
                :
                <TouchableOpacity 
                style={styles.flash}
                onPress={() => this._flashOff()}>
                <Icon name='flashlight' size={30} color='#39afb5' />
                </TouchableOpacity>
              }
              </View>
              {/* end of flashlight */}

              </>
            }
            flashMode={this.state.handleTorch ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
            cameraStyle={{height:'100%'}}
            isRepeatScan={true}   
          />
          </View>
        );
      }
    }
      
    const mapStateToProps = state => {
    return {
        Qr: state.Qr
    };
};

export default connect(mapStateToProps)(ScanScreen)

    const styles = StyleSheet.create({
      centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },
      wrapperFlash:{
        height:40,
        position:'absolute',
        right:0,
        bottom:height/7,
        left:0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      flash:{
        height:40,
        width:50,
        alignItems:'center',
        justifyContent:'center'
      }
    });

    