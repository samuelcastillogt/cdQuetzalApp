import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import Anuncios from "./Anuncios";
import Perfiles from "../screens/Perfiles";
const Tab= createBottomTabNavigator()
export default function Navigator(){
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Categorias" component={Anuncios} options={{
                tabBarLabel: "Categoria",
                tabBarIcon: (color, size)=> <Icon name="list-alt" color={color} size={30}/>,
                headerShown: false
            }} 
            />
            <Tab.Screen name="Anuncios" component={Perfiles} options={{
                tabBarLabel: "Anuncios",
                tabBarIcon: (color, size)=> <Icon name="hospital" color={color} size={30}/>
            }} />
        </Tab.Navigator>
    )
    
}
