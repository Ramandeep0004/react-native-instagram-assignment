import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { fp, hp } from "../../assets/fontsize";
import { Font } from "../../assets/fontfamily";


export const styles = StyleSheet.create({
    conatainer: {
        height: hp(100),
        width: '100%',
        backgroundColor: colors.white
    },
    row: {
        borderColor: colors.textColor4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text1: {
        fontSize: fp(22),
        color: colors.textColor3,
        fontFamily: Font.medium,
    },
    text2: {
        fontSize: fp(22),
        color: colors.black,
        fontFamily: Font.medium,
    },
    firtstIconsStyle: {
        alignItems: 'center',
        borderBottomWidth: 1.4,
        borderBottomColor: colors.textColor3,
        paddingBottom: hp(8)
    },
    secondIconsStyle: {
        alignItems: 'center',
        borderBottomWidth: 1.4,
        borderBottomColor: colors.black,
        paddingBottom: hp(8)
    }
})