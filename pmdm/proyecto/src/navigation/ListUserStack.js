

import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListUserScreen from '../containers/ListUserScreen';
import DetailUserScreen from '../containers/DetailUserScreen';

const ListUserStack = createNativeStackNavigator();

export default function ListUserStack() {
    return (
        <ListUserStack.Navigator>
            <ListUserStack.Screen name="ListUser" component={ListUserScreen} options={{

                title: 'Listado de usuarios',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "#ff4a2c"
                },
                headerTintColor: '#fff',




            }} />


            <ListUserStack.Screen name="DetailUser">  component={DetailUserScreen} options={{

            title: 'Detalles de usuario',
            headerTitleAlign: 'center',
            headerStyle: {
            backgroundColor: "#ff4a2c"
        },

            headerTintColor: '#fff',

        }} 
            </ListUserStack.Screen>
        </ListUserStack.Navigator>





    );
}