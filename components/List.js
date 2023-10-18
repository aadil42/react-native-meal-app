import {View, Text, StyleSheet} from "react-native";

const List = ({ title, list}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{title}</Text>
            {list.map((listItem, index) => {
                return (
                    <Text key={index} style={styles.item}>
                        {listItem}
                    </Text>
                );
            })}
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor:  "#e2b497",
        color: "#e2b497",
        marginTop: 20,
        width: "80%"
    },  
    item: {
        backgroundColor: "#e2b497",
        borderRadius: 5,
        textAlign: "center",
        marginBottom: 10,
        padding: 5,
        color: "#351401",
        width: "80%"
    }
});

export default List;