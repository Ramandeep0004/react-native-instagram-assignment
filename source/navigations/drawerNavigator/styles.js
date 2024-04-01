import { StatusBar, StyleSheet } from "react-native";
import { vp } from "../../assets/fontsize";



export const styles = StyleSheet.create({
    drawerStyle: {
        width: '70%',
        zIndex: 999,
        borderTopRightRadius: vp(0),
        borderBottomRightRadius: vp(0),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.41,
        // elevation: 1,
        overflow: 'hidden',
        paddingTop: StatusBar.currentHeight,
    }
});