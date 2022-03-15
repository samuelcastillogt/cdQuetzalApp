import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Cajita = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate("Negocios", {id: props.to})
        }}>
            <View style={{
                backgroundColor: "#364156",
                // height: "160px",
                //  width: "90%",
                borderRadius: 10,
                margin: 10,
                justifyContent: "center",
                padding: 50
            }}>
            <Text style={style.texto}>{props.title}</Text>
        </View>
        </TouchableWithoutFeedback>
        
    );
};
const style = StyleSheet.create({
    texto:{
        color: "white",
    }
    
})
export default Cajita;