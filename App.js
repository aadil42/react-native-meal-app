import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {

  // const defaultScreen = <View style={styles.container}>
  // <CategoriesScreen />
  // </View>;

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={
          {
            headerStyle: {backgroundColor: "black"},
            headerTintColor: "white",
            contentStyle: {backgroundColor: "#24180f"}
          }
        }
        >
          <Stack.Screen 
          options={{
            title: "All Categories"
          }} 
          name="MealsCategories" 
          component={CategoriesScreen} />

          <Stack.Screen 
          options={{
            title: "Meal Overview"
          }}
          name="MealOverview" 
          component={MealOverviewScreen} />

          <Stack.Screen 
          options={{
            title: "Meal Detail",
            headerStyle: {backgroundColor: "black"},
            headerTintColor: "white",
          }}
          name="MealDetail" 
          component={MealDetail} />

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
