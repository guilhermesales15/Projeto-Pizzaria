import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';


interface itemProps{
    data:{
        id: string;
        product_id: string;
        name: string;
        amount: string | number;
    };
    deleteItem: (item_id: string) => void;

    
}



export function ListItem({data, deleteItem}: itemProps){

    function handleDeleteItem (){
        deleteItem(data.id)
    }

    return(
        <View style={styles.container}>
           <Text style={styles.item}>{data.amount} - {data.name}</Text>


           <TouchableOpacity onPress={handleDeleteItem}>
           <Feather name='trash-2' size={28} color="#ff3f4b"/>
        </TouchableOpacity>
    
        </View>
    )
        
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#101026',
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
        padding:8,
        paddingHorizontal:12,
        paddingVertical:12,
        borderRadius:4,
    },
    item:{
        color:'#ffffff',
        fontWeight: 'bold'
    }

})