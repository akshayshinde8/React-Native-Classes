import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import MyTabs from './MyTabs';

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="MainApp" component={MyTabs} />
        </Stack.Navigator>
    );
}

export default RootNavigator;
