import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    conatainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white
    },
    body: {
        marginTop: hp(70),
    },
    mianBody: {
        // paddingHorizontal: hp(16)
    },
    image: {
        height: '100%',
        width: '100%'
    },
    text2: {
        fontSize: fp(20),
        color: colors.black,
        fontFamily: Font.regular,
    },
    followeRequests: {
        marginTop: hp(-40),
        borderBottomWidth: 0.3,
        borderColor: colors.textColor4,
        paddingBottom: hp(15),
        paddingHorizontal: hp(16)
    },
    newlist: {
        marginVertical: hp(6),
        paddingHorizontal: hp(16)
    },
    flat: {
        flexGrow: 1,
        paddingBottom : hp(90)
    },
    sectionList: {
        flexGrow: 1,
        marginTop: hp(-10),
        // paddingHorizontal: hp(16)
    },
    header: {
        borderTopColor: colors.textColor4,
        borderTopWidth: 0.3,
        fontSize: fp(20),
        marginTop: hp(18),
        paddingTop: hp(10),
        marginBottom: hp(5),
        color: colors.black,
        fontFamily: Font.medium,
        paddingHorizontal: hp(16)
    },
    header2: {
        fontSize: fp(20),
        marginTop: hp(25),
        marginBottom: hp(5),
        color: colors.black,
        fontFamily: Font.medium,
        paddingHorizontal: hp(16)
    },
    New: {
        paddingBottom: hp(15),
        fontSize: fp(20),
        color: colors.black,
        fontFamily: Font.medium,
    },
    newlistroW: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    imageMain: {
        height: hp(56),
        width: hp(56),
        borderRadius: hp(28),
       
        backgroundColor: colors.white,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        height: hp(50),
        width: hp(50),
        borderRadius: hp(25),
        overflow: 'hidden',
        borderWidth : 1,
        borderColor : colors.white,
    },
    imageContainer2: {
        height: hp(50),
        width: hp(50),
        overflow: 'hidden'
    },
    notifi: {
        fontSize: fp(16),
        color: colors.black,
        fontFamily: Font.regular,
    },
    nitifi1: {
        fontSize: fp(16),
        color: colors.black,
        fontFamily: Font.medium,
    },
    time: {
        fontSize: fp(16),
        color: colors.textColor4,
        fontFamily: Font.medium,
    },
    col2: {
        width: '16.66666667%',
    },
    col7: {
        width: '58.33333333%',
    },
    col3: {
        width: '25%',
    },
    absulateImage: {
        position: 'absolute',
        bottom: hp(-8),
        left: hp(32),
    },
    message: {

    },
    buttonStyle: {
        borderRadius: wp(3),
        paddingVertical: vp(6),
        paddingHorizontal: hp(2),
        backgroundColor: colors.white,
        width: hp(90),
    },
    buttonStyle2: {
        borderRadius: wp(3),
        paddingVertical: vp(6),
        paddingHorizontal: hp(2),
        backgroundColor: colors.sky,
        width: hp(90),
    },
    titleStyle: {
        color: colors.black,
        fontSize: fp(14),
        fontFamily: Font.medium,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    titleStyle2: {
        color: colors.white,
        fontSize: fp(14),
        fontFamily: Font.medium,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    containerStyle: {
        borderRadius: wp(3),
        marginHorizontal: hp(0),
        shadowRadius: 5,
        borderWidth: 0.1,
        borderColor: colors.textColor3,
        // height: hp(60),
        elevation: 2,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 5 },
    },
    tag: {
        color: colors.sky,
        fontSize: fp(14),
        fontFamily: Font.regular,
    },
    row: {
        marginTop: hp(6),
        flexDirection: 'row',
        alignItems: "center",
    },
    rply: {
        paddingLeft: hp(10),
        color: colors.textColor3,
        fontSize: fp(14),
        fontFamily: Font.medium,
    },
    imageContainer3: {
        height: hp(42),
        width: hp(42),
        borderRadius: hp(21),
        overflow: 'hidden'
    },
    imageMain3: {
        height: hp(46),
        width: hp(46),
        borderRadius: hp(23),
        backgroundColor: colors.white,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list2: {
        marginTop: hp(-40)
    },
    row1:{
        marginTop: hp(10),
        flexDirection: 'row',
        alignItems: "center",
        flexWrap : 'wrap',
    },
    LinetStyle: {
        height: '100%',
        width: "100%",
        alignItems: "center",
        justifyContent: 'center'
      },
})