import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { StyleSheet, View, Text } from 'react-native';

const Favorite = ({ navigation }) => {


    const favContext = useContext(FavoriteContext);
    const list = MEALS.filter((meal) => {
        if(favContext.favoriteIds.includes(meal.id)) return meal;
    });

    const noFav = <View style={styles.container}>
    <Text style={styles.text}>No Favorits yet.</Text>
    </View>

    return (
        (list.length && <MealList list={list} navigation={navigation} />) || noFav
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "white"
    }
})

export default Favorite;