import { Text, View, StyleSheet, FlatList} from "react-native";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
const Favorite = ({ navigation, route }) => {

    const favContext = useContext(FavoriteContext);
    const list = MEALS.filter((meal) => {
        if(favContext.favoriteIds.includes(meal.id)) return meal;
    });


    const renderer = (itemData) => {
        const item = {...itemData.item, navigation};
        return <MealItem {...item} />
    }

    return (
        <View style={styles.container}>
            <FlatList 
            data={list}
            renderItem={renderer}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
});

export default Favorite;