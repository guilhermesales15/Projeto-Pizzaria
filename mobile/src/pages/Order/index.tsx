import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

type RouteDetailParams  = {
    Order:{
        number: string|number,
        order_id:string
    }
}

type  OrderRouteProp =  RouteProp<RouteDetailParams, 'Order'>;

export default function Order(){

    const route = useRoute<OrderRouteProp>();

    return(
        <View style={styles.container}>
            <Text>Tela Order</Text>
            <Text>Mesa :{route.params.number}</Text>
        </View>

    )
    

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 15,
        backgroundColor: '#1d1d2e'
    }
})