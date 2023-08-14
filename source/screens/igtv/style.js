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
    // flexGrow : 1,
  },
  absulateHeader: {
    position: 'absolute',
    top: hp(40),
    right: hp(10),
    left: hp(10)
  },
  rowMian: {
    flexDirection: 'row',
    marginVertical: hp(20),
  },
  search: {
    width: '75%',
  },
  toptag: {
    width: '10%',
  },
  headerMian: {
    width: '70%',
  },
  toptag2: {
    width: '10%',
  },
  headr: {
    paddingLeft : hp(20),
    textAlign : 'center',
    fontFamily: Font.bold,
    fontSize: fp(20),
    color: colors.white
  },
  flat: {
    flexGrow: 1,
    paddingBottom: hp(500)
  },
  mainBody: {
  },
  ImageMain: {
    backgroundColor: colors.white,
    height: hp(475),
    width: hp(475),
    overflow: 'hidden',
  },
  itemImage: {
    height: hp(320),
    width: hp(226),
    overflow: 'hidden',
    marginRight: hp(1),
    marginVertical: hp(1)
  },
  image: {
    height: '100%',
    width: '100%'
  },
  itemDetail: {
    position: 'absolute',
    bottom: hp(10),
    right: hp(20),
    left: hp(10)
  },
  durationVideo:{
    position: 'absolute',
    top: hp(10),
    right: hp(20),
  },
  bio: {
    fontFamily: Font.regular,
    fontSize: fp(16),
    color: colors.white
  },
  username: {
    fontFamily: Font.light,
    fontSize: fp(16),
    color: colors.white
  }

})
