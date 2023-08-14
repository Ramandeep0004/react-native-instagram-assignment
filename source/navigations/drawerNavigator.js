import * as React from 'react';
import { Button, View, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Profile } from '../screens/profile';
import { HeaderComponet } from './header/Header';
import { vp } from '../assets/fontsize';
import { DrawerContent } from './drawerContent';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {

    
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            defaultStatus="closed"
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                // drawerHideStatusBarOnOpen : true,
                drawerPosition: 'right',
                drawerStyle: {
                    width: '67%',
                    zIndex : 999,
                    borderTopRightRadius: vp(0),
                    borderBottomRightRadius: vp(0),
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 1,
                    overflow: 'hidden',
                    marginTop: StatusBar.currentHeight,
                },
                overlayColor: 'transparent',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Profile}
                options={{
                    header: ({ navigation, route, options }) => (
                        <HeaderComponet
                            right="menu"
                            title={'jacob_W'}
                            centreIcon={'true'}
                            navigation={navigation}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Notifications"
                component={Profile}
            />
        </Drawer.Navigator>
    );
}