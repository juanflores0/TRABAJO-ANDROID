import React, { useState } from 'react';
import { Button, ScrollView, Text, TextField, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import { StyleSheet} from "react-native";


const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Usuarios" component={Usuarios} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

function Historia() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bienvenido a la historia de los dispositivos moviles</Text>
        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/BB.jpg")}
        />
        <Text>Esto se trata de una BlackBerry</Text>
        <Text></Text>
        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/iphone1.jpg")}
        />

        <Text>Este se trata del primer Iphone</Text>
        <Text></Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/iphone13.jpg")}
        />

        <Text>Este se trata del Iphone 13</Text>
        <Text></Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/iphone12.jpg")}
        />

        <Text>Este se trata del Iphone 12</Text>
        <Text></Text>

      </View>
    </ScrollView>


  );


}


const styles = StyleSheet.create({

  textos: {

    backgroundColor: 'Black',

  },

  view: {

    flex: 1,

    alignItems: 'center',

    backgroundColor: "white",

    justifyContent: 'center'



  },

  touchable: {

    alignItems: "center",

    backgroundColor: "white",

    padding: 20

  },

  header: {

    backgroundColor: 'Blue',

  },

  image: {

    height: 150, width: 150

  },

  input: {

    backgroundColor: "Blue"

  }

  


});


 

function Usuarios({navigation}) {

  const [number, onChangeNumber] = React.useState(null);

  return (

   

    <View  style={styles.view}>

      <Text>Busca los Usuarios por edad</Text>

      <TextInput

        style={styles.input}

        onChangeText={onChangeNumber}

        value={number}

        placeholder="EDAD"

        keyboardType="numeric"

      />

      <Button

      title='Buscar'

      onPress={() => navigation.navigate('Details')}

      />



    </View>

  )



}





function ListUserScreen({ navigation }) {

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

    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailUser', { userName: item.name })}>
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
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
  return (
    <View>style={{ flex: 1, alignItems: 'flex-start', backgroundColor: 'white', padding: 20 }}
      <FlatList>
        data={users}
        renderItem={renderItem}
        keyExtrator={item => item.id}



      </FlatList>

      

    </View>


  );

}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DETAILS!!</Text>
    </View>
  );
}






const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='HomeStack'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'address-book'
                : 'address-book-o';
            } else if (route.name === 'InfoStack') {
              iconName = focused ? 'bookmark' : 'bookmark-o';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Historia" component={Historia} />
        <Tab.Screen options={{ headerShown: false }} name="Usuarios" component={SettingsStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
