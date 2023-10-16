import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = ({title, color}) => {


    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <Pressable android_ripple={{color:  "red"}}>
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
            overflow: "hidden"
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