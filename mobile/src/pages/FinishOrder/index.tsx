import React from 'react';
import {View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import{Feather} from '@expo/vector-icons';

import { api } from '../../services/api';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackPramsList } from '../../routes/app.routes';

type RouteDetailParams = {
    FinishOrder: {
        number: string | number ;
        order_id: string
    }
}

type FinisihOrderRouteProps= RouteProp<RouteDetailParams, 'FinishOrder'>



export default function FinisihOrder(){
    const route = useRoute<FinisihOrderRouteProps>();
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    
    async function handleFinish(){
        try{
            await api.put('/order/send',{
                order_id: route.params?.order_id
            })


            navigation.popToTop();
        }catch(err){
            console.log('erro ao finalizar, tente mais tarde')
        }
    
    }
    return(
        <View style={styles.container}>
            <Text style={styles.alert}>Deseja finalizar o pedido?</Text>
            <Text style={styles.title}>Mesa {route.params?.number}</Text>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.textButton}>Finalizar Pedido</Text>
                <Feather name="shopping-cart" size={20} color='#1d1d2e'/>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1d1d2e',
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alert:{
        fontSize:20,
        color:'#fff',
        fontWeight: 'bold',
        marginBottom: 12
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12
    },
    button:{
        flexDirection:'row',
        width:'65%',
        height:40, 
        backgroundColor: '#ff3f4b',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:6,
    },
    textButton:{
        color: '#1d1d2e',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight:10
    }
})