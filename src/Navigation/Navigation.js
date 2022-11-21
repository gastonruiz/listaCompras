import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../Screens/Categories'
import DoList from '../Screens/DoList'
import List from '../Screens/List'

const Stack = createNativeStackNavigator();

  const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Crea tu Lista" component={Categories} />
                <Stack.Screen name="Agrega Items" component={DoList} />
                <Stack.Screen name="List" component={List} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation