import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
    },
    body: {
        paddingHorizontal: hzp(16),
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(0),
        marginBottom: hp(5)
    },
    imageMian: {
        height: hp(112),
        width: hp(112),
        borderRadius: hp(56),
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor : colors.primary,
        elevation: 0,
        shadowColor: colors.textColor3,
        shadowOpacity: 0.6,
        borderWidth: 0.4,
        borderColor: colors.textColor2
    },
    imageContainer: {
        height: hp(104),
        width: hp(104),
        borderRadius: hp(52),
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    text1: {
        textAlign: 'center',
        fontSize: fp(22),
        color: colors.black,
        fontFamily: Font.bold,
    },
    text2: {
        textAlign: 'center',
        fontSize: fp(18),
        color: colors.black,
        fontFamily: Font.regular,
    },
    col4: {
        justifyContent: 'center',
        width: '28%'
    },
    col3: {
        justifyContent: 'center',
        width: '24%',
        alignItems: 'center'
    },
    userDetail: {
        paddingVertical: hp(8),
        paddingHorizontal: hp(3)
    },
    name: {
        fontSize: fp(18),
        color: colors.black,
        fontFamily: Font.medium,
    },
    work: {
        fontSize: fp(16),
        color: colors.black,
        fontFamily: Font.regular,
    },
    bio: {
        fontSize: fp(16),
        color: colors.black,
        fontFamily: Font.regular,
    },
    tag: {
        fontSize: fp(16),
        color: '#482899',
        fontFamily: Font.regular,
    },
    titleStyle: {
        color: colors.black,
        fontSize: fp(18),
        fontFamily: Font.medium,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonStyle: {
        borderRadius: wp(5),
        paddingVertical: vp(8),
        paddingHorizontal: hzp(18),
        backgroundColor: colors.white,
        // width:'100%',
    },
    containerStyle: {
        borderRadius: wp(5),
        marginHorizontal: hp(3),
        marginVertical: hp(10),
        // borderRadius: 12,
        // height: hp(60),
        elevation: 2,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 5 },
    },
    imageTagsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(5),
        marginTop: hp(8)
    },
    imageMian2: {
        marginRight: hp(15),
        height: hp(76),
        width: hp(76),
        borderRadius: hp(38),
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
        shadowColor: colors.textColor3,
        shadowOpacity: 0.6,
        borderWidth: 0.4,
        borderColor: colors.textColor2
    },
    imageContainer2: {
        height: hp(68),
        width: hp(68),
        borderRadius: hp(34),
        overflow: 'hidden'
    },
    tagsName: {
        paddingRight: hp(12),
        fontSize: fp(16),
        color: colors.black,
        fontFamily: Font.regular,
    },
    filesContainer: {
        marginTop: hp(15)
    },
    customtabConatiner: {
        height: hp(55),
        width: '100%',
        backgroundColor: colors.white
    },
    flat: {
        flexGrow: 1,
        // marginTop : hp(-20),
        paddingBottom: hp(490)
    },
    itemContainer2: {
        height: hp(150),
        width: hp(150),
        overflow: 'hidden',
        paddingRight: hp(1),
        paddingVertical: hp(1)
    },
    mainBody: {

    },
    tabRow: {
        borderTopWidth: 0.3,
        borderColor: colors.textColor4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop : hp(8),
    },
    videoIcons:{
        position : 'absolute',
        top : hp(10),
        right : hp(10)
    }
})