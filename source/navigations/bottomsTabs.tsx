import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icons, IconsType } from "../assets/icons"
import { Icon, Image } from '@rneui/themed'
import { fp, hp } from "../assets/fontsize"
import { colors } from "../assets/colors"
import { View, StyleSheet } from "react-native"
import { Font } from "../assets/fontfamily"
import TrackingOrder from "../screens/likes"
import { Home } from "../screens/Home"
import { Dimension } from "../assets/dimension"
import { Search } from "../screens/search"
import LikesScreen from "../screens/likes"
import { Profile } from "../screens/profile"
import { HeaderComponet } from "./header/Header"
import MyDrawer from "./drawerNavigator"
import { AllPosts } from "../screens/allPosts"



export type TabParamList = {
    Home: undefined
    Search: undefined
    Favourite: undefined
    likes: undefined
    Profile: undefined
    allPost: undefined
}


let Tab = createBottomTabNavigator<TabParamList>()
export const Tabs = (props: any) => {

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
                    tabBarLabelStyle: {
                        fontFamily: Font.regular,
                        fontSize: fp(14),
                        marginBottom: hp(15),
                    },
                    tabBarLabel: ''
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.iconMian2}>
                            <Icon
                                type={focused ? IconsType.foundation : IconsType.octIcon}
                                name={focused ? Icons.home3 : Icons.home2}
                                color={color}
                                size={focused ? Dimension.Large1 : Dimension.Large}
                            />
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.iconMian2}>
                            <Icon
                                type={focused ? IconsType.fontisto : IconsType.evilicon}
                                name={focused ? Icons.search3 : Icons.search2}
                                color={color}
                                size={focused ? Dimension.large : Dimension.Large2}
                            />
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="allPost"
                component={AllPosts}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.iconMian2}>
                            <Icon
                                type={IconsType.simpleLineIcon}
                                name={Icons.socialInstagram}
                                color={color}
                                size={Dimension.Large}
                            />
                        </View>
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
                        <>
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={focused ? IconsType.antDesign : IconsType.evilicon}
                                    name={focused ? Icons.heart : Icons.heart}
                                    color={focused ? colors.black : colors.textColor2}
                                    size={focused ? Dimension.Large : Dimension.Large2}
                                />
                            </View>
                        </>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={MyDrawer}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={focused ? styles.imageMain : styles.imageMain2}>
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
}
const styles = StyleSheet.create({
    iconMian2: {
        height: hp(50),
        width: hp(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(10)
    },
    imageContainer: {
        height: hp(34),
        width: hp(34),
        borderRadius: hp(17),
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageMain: {
        height: hp(38),
        width: hp(38),
        borderRadius: hp(19),
        borderWidth: hp(1),
        borderColor: colors.darkPurple,
        backgroundColor: colors.white,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageMain2: {

    }
});