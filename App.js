import { StyleSheet } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    Marcellus: require('./src/assets/Fonts/Marcellus-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return  <Navigation />;
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
