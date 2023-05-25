import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import GameNavigator from '../game';
import PayNavigator from '../pagos';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="GameTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: '#E8D33F',
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: { fontSize: 22 },
      }}>
      <BottomTab.Screen
        name="GameTab"
        component={GameNavigator}
        options={{
          tabBarLabel: 'Loteria',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'aperture' : 'aperture-outline'} size={size} color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="PagosTab"
        component={PayNavigator}
        options={{
          tabBarLabel: 'Saldos',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'wallet' : 'wallet-outline'} size={size} color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
