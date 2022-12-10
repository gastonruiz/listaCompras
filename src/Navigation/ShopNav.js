import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/colors'
import ShopScreen from '../Screens/ShopScreen';


const Stack = createNativeStackNavigator();

  const CartNav = () => {
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
             <Stack.Screen  
             name= "Cart"
             component={ShopScreen}
             options={{ title: "Shop" }}
             />
             
            </Stack.Navigator>
        
    )
}
export default CartNav