import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../Screens/Categories'
import DoList from '../Screens/DoList'
import List from '../Screens/List'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

  const Navigation = () => {
    return(
        
            <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.prima},
                headerTintColor:  COLORS.second,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
            >
                <Stack.Screen name="Categories" component={Categories} options={{
                    title: 'Haz tu lista',
                }} />
                <Stack.Screen name="Agrega Items" component={DoList}
                 />
                <Stack.Screen name="List" component={List} />
            </Stack.Navigator>
        
    )
}
export default Navigation