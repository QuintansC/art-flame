import React from 'react';
import { View , Dimensions, StyleSheet, TextInput} from 'react-native'; 

export default function App() {
  return (
    ChatScreen()
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput value={'Testes'}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }, 
});