import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Categories = ({navigation}) => {
   const [titulo, setTitulo] = useState('');
  
   const tituloElegido = (t) => {
    setTitulo(t)
   }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Elige un tìtulo para tu lista</Text>
     </View>
     <View>
     <TextInput
     placeholder='ej. Ferreteria, Supermercado, Farmacia'
     
     />
     </View>
      <View style={styles.button}>
      <Button  title='Haz La Lista' onPress={()=>{navigation.navigate("Agrega Items")}}/>
      </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FAF0E6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
  
    fontFamily: 'Marcellus',
    marginBottom: 150,
    fontSize: 20,
  },
  button:{
    marginTop: 100
  }
})