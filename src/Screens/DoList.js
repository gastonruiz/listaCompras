
import React from 'react'
import GridItem from '../components/GridItem'
import { FlatList } from 'react-native-web';
import {categories} from '../data/categories';

const DoList = ({navigation}) => {
  

  const handSelectedCategory = (item) => {
    navigation.navigate('List', {
      categoryID: item.id,
      name: item.title,
      
    })
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={ item }
    onSelected= {handSelectedCategory}
    />
  )

  return (
    <FlatList 
    data={categories}
    keyExtractor= {(item)=> item.id}
    renderItem={renderGridItem}
    numColumns= {2}
    />
  );
};

export default DoList

