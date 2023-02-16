import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../../contents/AuthContext';

export default function SignIn(){

    const {signIn} = useContext(AuthContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin(){
        if(email==='' || password===''){
            alert('Email/senha vazios !!!!')
            return;
            
        }

        await signIn({email,password});
    }

    return(
        <View style={styles.container}>
            { <Image style={styles.logo} source={require('../../assets/logo.png')}/>}

            <Text style={styles.title}>PizzariaJs - Faça seu login!</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Digite seu email'
                    style={styles.input}
                    placeholderTextColor='#f0f0f0'
                    value={email}
                    onChangeText={setEmail}
                />
                 <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                    placeholderTextColor='#f0f0f0'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>acessar</Text>
                </TouchableOpacity>
            </View>
            
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1d1d2e',
    },
    logo:{
        marginBottom:18,
        width: 170,
        height: 170,
    },
    title:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:"bold"
    },
    inputContainer:{
       width:'95%',
       alignItems:'center',
       justifyContent: 'center',
       paddingVertical: 32,
       paddingHorizontal:14

    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#101026',
        marginBottom:12,
        borderRadius:4,
        paddingHorizontal:12,
        color:"#ffffff"
    },
    button:{
        width:'95%',
        height:40, 
        backgroundColor: '#ff3f4b',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:6
    },
    buttonText:{
        color:'#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    }
})