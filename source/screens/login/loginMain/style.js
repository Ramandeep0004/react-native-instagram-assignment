import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";
import { Font } from "../../../assets/fontfamily";
import { fp, hp, hzp, wp } from "../../../assets/fontsize";


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: hzp(12),
        marginVertical: hp(30)
    },
    MainTittle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(20),
        marginBottom: hp(30),
        marginHorizontal: hp(40)
    },
    header: {
        fontFamily: Font.instaFont,
        fontSize: fp(85),
        color: colors.black,
    },
    profilecontainer: {
        marginTop: hp(20),
        marginHorizontal: hzp(14),
    },
    name: {
        fontFamily: Font.medium,
        fontSize: fp(18),
        color: colors.black,
    },
    forgetPasword: {
        flexDirection: 'row',
        marginBottom: hp(20),
    },
    forgetPass: {
        fontFamily: Font.medium,
        fontSize: fp(18),
        color: colors.sky,
    },
    buttncontainer: {
        marginVertical: hp(5)
    },
    titleStyle: {
        color: colors.white,
        fontSize: fp(18),
        fontFamily: Font.medium,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    switchAccount: {
        flexDirection: 'row',
        marginVertical: hp(35)
    },
    switchACC: {
        marginLeft: hp(10),
        fontFamily: Font.medium,
        fontSize: fp(18),
        color: colors.sky,
    },
    accountMian: {
        marginVertical: hp(20)
    },
    account: {
        fontFamily: Font.regular,
        fontSize: fp(18),
        color: colors.textColor3,
    },
    signU: {
        fontFamily: Font.regular,
        fontSize: fp(18),
        color: colors.sky,
    },
    icnMian: {
        height: hp(25),
        width: hp(25),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.sky
    },
    OrMain: {
        marginVertical: hp(15)
    },
    Or: {
        fontFamily: Font.regular,
        fontSize: fp(17),
        color: colors.textColor3,
    },
    bottomTag: {
        bottom: 10,
        position: 'absolute',
        right: hp(110),
        left: hp(140)
    },
    bottomTagtext: {
        fontFamily: Font.light,
        fontSize: fp(15),
        color: colors.textColor2,
    },
    buttonStyle: {
        borderRadius: wp(10),
        paddingVertical: hp(16),
        paddingHorizontal: hzp(18),
        backgroundColor: '#3797EF',
    },
})