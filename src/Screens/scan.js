import React, {Component} from 'react'
import {View,Text,StyleSheet,} from 'react-native'

import { RNCamera } from 'react-native-camera';

class QrScanner extends Component{
    render(){
        return(
            <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
        >
        </RNCamera>
       </View>
        )
    }
}

export default QrScanner