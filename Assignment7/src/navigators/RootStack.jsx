import { Details } from "../screens";
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from "./MyTabs";

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MyTabs} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}
export default RootStack;