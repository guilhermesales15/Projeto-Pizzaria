import React, {useContext, useState} from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import  {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthContext } from '../../contents/AuthContext';

import { StackPramsList } from '../../routes/app.routes';
import {api} from '../../services/api'

export default function DashBoard(){

    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    const [number, setNumber] = useState('');

    async function openOrder(){
        if(number===''){
            return;
        }

       
        const response = await api.post('/order', {
            table: Number(number)
        })


         navigation.navigate('Order',{number: number, order_id: response.data.id})

         setNumber('');
    }

    const {signOut} = useContext(AuthContext);

    return(
       <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo Pedido</Text>
            <TextInput placeholder='Numero da mesa'
             placeholderTextColor='#f0f0f0'
             style={styles.input}
             keyboardType={'number-pad'}
             value={number}
             onChangeText={setNumber}
            />

            <TouchableOpacity style={styles.button} onPress={openOrder}>
                <Text style={styles.buttonText}>Abrir Mesa</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={signOut} style={styles.button2}>
                <Text style={styles.buttonText2}>Sair</Text>
            </TouchableOpacity>
       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 15,
        backgroundColor: '#1d1d2e'

    },
    title:{
        fontSize:25,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom:20

    },
    input:{
        width: '90%',
        height:60,
        backgroundColor:'#101026',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign:'center',
        fontSize:18,
        color:'#fff',
        marginBottom:16

    },
    button:{
        width:'90%',
        height:40, 
        backgroundColor: '#ff3f4b',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:6,
        marginBottom:20
    },
    buttonText:{
        color:'#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    button2:{
        width:'80%',
        height:40, 
        backgroundColor: '#ff3f4b',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:6
    },
    buttonText2:{
        color:'#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    }

})