import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Modal} from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import { ModalPicker } from '../../components/ModalPicker';

import { api } from '../../services/api';

type RouteDetailParams  = {
    Order:{
        number: string|number,
        order_id:string
    }
}

export type CategoryProps = {
    id: string,
    name: string
}

type  OrderRouteProp =  RouteProp<RouteDetailParams, 'Order'>;




export default function Order(){

    const route = useRoute<OrderRouteProp>();
    const navigation = useNavigation();

    const [category, setCategory] = useState<CategoryProps[] |[]>([]);
    const [categorySelected, setCategorySelected] = useState<CategoryProps>()
    const [modalCategory, setModalCategory] = useState(false);

    const [amount, setAmount] = useState('1')

    useEffect(()=>{
        async function loadInfo() {
            const response = await api.get('/category')
            
            setCategory(response.data)
            setCategorySelected(response.data[0])
        }
        loadInfo(); 
    }, [])
    
    async function handleCloseOrder(){
        try{
            await api.delete('/order',{
                params:{
                    order_id: route.params?.order_id
                }
            })
            navigation.goBack();

        }catch(err){
            console.log(err)
        }
   
    }

    function handleChangeCategory(item: CategoryProps){
        setCategorySelected(item);
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mesa {route.params.number}</Text>
                <TouchableOpacity onPress={handleCloseOrder}>
                    <Feather name='trash-2' size={28} color="#ff3f4b"/>
                </TouchableOpacity>
            </View>

          {category.length !== 0&&(
              <TouchableOpacity style={styles.input} onPress={()=>setModalCategory(true)}>
                <Text style={{color:'#fff' }}>
                  {categorySelected?.name}
                </Text>
              </TouchableOpacity>
          )}

            <TouchableOpacity style={styles.input}>
                <Text  style={{color:'#fff' }}>Pizza de calabresa</Text>
            </TouchableOpacity>

            <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade</Text>
                <TextInput 
                style={[styles.input,{width:'60%', textAlign:'center'}]} 
                value={amount}
                onChangeText={setAmount}
                placeholderTextColor='#F0F0F0F0'
                keyboardType='numeric'
                />
            </View>

            <View style={styles.action}>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.buttonText,{color:'#fff'}]}>Avançar</Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                visible={modalCategory}
                animationType='fade'
            >
                <ModalPicker
                handleCloseModal={()=> setModalCategory(false)
                }
                options={category}
                selectedItem={handleChangeCategory}
                />
            </Modal>
        
        </View>

    )
    

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingVertical: '5%',
        backgroundColor: '#1d1d2e',
        paddingEnd: '4%',
        paddingStart: '5%'
    },
    header:{
        flexDirection: 'row',
        marginBottom:12,
        alignItems: 'center',

    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 14
    },
    input:{
        backgroundColor: '#101026',
        borderRadius:4,
        width: '100%',
        height:40,
        marginBottom:12,
        justifyContent: 'center',
        paddingHorizontal: 8,
        color: '#fff',
        fontSize: 20
    },
    qtdContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    qtdText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    action:{
        flexDirection: 'row',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonAdd:{
        backgroundColor:'#3fd1ff',
        borderRadius: 4,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        width:'20%'
    },
    buttonText:{
        color:'#101026',
        fontSize:18,
        fontWeight:'bold'
    },
    button:{
        width:'75%',
        height:40, 
        backgroundColor: '#ff3f4b',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:6,
        
    }


})