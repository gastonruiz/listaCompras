import { StyleSheet } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Marcellus: require('./src/assets/Fonts/Marcellus-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return  <BottomTabNavigator/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FAF0E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
},
button: {
  paddingTop:40
}
  
});
