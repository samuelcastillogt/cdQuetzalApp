import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {INIT} from "../services/init"
const init = new INIT
const Perfil = (props) => {
    const data = props.route
    const [perfil, setPerfil] = useState()
    useEffect(async()=>{
        const datos = await init.perfil(data.params.id)
        setPerfil(datos)
    
    }, [])
    if(!perfil){
        return <Text>Cargando</Text>
    }else{
        return (
            <>
            <View style={style.hero}>
            <Text style={style.title}>{perfil.perfil.nombre}</Text>
            <Text style={style.text}>{perfil.perfil.direccion}</Text>
            </View>
            </>
        
    );
    }
    
};
const style = StyleSheet.create({
    hero:{
        backgroundColor:"#364156",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title:{
        color: "white",
        fontSize: 30
    },
    text:{
        color: "white"
    }
})
export default Perfil;