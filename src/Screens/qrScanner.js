'use strict';

import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
    Linking} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import BarcodeMask from 'react-native-barcode-mask'

class ScanScreen extends Component{
    onSuccess = (e) => {
      alert('this data',e.data)
        // Linking
        //   .openURL(e.data)
          // .catch(err => console.error('An error occured', err))
    }
    reactivate = () => {
      this._setScanning(true)
    }
    render(){
        return(
            <QRCodeScanner
            onRead={this.onSuccess}
            showMarker={true}
            customMarker={
              <BarcodeMask
              animatedLineColor='#e74c3c'
              edgeColor='#39afb5'
              />
            }
            markerStyle={{borderRadius:5,borderWidth:5,borderColor:'#39afb5'}}
            // flashMode={QRCodeScanner.Constants.FlashMode.torch}
            cameraStyle={{height:'100%'}}
            isRepeatScan={true}   
          />
        );
      }
    }
      
    const styles = StyleSheet.create({
      centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },
      textBold: {
        fontWeight: '500',
        color: '#000',
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      },
    });
     
    AppRegistry.registerComponent('default', () => ScanScreen);
    export default ScanScreen