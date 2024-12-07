import React, { useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; 
import api from '../../constants/api';

export default function Cadastro({navigation}: any) {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    
async function cadastrar(user: string, nome: string, password: string, confSenha: string){
    if (user.length === 0 || password.length === 0 || nome.length === 0 || confSenha.length === 0) {
        console.error("Preencha todos os campos");
    } else {
        try {
            const response = await api.post(`/cadastrar`, {
                nome: nome,
                email: user, 
                password: password, 
                confSenha: confSenha
            }).then(response => {
                response.data?navigation.navigate('login'):navigation.navigate('cadastro')
            });
        } catch (_err) {
            console.error(_err);
        }
    }
}

    
    return (
        <View style={styles.container}>
            <Image style={styles.stretch} source={require('./../../assets/images/logo.png')}/>
            <View  style={styles.form}>
                <TextInput style={styles.fun} onChangeText={text => setNome(text)} value={nome} placeholder="Nome"/> 
                <TextInput style={styles.fun} onChangeText={text => setEmail(text)} value={email} placeholder="Email"/> 
                <TextInput secureTextEntry={true} style={styles.fun} onChangeText={text => setSenha(text)} value={password} placeholder="Senha"/>
                <TextInput secureTextEntry={true} style={styles.fun} onChangeText={text => setConfSenha(text)} value={confSenha} placeholder="Confirmar Senha"/>
            </View>
            <View style={{}}>
                <TouchableOpacity style={styles.button} onPress={() => cadastrar(email, nome, password, confSenha)} >
                    <Text style={{color: 'black', fontSize: 16}}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('login')} >
                    <Text style={{color: 'black', fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#5F00C4',
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    fun:{
        width : '80%',
        height: '15%',
        backgroundColor: '#fff',
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
        marginBottom: 25,
        borderRadius: 5,
        paddingLeft: 20,
    }, 

    stretch: {
        marginTop: 1,
        width: '65%',
        height: '15%',
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

 