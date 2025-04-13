import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MyStack from './MyStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E96E6E",
                // tabBarShowLabel: false
            }}
            initialRouteName='Cart'
        >
            <Tab.Screen
                name="Home_Stack"
                component={MyStack}
                options={{
                    tabBarIcon: ({ size, color, focused }) => { return <Entypo name={"home"} size={size} color={color} /> }
                }}
            />
            <Tab.Screen
                name="Reorder"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color, focused }) => { return <MaterialIcons name={"reorder"} size={size} color={color} /> }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ size, color, focused }) => { return <Ionicons name={"cart"} size={size} color={color} /> }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color, focused }) => { return <FontAwesome6 name={"user"} size={size} color={color} /> }
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;