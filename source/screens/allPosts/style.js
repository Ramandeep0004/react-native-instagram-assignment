import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";


export const styles = StyleSheet.create({

  conatainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white
  },
  body: {
  },
  rowMian: {
    flexDirection: 'row',
    paddingHorizontal: hp(14),
  },
  inputstyle: {
    paddingVertical: 0
  },
  inputContainerStyle: {
    elevation: 0,
    borderWidth: 0,
    borderBottomWidth: 0,
    height: hp(45),
    paddingHorizontal: hp(10),
    borderRadius: hp(12),
    backgroundColor: '#faf8f7',
    width: '100%'
  },
  search: {
    width: '86.33333333%',
  },
  foucs: {
    width: '14.66666667%',
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
    paddingBottom : hp(30)
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: "center"
  },
  tag: {
    paddingLeft: hp(4),
    fontSize: fp(16),
    color: colors.black,
    fontFamily: Font.medium,
  },
  iconsmIan: {
    marginHorizontal: hp(3)
  },
  mainBody: {
  },
  itemContainer2: {
    height: hp(150),
    width: hp(150),
    overflow: 'hidden',
    paddingRight: hp(1),
    paddingVertical: hp(1)
  },
  image: {
    height: '100%',
    width: '100%'
  },
  tags: {
    position: 'absolute',
    top: hp(10),
    right: hp(10)
  }

})
