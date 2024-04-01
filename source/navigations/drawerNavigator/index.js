import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './drawerContent';
import { Profile } from '../../screens/profile';
import { styles } from './styles';
import { HeaderComponet } from '../../components/header';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            defaultStatus="closed"
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerStyle: styles.drawerStyle,
                overlayColor: 'transparent',
            }}
        >
            <Drawer.Screen
                name="Notifications"
                options={{
                    header: ({ navigation, route, options }) => (
                        <HeaderComponet
                            left={'back'}
                            right="menu"
                            title={'jacob_W'}
                            centreIcon={'true'}
                            chatscreen={'true'}
                            navigation={navigation}
                        />
                    )
                }}
                component={Profile}
            />
        </Drawer.Navigator>
    );
}