import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
export default function App() {
  FontAwesome.loadFont();
  return (
    ClicksScreen()
  );
}

function ClicksScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column', 
  },

  div:{
    display: 'flex',
    backgroundColor: 'white',
    width: '80%',
    height: 210,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  stretch: {
    width: '55%',
    height: '42%',
    resizeMode: 'stretch',
  },
});