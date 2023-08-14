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
        paddingHorizontal: hzp(16),
    },
    rowMian: {
        flexDirection: 'row',
        marginVertical: hp(10)
    },
    inputstyle: {
        paddingVertical: 0,
    },
    inputContainerStyle: {
        elevation: 0,
        borderWidth: 0,
        borderBottomWidth: 0,
        height: hp(50),
        paddingHorizontal: hp(10),
        borderRadius: hp(12),
        backgroundColor: '#faf8f7',
        width: '100%'
    },
    newlist: {
        marginBottom: hp(15),
    },
    flat: {
        flexGrow: 1,
        paddingBottom: hp(130)
    },
    newlistroW: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageMain: {
        height: hp(80),
        width: hp(80),
        borderRadius: hp(40),
        borderWidth: 0.3,
        borderColor: colors.textColor2,
        backgroundColor: colors.white,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        height: hp(72),
        width: hp(72),
        borderRadius: hp(36),
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.white,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    nitifi1: {
        fontSize: fp(18),
        color: colors.black,
        fontFamily: Font.medium,
    },
    time: {
        fontSize: fp(16),
        color: colors.textColor3,
        fontFamily: Font.medium,
    },
    col7: {
        width: '67%',
    },
    col2: {
        width: '23%',
        alignItems : 'flex-start'
    },
    col1:{
        width: '10%',
    },
    col9:{
        width: '75%',
    },
    col3 : {
        width: '25%',
    },
    row:{
        flexDirection : 'row',
        alignItems : 'center'
    },
    absulateBttom : {
        position : 'absolute',
        bottom : hp(0),
        left : hp(0),
        right : hp(0)
    },
    main:{
        height : hp(50),
        backgroundColor : colors.white,
        justifyContent :'center',
        alignItems : 'center'
    },
    Camera:{
        marginLeft : hp(10),
        fontSize: fp(18),
        color: colors.sky,
        fontFamily: Font.regular,
    }
})