import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { hp } from "../../assets/fontsize";


export const styles = StyleSheet.create({
 mianicon : {
    height : hp(60),
    width : hp(60),
    borderRadius : hp(30),
    backgroundColor : colors.textColor2,
    alignItems : 'center',
    justifyContent : 'center'
 }

})
