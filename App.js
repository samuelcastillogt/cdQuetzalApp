import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigation';
export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF8EB",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
