import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Details, Home, Products } from '../screens';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Products" component={Products} />
        </Tab.Navigator>
    );
}
export default MyTabs;