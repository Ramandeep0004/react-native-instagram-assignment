import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, vp } from "../../assets/fontsize";


export const styles = StyleSheet.create({
  container2: {
    borderBottomWidth: 0.3,
    borderBottomColor: colors.black,
    backgroundColor: colors.white,
    paddingBottom: hp(10),
    paddingTop: hp(20),
    paddingHorizontal: vp(8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222222'
  },
  title: {
    fontSize: fp(36),
    color: colors.black,
    fontFamily: Font.instaFont,
    textTransform: 'capitalize'
  },
  iconMian2: {
    marginRight: hp(5),
    position: "relative"
  },
  iconMian: {
    backgroundColor: colors.white,
    paddingVertical: hp(5),
    paddingHorizontal: hp(15),
    borderRadius: 10,
  },
  icon: {
    height: hp(50),
    width: hp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  conatainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.transparent
  },
  rowContainer: {
    // paddingHorizontal: hp(12)
  },
  profilelistmain: {
    paddingVertical: hp(10),
    paddingHorizontal: hp(5)
  },
  flat: {
    flexGrow: 1,
    paddingHorizontal: hp(10)
  },
  imageContainer: {
    height: hp(76),
    width: hp(76),
    borderRadius: hp(38),
    backgroundColor: colors.white,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageSubContaner: {
    height: hp(70),
    width: hp(70),
    borderRadius: hp(35),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  imageMain: {
    height: hp(66),
    width: hp(66),
    borderRadius: hp(33),
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  LinetStyle: {
    height: '100%',
    width: "100%",
    alignItems: "center",
    justifyContent: 'center'
  },
  mainRow: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: hp(13)
  },
  nameMian: {
    width: hp(70),
  },
  name: {
    textAlign: 'center',
    marginTop: hp(3),
    fontSize: fp(14),
    color: colors.black,
    fontFamily: Font.regular,
    textTransform: 'capitalize'
  },
  livecontainer: {
    height: hp(20),
    width: hp(34),
    borderRadius: hp(5),
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  liveMian: {
    height: hp(18),
    width: hp(30),
    borderRadius: hp(5),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: "center",
  },
  liveStatus: {
    position: 'absolute',
    bottom: hp(18),
    right: hp(33),
    zIndex: 9999,
  },
  live: {
    fontSize: fp(10),
    color: colors.white,
    fontFamily: Font.regular,
  },
  bodyMain: {
    flex: 1,
    marginTop: hp(5)
  },
  flat2: {
    flexGrow: 1,
    paddingBottom: hp(90)
  },
  itemContainer: {
    height: hp(650),
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: hp(10)
  },
  userContainer: {
    paddingTop: hp(8),
    paddingBottom: hp(10),
    paddingHorizontal: hp(5),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImage: {
    height: hp(42),
    width: hp(42),
    borderRadius: hp(21),
    overflow: 'hidden'
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName: {
    fontSize: fp(16),
    color: colors.black,
    fontFamily: Font.medium,
  },
  userName2: {
    fontSize: fp(14),
    color: colors.black,
    fontFamily: Font.regular,
  },
  col2: {
    width: '16.66666667%',
  },
  col7: {
    width: '58.33333333%',
  },
  col3: {
    width: '25%',
    alignItems: 'flex-end',
    paddingRight: hp(3)
  },
  icnMian: {
    marginTop: hp(3),
    marginLeft: hp(10),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer2: {
  },
  bodyImageMain: {
    height: hp(445),
    width: '100%',
    overflow: 'hidden'
  },
  userBottmeIconsConatiner: {
    paddingHorizontal: hp(30),
    paddingVertical: hp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons1: {
    width: '11%',
  },
  userLikesRow: {
    marginHorizontal: hp(14),
    flexDirection: 'row',
    alignItems: 'center'
  },
  userLikesImage: {
    height: hp(26),
    width: hp(26),
    borderRadius: hp(13),
    overflow: 'hidden',
  },
  likesMian: {
    marginHorizontal: hp(10)
  },
  likesBy: {
    fontSize: fp(16),
    color: colors.black,
    fontFamily: Font.regular,
  },
  likesBy2: {
    fontSize: fp(16),
    color: colors.black,
    fontFamily: Font.medium,
  },
  about: {
    flexDirection: 'row',
    marginHorizontal: hp(12),
    alignItems: 'center',
    marginVertical: hp(3)
  },
  aboutText: {
    fontSize: fp(16),
    color: colors.black,
    fontFamily: Font.medium,
  },
  aboutText2: {
    fontSize: fp(16),
    color: colors.black,
    fontFamily: Font.regular,
  }
})
