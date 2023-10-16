import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = ({title, color, onPress}) => {

    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <Pressable onPress={onPress} styles={styles.btn} android_ripple={{color:  "#ccc"}}>
                <View style={styles.centerText}>
                    <Text style={styles.blackColor}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTitle;

const styles = StyleSheet.create(
    {
        container: {
            width: 135,
            height: 135,
            borderRadius: 8,
            margin: 15,
            overflow: "hidden",
        },
        btn: {
            shadowColor: "#000",
            shadowOpacity: .25,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 8
        },
        centerText: {
            justifyContent: 'center',
            alignItems:'center',
            width: "100%",
            height: "100%"
        },
        blackColor: {
            color: "#000",
            fontWeight: "bold",
            fontSize: 16
        }
    }
);