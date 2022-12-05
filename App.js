import React from 'react';
import { Text, View } from 'react-native';
import Home from './screens/Home';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Home />
    </View>
  )
}
export default HelloWorldApp;