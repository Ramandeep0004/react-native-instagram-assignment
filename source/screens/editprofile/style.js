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
    containerHaeder: {
        borderBottomWidth: 0,
        backgroundColor: colors.white,
        paddingBottom: hp(22),
        paddingTop: hp(20),
        paddingHorizontal: vp(16),
        alignItems: 'center'
    },
    header: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: hp(20),
        fontWeight: '600',
        color: '#222222'
    },
    title: {
        fontSize: fp(20),
        color: colors.black,
        fontFamily: Font.bold,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize'
    },
    cancel: {
        fontSize: fp(20),
        color: colors.black,
        fontFamily: Font.medium,
    },
    Done: {
        fontSize: fp(20),
        color: colors.sky,
        fontFamily: Font.medium,
    },
    change: {
        fontSize: fp(16),
        color: colors.sky,
        fontFamily: Font.regular,
    },
    imageMian: {
        marginTop: hp(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer2: {
        height: hp(124),
        width: hp(124),
        borderRadius: hp(62),
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    edittext: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: hp(18)
    },
    detailOne: {
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderColor: colors.textColor4,
        paddingVertical: hp(5)
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        paddingVertical: hp(10),
        fontSize: fp(18),
        color: colors.black,
        fontFamily: Font.regular,

    },
    tag: {
        fontSize: fp(16),
        color: '#482899',
        fontFamily: Font.medium,
    },
    switch: {
        paddingVertical: hp(15)
    },
    Switchtxet: {
        fontSize: fp(20),
        color: colors.sky,
        fontFamily: Font.regular,
    },
    private: {
        paddingVertical: hp(10)
    },
    privateInfo: {
        fontSize: fp(18),
        color: colors.black,
        fontFamily: Font.bold,
    }
})