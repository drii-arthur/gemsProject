'use strict';

import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
    Linking} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component{
    onSuccess = (e) => {
        Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err))
    }
    render(){
        return(
            <QRCodeScanner
            onRead={this.onSuccess}
            showMarker={true}
            markerStyle={{borderRadius:5,borderWidth:5,borderColor:'#39afb5'}}
            // flashMode={QRCodeScanner.Constants.FlashMode.torch}
            containerStyle={{backgroundColor:'tomato'}}
            cameraStyle={{height:'100%'}}      
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
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