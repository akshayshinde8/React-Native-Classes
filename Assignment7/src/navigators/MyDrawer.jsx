import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStack from './RootStack';
import { Home, Login } from '../screens';
import MyTabs from './MyTabs';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="MainHome">
            <Drawer.Screen name="MainHome" component={RootStack} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Main" component={MyTabs} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;