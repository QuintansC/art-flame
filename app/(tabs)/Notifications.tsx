import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'; 

export default function App() {
  return (
    Notifications()
  );
}
function Notifications() {
  return (
    <View style={styles.main}>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-45,
    backgroundColor: 'black',
  }
});