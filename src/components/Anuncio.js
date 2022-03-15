import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
const Anuncio = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.stretch}>
               <Image source={{uri:props.image, width: "100%", height: "100%"}} />   
            </View>
              
            <Text style={styles.text}>{props.nombre}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 50,
      backgroundColor: "#214e34",
      width: "90%",
      margin: 10,
      borderRadius: 10
    },
    stretch: {
      width: "100%",
      height: 200,
      resizeMode: 'stretch',
    },
    text:{
        color: "white"
    }
  });
  
export default Anuncio;