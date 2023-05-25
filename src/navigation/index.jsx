import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginNavigator from './login';
import TabsNavigator from './tabs';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log_in" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Log_in" component={LoginNavigator} />
        <Stack.Screen name="Session" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
