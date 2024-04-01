import { StyleSheet } from "react-native";
import { fp, hp, hzp, wp } from "../../assets/fontsize";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";

export default styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        backgroundColor: colors.white,
        paddingBottom: hp(12),
        paddingTop: hp(10),
        paddingHorizontal: hzp(12),
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
        fontSize: 20,
        fontWeight: '600',
        color: '#222222'
    },
    title: {
        fontSize: fp(21),
        color: colors.black,
        fontFamily: Font.medium,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize'
    },
    iconMian: {
        backgroundColor: colors.white,
        paddingVertical: hp(5),
        paddingHorizontal: hp(10),
        borderRadius: 10,
    },
    icon: {
        height: hp(50),
        width: hp(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    mainimage: {
        height: hp(54),
        width: hp(54),
        borderRadius: hp(27),
        overflow: 'hidden',
    },
    centerComponentConatiner: {
        marginHorizontal: hp(10)
    },
    centreIcon: {
        marginTop: hp(2)
    },
    userNameManin: {
        paddingHorizontal: hp(10)
    },
    centerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        fontSize: fp(21),
        color: colors.black,
        fontFamily: Font.medium,
    },
    notiFiDot: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    dot: {
        height: wp(5),
        width: wp(5),
        backgroundColor: colors.lightRed,
        borderRadius: wp(3)
    }
});