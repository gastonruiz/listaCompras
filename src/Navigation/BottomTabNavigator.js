import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './Navigation';
import CartNav from './CartNav';
import { NavigationContainer } from '@react-navigation/native';
import ShopNav from './ShopNav';
import { StyleSheet , Text} from 'react-native';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <NavigationContainer>
    <BottomTabs.Navigator 
    
    screenOptions={{
      headerShown: false,
       tabBarShowLabel: false,
       tabBarStyle: styles.tabBar
       }}>
        <BottomTabs.Screen name = 'Home' component= {Navigation} options= {{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <Ionicons name= "home" size={20} color='orange'/>
              <Text> Home </Text>
            </View>
          ),
        }}/>
        <BottomTabs.Screen name = 'ShopTab' component= {ShopNav} options= {{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <Ionicons name= "basket" size={20} color='orange'/>
              <Text> Shop </Text>
            </View>
          ),
        }}/>
        <BottomTabs.Screen name = 'CartTab' component= {CartNav} options= {{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <Ionicons name= "cart" size={20} color='orange'/>
              <Text> Cart </Text>
            </View>
          ),
        }}/>
    </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#7f5dfe',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15, 
    height: 90,

  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})