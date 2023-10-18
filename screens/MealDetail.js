
import { Text } from 'react-native';

const MealDetail = ({ route }) => {

    return (
        <Text>
            this is meal Detail {route.params.mealId}
        </Text>
    );
}

export default MealDetail;