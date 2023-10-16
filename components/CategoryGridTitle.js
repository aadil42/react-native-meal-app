import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = ({title, color}) => {

    return (
        <View>
            <Pressable>
                <View>
                    <Text>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTitle;