
import React from "react";
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ListUserScreen({ navigation }) {

    const users = [
        { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
        { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
        { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
        { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
        { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
        { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
        { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
        { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
        { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
        { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
        { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
        { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
        { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
        { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
        { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
        { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
        { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
        { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }


    ];
    const renderItem = ({ item }) => (

        <View style= {{ flex:1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailUser',{ userName: item.name})}>
                <Text style = {{fontSize: 15}}>{item.name}</Text>
            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: 'red',
                    borderBottomWidth: 1,
                    width: 340,
                    paddingVertical: 2
                }}
                />



        </View>

    );
    return(
        <View>style={ flex: 1, alignItems: 'flex-start', backgroundColor: 'white', padding: 20}
        <FlatList>
        data={users}
        renderItem={renderItem}
        keyExtrator={item => item.id}
        
        

        </FlatList>
        
        
        
        </View>
    
    
    );

}