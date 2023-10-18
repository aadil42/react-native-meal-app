import { Text, Image, View, StyleSheet, Pressable } from 'react-native';

const MealItem = ({ title, imageUrl, id, navigation }) => {

    const pressHandler = () => {
        navigation.navigate("MealDetail", {
            mealId: id
        });
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={pressHandler} style={styles.subContainer} >
                    <Image source={{uri: imageUrl}} style={styles.image} />
                    <Text style={styles.text}>{title} from meal item</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    container: {
        alignItems: 'center',
        elevation: 5,
    },
    subContainer: {
        width: "80%",
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 18,
        backgroundColor: "white",
        overflow: "hidden" 
    },
    text: {
        padding: 10,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: .8,
    }
})
export default MealItem;