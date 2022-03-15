import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const CardNegocio = (props) => {
    console.log(props)
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate("Perfil", {id: props.id})
        }}>
            <View style={{
                backgroundColor: "#364156",
                borderRadius: 10,
                margin: 10,
                justifyContent: "center",
                padding: 50
            }}>
            <Text style={style.texto}>{props.nombre}</Text>
        </View>
        </TouchableWithoutFeedback>
        
    );
};
const style = StyleSheet.create({
    cajita:{
        backgroundColor: "#364156",
        height: 160,
        width: 90,
        borderRadius: 10,
        margin: 10,
        alignItems: "center",
        padding: 80
    },
    texto:{
        color: "white",
    }
    
})
export default CardNegocio;