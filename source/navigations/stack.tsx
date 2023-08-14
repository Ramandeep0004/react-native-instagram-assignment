import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginMain } from "../screens/login";
import { LoginScreen } from "../screens/login/loginMain";
import TrackingOrder from "../screens/likes";
import { Tabs } from "./bottomsTabs";
import { HeaderComponet } from "./header/Header";
import { EditProfile } from "../screens/editprofile";
import MyDrawer from "./drawerNavigator";
import { Status } from "../screens/status";
import { IGTV } from "../screens/igtv";
import Chat from "../screens/chatlisting";
import LiveStreaming from "../screens/livestreaming";
import LiveUserScreen from "../screens/liveuserScreen";
import StreamContent from "../screens/streamVideo";



export type RootStackParamList = {
  profileDetail: undefined
  bottomContainer: undefined
  TrackingOrders: undefined
  Login: undefined
  LoginScreen: undefined
  EditProfile: undefined
  drawer: undefined
  status: undefined
  IGTV: undefined
  chat: undefined
  liveStreaming: undefined
  liveUserScreen: undefined
  streamContent: undefined
}

let Stack = createNativeStackNavigator<RootStackParamList>()


export const StackScreens = (props: any) => {

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ route, navigation }) => ({
        presentation: 'modal',
        headerMode: 'screen'
      })}
    >
      <Stack.Screen
        name="Login"
        component={LoginMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              left="back"
              title={''}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bottomContainer"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="status"
        component={Status}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="IGTV"
        component={IGTV}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="liveStreaming"
        component={LiveStreaming}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="liveUserScreen"
        component={LiveUserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="streamContent"
        component={StreamContent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              left={'back'}
              right="plus"
              title={'jacob_W'}
              centreIcon={'true'}
              chatscreen={'true'}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}