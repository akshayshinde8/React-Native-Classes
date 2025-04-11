import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ProductDetails from '../components/ProductDetails';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='ProductDetails'
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
    );
}

export default MyStack;