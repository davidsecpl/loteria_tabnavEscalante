import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Game, FrequentQuestions, PayTable} from '../../screens';

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Game">
            <Stack.Screen name="Game" component={Game}/>
            <Stack.Screen name="FrequentQuestions" component={FrequentQuestions}/>
            <Stack.Screen name="PayTable" component={PayTable}/>
        </Stack.Navigator>
    );
};

export default GameNavigator;