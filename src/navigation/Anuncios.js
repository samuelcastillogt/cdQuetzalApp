import React from 'react';

import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screens/Home';
import Anuncio from '../screens/Anuncio';
import Perfil from '../screens/Perfil';
const stack = createStackNavigator()
const Anuncios = () => {
    return (
        <stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <stack.Screen name="Home" component={Home} options={{
                headerTitle: "",
                headerMode: "screen"
            }}/>
            <stack.Screen name="Negocios" component={Anuncio} 
            options={{
                headerShown: true
            }}
            />
            <stack.Screen name="Perfil" component={Perfil} 
            options={{
                headerShown: true
            }}
            />
        </stack.Navigator>
    );
};

export default Anuncios