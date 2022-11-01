import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator >
      <Stack.Screen name="HomeScreen"  component={HomeScreen} />
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}
export default App;

