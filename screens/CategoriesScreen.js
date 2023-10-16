import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTitle from "../components/CategoryGridTitle";

const renderer = (itemData) => {
    return (
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
    );
}

const CategoriesScreen = () => {
    return (
       <View style={styles.container}>
        <FlatList data={CATEGORIES} 
                  keyExtractor={(item) => item.id} 
                  renderItem={renderer}
                  numColumns={2}
                  style={styles.subContainer}
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