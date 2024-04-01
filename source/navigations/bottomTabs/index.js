import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon, Image } from '@rneui/themed'
import { View } from "react-native"
import { Icons, IconsType } from "../../assets/icons";
import { Dimension } from "../../assets/dimension";
import styles from "./styles";
import { HeaderComponet } from "../../components/header";
import LikesScreen from "../../screens/likes";
import { AllPosts } from "../../screens/allPosts";
import { Search } from "../../screens/search";
import { Home } from "../../screens/Home";
import { colors } from "../../assets/colors";
import MyDrawer from "../drawerNavigator";



let Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarStyle: {
                        backgroundColor: colors.white,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        borderBottomStartRadius: 0,
                        borderBottomRightRadius: 0,
                        height: 50,
                        paddingHorizontal: 2,
                        borderTopWidth: 0.3,
                        marginBottom: 0,
                        marginHorizontal: 0,
                        borderRadius: 15,
                        paddingTop: 20,
                        shadowColor: 'black',
                        shadowOpacity: 0.9,
                        elevation: 5,
                    },
                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.textColor2,
                    tabBarLabel: ''
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            style={styles.iconMian2}
                            type={focused ? IconsType.foundation : IconsType.octIcon}
                            name={focused ? Icons.home3 : Icons.home2}
                            color={color}
                            size={focused ? Dimension.Large1 : Dimension.Large}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            style={styles.iconMian2}
                            type={focused ? IconsType.fontisto : IconsType.evilicon}
                            name={focused ? Icons.search3 : Icons.search2}
                            color={color}
                            size={focused ? Dimension.large : Dimension.Large2}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="allPost"
                component={AllPosts}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            style={styles.iconMian2}
                            type={IconsType.simpleLineIcon}
                            name={Icons.socialInstagram}
                            color={color}
                            size={Dimension.Large}
                        />
                    ),
                    header: ({ navigation, route, options }) => (
                        <HeaderComponet
                            left="back"
                            title={'All Posts'}
                            navigation={navigation}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="likes"
                component={LikesScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            style={styles.iconMian2}
                            type={focused ? IconsType.antDesign : IconsType.evilicon}
                            name={focused ? Icons.heart : Icons.heart}
                            color={focused ? colors.black : colors.textColor2}
                            size={focused ? Dimension.Large : Dimension.Large2}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={MyDrawer}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={focused ? styles.imageMain : null}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
};
