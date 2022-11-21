import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List</Text>
  
    </View>
  )
}

export default List

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