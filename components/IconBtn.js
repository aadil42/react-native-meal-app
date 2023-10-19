import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

const IconBtn = ({icon, size, color, pressHandler}) => {

    return (
        <Pressable style={({pressed}) => {
            return pressed && styles.pressed
        }} onPress={pressHandler}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: .7
    }
});

export default IconBtn;