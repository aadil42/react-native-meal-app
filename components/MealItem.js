import { Text, Image, View, StyleSheet, Pressable } from 'react-native';

const MealItem = ({ title, imageUrl }) => {
    console.log(imageUrl);
    return (
        <View style={styles.container}>
            <Pressable style={styles.subContainer} >
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
        overflow: "hidden"
    },
    container: {
        alignItems: 'center',
        elevation: 5,
    },
    subContainer: {
        width: "80%",
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 18, 
    },
    text: {
        padding: 10,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: .8
    }
})
export default MealItem;