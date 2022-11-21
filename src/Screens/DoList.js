import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DoList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DoList</Text>
      <Button title='Generar lista' onPress={()=>{navigation.navigate('List')}}/>
    </View>
  )
}

export default DoList

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FAF0E6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Marcellus',
    marginBottom: 70,

    
  }
})