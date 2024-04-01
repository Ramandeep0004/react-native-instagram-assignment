const { StyleSheet } = require("react-native");
const { hp } = require("../../assets/fontsize");
const { colors } = require("../../assets/colors");



export default styles = StyleSheet.create({
    iconMian2: {
        height: hp(50),
        width: hp(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(10)
    },
    imageContainer: {
        height: hp(34),
        width: hp(34),
        borderRadius: hp(17),
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageMain: {
        height: hp(38),
        width: hp(38),
        borderRadius: hp(19),
        borderWidth: hp(1),
        borderColor: colors.darkPurple,
        backgroundColor: colors.white,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
