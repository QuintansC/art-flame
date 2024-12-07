import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, ScrollView, View, Dimensions } from 'react-native';

export default function HomeScreen(props: any) {  
  const local = useLocalSearchParams();

  useEffect(()=>{
    if(local.logged === "false"){
      router.push("/forms/Login")
    }
  }, [])
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.stretch} source={require('./../../assets/images/logo.png')}></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column', 
    backgroundColor: '#5F00C4',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  stretch: {
    marginTop: 50,
    width: '75%',
    height: '22%',
    resizeMode: 'stretch',
  },
});
