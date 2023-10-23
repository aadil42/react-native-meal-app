import { useLayoutEffect } from 'react';
import { MEALS }  from '../data/dummy-data';
import MealList from '../components/MealList';


const MealOverviewScreen = ({ route, navigation }) => {

    const id = route.params.catId;
    const catList = MEALS.filter((meal) => {
        if(meal.categoryIds.includes(id)) return meal; 
    });

    const CatTitle = route.params.catTitle;


    useLayoutEffect(() => {
        navigation.setOptions({
            title: CatTitle
        });
    }, [CatTitle, navigation]);

    return (
        <MealList list={catList} navigation={navigation}/>
    );
}

export default MealOverviewScreen;