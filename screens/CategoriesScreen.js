import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTitle from "../components/CategoryGridTitle";



const CategoriesScreen = ({ navigation }) => {

    const renderer = (itemData) => {

        const pressHandler = () => {
            navigation.navigate('MealOverviewScreen');
        }

        return (
            <CategoryGridTitle onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
        );
    }

    return (
       <View style={styles.container}>
        <FlatList data={CATEGORIES} 
                  keyExtractor={(item) => item.id} 
                  renderItem={renderer}
                  numColumns={2}
            />
      </View> 
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: "100%",
        alignItems: "center"
    },
});