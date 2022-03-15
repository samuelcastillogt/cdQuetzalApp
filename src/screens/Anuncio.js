import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from "react-native"
import { INIT } from "../services/init"
import CardNegocio from '../components/CardNegocio';
const init = new INIT
const Anuncio = (props) => {
    const data = props.route
    const [negocios, setNegocios] = useState()
    useEffect(async()=>{
        const datos = await init.categoria(data.params.id.slice(1))
        setNegocios(datos)
    
    }, [])
    if(!negocios){
        return(
            <View style={style.container}>
                    <Text>Cargando</Text>
        </View>
        )
    }else{
        return (
        <View style={style.container}>
        {negocios && negocios.map(negocio=> <CardNegocio 
                                                key={negocio.id}
                                                nombre={negocio.data.nombre}
                                                id={negocio.id}
                                                />)}
        </View>
    );
    }
    
};
const style = StyleSheet.create({
    container:{
        backgroundColor: "#DFF8EB"
    }
})
export default Anuncio;