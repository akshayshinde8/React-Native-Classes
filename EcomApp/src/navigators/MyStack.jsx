import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
    );
}

export default MyStack;