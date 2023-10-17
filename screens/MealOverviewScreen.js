import {View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS }  from '../data/dummy-data';

import MealItem from '../components/MealItem';

const MealOverviewScreen = ({ route }) => {

    const id = route.params.catId;
    const mealList = MEALS.filter((meal) => {
        if(meal.categoryIds.includes(id)) return meal; 
    });

    const renderer = (itemData) => {
        const item = itemData.item;
        return <MealItem  {...item} />;
    }

    return (
        <View style={styles.container}>
            <FlatList 
            data={mealList}
            renderItem={renderer}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
});
export default MealOverviewScreen;