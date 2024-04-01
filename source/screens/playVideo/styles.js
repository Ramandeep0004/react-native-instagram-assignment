import { StyleSheet } from "react-native";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";


export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    maincontainer: {
        width: '100%',
        height: '100%',
    },
    backgroundVideo: {
        height: hp(820),
        width: '100%',
        overflow: 'hidden',
        borderRadius: hp(15)
    },
    topTextMian: {
        position: 'absolute',
        top: hp(40),
        left: hp(20),
        right: hp(20),
    },
    userInfo: {
        position: 'absolute',
        top: hp(110),
        left: hp(20),
        right: hp(20),
    },
    botomIcons: {
        position: 'absolute',
        left: hp(10),
        bottom: hp(10),
        right: hp(10),
    },
    iconsRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(10)
    },
    iconsRow: {
        flexDirection: 'row',
        alignItems: "flex-start"
    },
    icon1: {
        width: '12%',
    },
    icon3: {
        width: '52%',
        alignItems: 'flex-end'
    },
    titleStyle: {
        color: colors.white,
        fontSize: fp(16),
        fontFamily: Font.regular,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonStyle: {
        borderRadius: wp(1),
        paddingVertical: vp(6),
        paddingHorizontal: hzp(18),
        backgroundColor: 'transparent',
        width: hp(110),
    },
    containerStyle: {
        borderRadius: wp(5),
        marginHorizontal: hp(0),
        shadowRadius: hp(2),
        borderWidth: 0.5,
        borderColor: colors.white,
        elevation: 0,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 5 },
    },
    text1Mian: {
        marginLeft: hp(7)
    },
    text2Mian: {
        marginLeft: hp(20)
    },
    text1: {
        color: colors.textColor3,
        fontSize: fp(16),
        fontFamily: Font.regular,
    },
    header: {
        color: colors.white,
        fontSize: fp(22),
        fontFamily: Font.bold,
    },
    content1: {
        width: '85%'
    },
    content2: {
        width: '15%',
        alignItems: 'flex-end',
        marginTop: hp(3)
    },
    iconsRow2: {
        flexDirection: 'row'
    },
    iconsRow2: {
        flexDirection: 'row'
    },
    tag1: {
        width: '15%',
    },
    tag2: {
        width: '33%',
    },
    tag3: {
        width: '50%',
        alignItems: 'flex-start'
    },
    imageContainer: {
        height: hp(42),
        width: hp(42),
        borderRadius: hp(21),
        overflow: 'hidden',
        justifyContent: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    name: {
        color: colors.white,
        fontSize: fp(16),
        fontFamily: Font.medium,
    },
    dob: {
        color: colors.white,
        fontSize: fp(16),
        fontFamily: Font.light,
    },
    Follow: {
        color: colors.white,
        fontSize: fp(18),
        fontFamily: Font.medium,
    }
});