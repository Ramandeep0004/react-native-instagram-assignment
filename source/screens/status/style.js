import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";


export const styles = StyleSheet.create({

  conatainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.black
  },
  body: {
    // flexGrow : 1,
  },
  rowMian: {
    flexDirection: 'row',
    // alignItems : 'center',
    marginVertical: hp(20),
    paddingHorizontal: hp(14),
  },
  inputstyle: {
    paddingVertical: 0,
    // placeholderTextColor: colors.white,
    fontFamily: Font.medium,
    fontSize: fp(18),
    color: colors.white
  },
  inputContainerStyle: {
    elevation: 0,
    borderWidth: 0.3,
    borderBottomWidth : 0.3,
    borderColor: colors.white,
    height: hp(52),
    paddingHorizontal: hp(5),
    borderRadius: hp(30),
    backgroundColor: 'transparent',
    width: '100%'
  },
  search: {
    width: '74%',
  },
  foucs: {
    marginTop : hp(10),
    alignItems : 'flex-end',
    width: '13%',
  },
  topIconsRow: {
    flexGrow: 1,
    paddingLeft: hp(14),
    marginTop: hp(-22)
  },
  serachTags: {
    borderWidth: 0.3,
    borderColor: colors.textColor3,
    borderRadius: hp(5),
    paddingVertical: hp(8),
    paddingHorizontal: hp(12),
    marginRight: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  flat: {
    flexGrow: 1,
  },
  mainBody: {
  },
  ImageMain: {
    backgroundColor: colors.black,
    height: hp(840),
    width: hp(500),
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%'
  },
  mesageIconMian: {
    height: hp(40),
    width: hp(40),
    borderRadius: hp(20),
    backgroundColor: '#73726f',
    alignItems: "center",
    justifyContent: 'center'
  },
  progresBar: {
   position : 'absolute',
   bottom : hp(770),
   left : hp(15),
   right : hp(60)
  }

})
