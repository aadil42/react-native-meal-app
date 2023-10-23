import {View, FlatList, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = ({ list, navigation }) => {

    const renderer = (itemData) => {
        const item = {...itemData.item, navigation};

        return <MealItem  {...item} />;
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
}

styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
});

export default MealList;