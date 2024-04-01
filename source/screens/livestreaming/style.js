import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";
import { Font } from "../../assets/fontfamily";


export const styles = StyleSheet.create({
   constainer: {
      flex: 1,
      flexDirection: "column",
      padding: 24,
      backgroundColor: "orange",
      justifyContent: "center",
   },
   textStyle: {
      color: "#fff",
      fontSize: fp(25),
      marginBottom: hp(20),
   },
   textStyle1: {
      color: colors.black,
      fontSize: fp(20),
      fontFamily: Font.medium
   },
   textInput: {
      borderWidth: 1,
      borderColor: "blue",
      marginTop: 20,
      marginBottom: 100,
   },
   buttonStyle: {
      borderRadius: wp(5),
      paddingVertical: vp(18),
      paddingHorizontal: hzp(18),
      backgroundColor: '#3797EF',
   },
   buttoncontainerStyle: {
      width: hp(150),
      borderRadius: wp(10),
      marginHorizontal: hp(15),
      shadowRadius: 5,
      elevation: 5,
      shadowOpacity: 0.5,
      shadowColor: '#000',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 5 },
   },
   mianicon: {
      height: hp(60),
      width: hp(60),
      borderRadius: hp(30),
      backgroundColor: colors.textColor2,
      alignItems: 'center',
      justifyContent: 'center'
   },
   buttonMain: {
      flexDirection: "row",
      justifyContent: "space-between",
   },
   buttonStyle2: {
      borderRadius: wp(5),
      paddingVertical: vp(18),
      paddingHorizontal: hzp(18),
      backgroundColor: '#3797EF',
   },
   buttonContainerStyle: {
      width: hp(150),
      borderRadius: wp(10),
      marginHorizontal: hp(15),
      shadowRadius: 5,
      elevation: 5,
      shadowOpacity: 0.5,
      shadowColor: '#000',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 5 },
   }
})
