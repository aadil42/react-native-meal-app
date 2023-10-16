import { FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTitle from "../components/CategoryGridTitle";

const renderer = (itemData) => {
    return (
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
    );
}

const CategoriesScreen = () => {
    return (
        <FlatList data={CATEGORIES} 
                  keyExtractor={(item) => item.id} 
                  renderItem={renderer}
            />
    )
}

export default CategoriesScreen;