import { Text, View, StyleSheet} from "react-native";

const Favorite = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is Favorite screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Favorite;