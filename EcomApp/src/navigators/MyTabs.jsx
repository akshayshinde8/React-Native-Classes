import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../screens/Cart';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MyStack from './MyStack';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Text, View } from 'react-native';
import ReorderScreen from '../screens/ReorderScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E96E6E",
                tabBarShowLabel: false
            }}
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
                component={ReorderScreen}
                options={{
                    tabBarIcon: ({ size, color, focused }) => { return <MaterialIcons name={"reorder"} size={size} color={color} /> }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: (
                        { size, color, focused }) => {
                        const { carts } = useContext(CartContext)
                        return (
                            <View style={{ position: "relative" }}>
                                <Ionicons name={"cart"} size={size} color={color} />
                                <View style={{
                                    height: 16,
                                    width: 16,
                                    borderRadius: 8,
                                    backgroundColor: color,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    top: -11,
                                    right: -5
                                }}>
                                    <Text style={{
                                        fontSize: 10,
                                        color: "white",
                                        fontWeight: "500"
                                    }}>
                                        {carts?.length}
                                    </Text>
                                </View>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ size, color, focused }) => { return <FontAwesome6 name={"user"} size={size} color={color} /> }
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;