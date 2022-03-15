import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from "react-native"
import { INIT } from "../services/init"
import Cajita from '../components/Cajita';
const init = new INIT
const Home = () => {
    const [categorias, setCategorias] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(async()=>{
        const lista = await init.home()
        setCategorias(lista)
        setLoading(false)
    },[])
    return (
        <ScrollView style={style.container}>
            <Text style={{fontSize: 30, margin: 20}}>Ciudad Quetzal</Text>
            {!loading && categorias.map(categoria => (<Cajita title={categoria.data.title} to={categoria.data.to}key={categoria.id}/>))}
        </ScrollView>
    );
};
const style = StyleSheet.create({
    container:{
        backgroundColor: "#DFF8EB"
    }
})
export default Home;