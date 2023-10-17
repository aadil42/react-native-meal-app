import {View, Text, FlatList} from 'react-native';
import { MEALS }  from '../data/dummy-data';

const MealOverviewScreen = ({ route }) => {
    const id = route.params.catId;
    // const title = route.params.catTitle;
    const mealList = MEALS.filter((meal) => {
        if(meal.categoryIds.includes(id)) return meal; 
    });

    const renderer = (itemData) => {
        return <Text>{itemData.item.title}</Text>;
    }

    return (
        <View>
            <FlatList 
            data={mealList}
            renderItem={renderer}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default MealOverviewScreen;