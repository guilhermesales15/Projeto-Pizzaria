import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "../pages/Dashboard";
import Order from "../pages/Order";
import FinishOrder  from "../pages/FinishOrder";

export type StackPramsList = {
   Dashboard:  undefined,
   Order:  {
      number: number | string,
      order_id: string
   },
   FinishOrder: {
      number: number | string;
      order_id: string;
   }
}

const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes(){
   return(
<Stack.Navigator>
    <Stack.Screen name='Dashboard' 
    component={DashBoard}
    options={{headerShown: false}}
    />
    <Stack.Screen name='Order'
      component={Order}
      options={{headerShown: false}}
      />
      <Stack.Screen name='FinishOrder'
      component={FinishOrder}
      options={{title: 'Finalizando Pedido',
                  headerStyle:{
                     backgroundColor: '#1d1d2e',
                     
                  },
                  headerTintColor: '#FFF'
               }
            }
      />
</Stack.Navigator>

   ) 
}

export default AppRoutes;