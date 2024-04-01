import { colors } from "../../../assets/colors";
import { fp, hp, wp } from "../../../assets/fontsize";
import { Font } from "../../../assets/fontfamily";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white
  },
  body: {
    paddingHorizontal: hp(16)
  },
  username: {
    marginVertical: hp(10)
  },
  name: {
    fontSize: fp(20),
    color: colors.black,
    fontFamily: Font.regular,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(12)
  },
  col4: {
    width: '20%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  iconMian: {
    borderWidth: wp(2),
    borderColor: colors.textColor,
    backgroundColor: colors.white,
    paddingVertical: hp(5),
    marginLeft: hp(4),
    paddingHorizontal: hp(10),
    borderRadius: hp(3),
  },

});