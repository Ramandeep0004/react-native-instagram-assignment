import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, wp } from "../../assets/fontsize";


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: hzp(16),
        marginVertical: hp(30)
    },
    MainTittle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(210),
        marginBottom: hp(30),
        marginHorizontal: hp(40)
    },
    header: {
        fontFamily:Font.instaFont,
        fontSize: fp(80),
        color: colors.black,
    },
    profilecontainer: {
        marginTop: hp(20),
    },
    profileMian: {
        alignItems: 'center',
        height: hp(170),
        width: hp(150),
        // backgroundColor  : colors.secondPrimary
    },
    imageContainer: {
        marginVertical: hp(15),
        height: hp(100),
        width: hp(100),
        overflow: 'hidden',
        borderRadius: hp(50)
    },
    image: {
        height: '100%',
        width: '100%'
    },
    name: {
        fontFamily: Font.medium,
        fontSize: fp(18),
        color: colors.black,
    },
    buttncontainer: {
        marginVertical: hp(10)
    },
    titleStyle: {
        color: colors.white,
        fontSize: fp(18),
        fontFamily: Font.medium,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    switchAccount :{
        marginVertical : hp(30)
    },
    switchACC:{
        fontFamily: Font.bold,
        fontSize: fp(18),
        color: colors.sky,
    },
    accountMian:{
        position : 'absolute',
        bottom : 15,
        right : 60,
        left : hp(95)
    },
    account:{
        fontFamily: Font.regular,
        fontSize: fp(17),
        color: colors.textColor3,
    },
    signU:{
        fontFamily: Font.medium,
        fontSize: fp(17),
        color: colors.black,
    }, 
     buttonStyle: {
        borderRadius: wp(5),
        paddingVertical: hp(16),
        paddingHorizontal: hzp(18),
        backgroundColor: '#3797EF',
        // width:'100%',
    },
})