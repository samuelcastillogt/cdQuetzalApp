import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from "react-native"
import { INIT } from "../services/init"
import Anuncio from '../components/Anuncio';
const init = new INIT
const Perfiles = () => {
    const [categorias, setCategorias] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(async()=>{
        const lista = await init.AllProducts()
        setCategorias(lista)
        setLoading(false)
        console.log(lista)
    },[])
    return (
        <ScrollView style={style.container}>
             {!loading && categorias.map(categoria => (<Anuncio nombre={categoria.data.nombre} 
                                                                to={categoria.data.autor}
                                                                key={categoria.id}
                                                                image={categoria.data.imagen}
                                                                />))} 
        </ScrollView>
    );
};
const style = StyleSheet.create({
    container:{
        backgroundColor: "#DFF8EB"
    }
})
export default Perfiles;