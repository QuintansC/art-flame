import { Redirect, router } from 'expo-router';
import React from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';  


export default function App(navigation: any) {
  return (
    PerfilScreen(navigation)
  );
}
function PerfilScreen({ navigation }: any) {

return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> Mais</Text>
    <View style={{}}>
      <TouchableOpacity style={styles.button1} onPress={() => router.push('/(tabs)/Profile')}>
        <Text style={{color: 'black', fontSize: 16}}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => router.push('/(tabs)/Clicks')}>
        <Text style={{color: 'black', fontSize: 16}}>Clicks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => router.push('/(tabs)/Notifications')}>
        <Text style={{color: 'black', fontSize: 16}}>Notificacoes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => router.push('/(tabs)')}>
        <Text style={{color: 'black', fontSize: 16}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() =>  router.push("/forms/Login")}>
        <Text style={{color: 'black', fontSize: 16}}>Sair</Text>
      </TouchableOpacity>
    </View>
  </View>
)}

const styles = StyleSheet.create({
  button1:{
    justifyContent:'center',
    top: 20,
    right: 5,
    backgroundColor: 'rgba(170, 190, 240, 1)',
    width: 260,
    height: 60,
    marginBottom: 25,
    alignItems: 'center',
    borderRadius: 80,
  },
});