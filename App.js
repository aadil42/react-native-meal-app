import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetail from './screens/MealDetail';
import Favorite from './screens/Favorite';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return (
      <Drawer.Navigator
      screenOptions={
        {
          headerStyle: {backgroundColor: "black"},
          headerTintColor: "white",
          sceneContainerStyle: {backgroundColor: "#24180f"},
          drawerContentStyle: {backgroundColor: "#351401"},
          drawerActiveBackgroundColor: "#e4baa1",
          drawerActiveTintColor: "#351401",
          drawerInactiveTintColor: "#fff",
        }
      }
      >
        <Drawer.Screen 
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories"
          }}
        /> 
        <Drawer.Screen 
          name="Favorites"
          component={Favorite}
          options={{
            title: "Favorites"
          }}
        />
      </Drawer.Navigator>
  );
}

export default function App() {

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen 
          options={{
            headerShown: false
          }} 
          name="MealsCategories" 
          component={DrawerNavigation} />

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
