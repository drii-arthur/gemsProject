import React, { Component } from 'react';
import { View, Text,StatusBar } from 'react-native';
import Header from '../Components/header'

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
      <Header title='Games' />
        <Text> games </Text>
      </View>
    );
  }
}

export default Games
