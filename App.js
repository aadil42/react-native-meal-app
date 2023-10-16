import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  // const defaultScreen = <View style={styles.container}>
  // <CategoriesScreen />
  // </View>;

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="initialScreen" component={CategoriesScreen} />
          <Stack.Screen name="MealOverviewScreen" component={MealOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
});
