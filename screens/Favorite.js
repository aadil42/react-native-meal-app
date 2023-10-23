import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const Favorite = ({ navigation }) => {

    const favContext = useContext(FavoriteContext);
    const list = MEALS.filter((meal) => {
        if(favContext.favoriteIds.includes(meal.id)) return meal;
    });

    return (
        <MealList list={list} navigation={navigation} />
    );
};

export default Favorite;