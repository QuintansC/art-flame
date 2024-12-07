import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; 
import api from '../../constants/api';
import { Redirect } from 'expo-router';
import { useLocalSearchParams, router } from 'expo-router';

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setSenha] = useState('');     
    async function logar(logins: string, password: string){
        if (logins.length === 0 || password.length === 0) {
            console.error("Preencha senha e login corretamente");
        } else {
            try {
                router.push({ pathname: `/(tabs)`, params: { logged: "true" } }); 

                const response = await api.post('/login', {
                    login: logins, 
                    password: password
                }).then(response => {
                    response.data? router.push("/(tabs)"): <Redirect href={"/forms/Login"}/> });
            } catch (_err) {
                console.error(_err);
            }
        }
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.stretch} source={require('./../../assets/images/logo.png')}/>
            <View  style={styles.form}>
                <TextInput style={styles.fun} onChangeText={text => setLogin(text)} value={login} placeholder="Email"/>
                <TextInput secureTextEntry={true} style={styles.fun} onChangeText={text => setSenha(text)} value={password} placeholder="Senha"/>
            </View>
            <View style={{}}>
                <TouchableOpacity style={styles.button} onPress={() => logar(login, password)} >
                    <Text style={{color: 'black', fontSize: 16}}>Enviar</Text>
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <TouchableOpacity style={styles.button1} onPressOut={() => {setLogin(''), setSenha('')}} onPress={() =>  router.push("/forms/Cadastro") }>
                    <Text style={{color: 'black', fontSize: 16}}>Quero fazer parte</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#5F00C4',
        borderColor: 'transparent',
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    fun:{
        width : '80%',
        height: '20%',
        backgroundColor: '#fff',
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
        marginBottom: 25,
        borderRadius: 5,
        paddingLeft: 20,
    }, 

    stretch: {
        marginTop: 1,
        width: '75%',
        height: '20%',
        resizeMode: 'stretch',
      },

    form:{
        left: 35,
        width : '100%',
        height: '50%',
        backgroundColor: 'transparent',
    },

    button:{
        justifyContent:'center',
        top: 30,
        right: 5,
        backgroundColor: 'rgba(210, 210, 210, 1)',
        width: 260,
        height: 60,
        marginBottom: 25,
        alignItems: 'center',
        borderRadius: 80,
    },
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

 