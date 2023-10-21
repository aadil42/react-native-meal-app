import { useLayoutEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import IconBtn from '../components/IconBtn';

import { FavoriteContext } from "../store/context/favorite-context";

import List from "../components/List";
const MealDetail = ({ route, navigation }) => {

    const favContext = useContext(FavoriteContext);

    const title = route.params.title;
    const id = route.params.id;
    const ingredients = route.params.ingredients;
    const steps = route.params.steps;
    const complexity = route.params.complexity;
    const affordability = route.params.affordability;
    const image = route.params.imageUrl;
    const duration = route.params.duration;

    const isFavorite = favContext.favoriteIds.includes(id);

    const iconPressHandler = () => {
        if(!isFavorite) return favContext.add(id);
        return favContext.remove(id);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconBtn pressHandler={iconPressHandler} icon={isFavorite ? "star" : "star-outline"} size={24} color="white" />
            }
        })
    }, [navigation, isFavorite]);
    
    return (
        <ScrollView style={styles.container}>
              <Image style={styles.image} source={{uri: image}} />   
              <Text style={styles.text}>{title}</Text>   
              <View style={styles.shortInfo}>
                  <Text style={styles.shortInfoText}>
                    {duration} min
                    {'   '}
                    {complexity}
                    {'   '}
                    {affordability}
                    </Text>
              </View> 
              <List title="Ingredients" list={ingredients} />
              <List title="Steps" list={steps} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 250
    },
    text: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
        color: "#ffffff"
    },
    shortInfo: {
        alignItems: "center",
        marginTop: 15
    },
    shortInfoText: {
        color: "#ffffff",
        fontSize: 14,
        width: "80%",
        textAlign: "center",
        textTransform: "uppercase",
    }
});

export default MealDetail;