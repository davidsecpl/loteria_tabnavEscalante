import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Account, CardRegistration, PayAccount} from '../../screens';

const Stack = createNativeStackNavigator();

const PayNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Account">
            <Stack.Screen name="Account" component={Account}/>
            <Stack.Screen name="CardRegistration" component={CardRegistration}/>
            <Stack.Screen name="PayAccount" component={PayAccount}/>
        </Stack.Navigator>
    );
};

export default PayNavigator;