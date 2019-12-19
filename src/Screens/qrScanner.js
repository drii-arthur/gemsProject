
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

import Header from "../Components/header";

const {height} = Dimensions.get('window')
class ScanScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      handleTorch:false
    }
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

    onSuccess = (e) => {
        // Linking
        console.log('this data',JSON.stringify(e.data))
        //   .openURL(e.data)
          .catch(err => console.error('An error occured', err))
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
            onRead={this.onSuccess}
            showMarker={true}
            ref={(node) => { this.scanner = node }}
            customMarker={
              <>
              <BarcodeMask
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
      
    export default ScanScreen

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

    