import { StyleSheet } from 'react-native';
import { createTheme } from '@rneui/themed';
import { colors } from './colors';
import { fp, hp, hzp, vp, wp } from './fontsize';
import { Font } from './fontfamily';


export const Theme = createTheme({
    components: {

        Button: {
            type: 'solid',
            titleStyle: {
                color: colors.white,
                fontSize: fp(18),
                fontFamily: Font.regular,
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
            },
            buttonStyle: {
                borderRadius: wp(5),
                paddingVertical: vp(18),
                paddingHorizontal: hzp(18),
                backgroundColor: '#3797EF',
                // width:'100%',
            },
            containerStyle: {
                borderRadius: wp(10),
                marginHorizontal:hp(15),
                shadowRadius: 5,
                // borderRadius: 12,
                // height: hp(60),
                elevation: 5,
                shadowOpacity: 0.5,
                shadowColor: '#000',
                justifyContent: 'center',
                shadowOffset: { width: 0, height: 5 },
            },
        },
        Text: {
            h1Style: {
                fontFamily: Font.bold,
                fontSize: hp('3.5%'),
            },
            h2Style: {
                fontFamily: Font.bold,
                fontSize: hp('3%'),
            },
            h3Style: {
                fontFamily: Font.bold,
                fontSize: hp('2.5%'),
            },
            h4Style: {
                fontFamily: Font.bold,
                fontSize: hp('2%'),
            },

            // color: colors.black,
            // fontSize: hp('1.9%'),
            // fontFamily: Font.regular,
        },
        Input: {
            // paddingTop: 0,
            // paddingBottom: 0,
            // paddingLeft: wp(6),
            // paddingRight: 0,
            paddingVertical: 0,
            // paddingHorizontal: 0,
            // marginVertical: 0,
            // marginHorizontal: 8,
            labelStyle: {
                color: colors.black,
                fontFamily: Font.bold,
                fontSize: fp(10),
                fontWeight: 'normal',
            },
            placeholderTextColor: colors.textColor3,
            containerStyle: {

                paddingRight: vp(0),
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,

                margin: 0,
                marginHorizontal: 0
            },
            inputContainerStyle: {
                elevation: 4,
                borderWidth: 1,
                height: hp(58),
                shadowRadius: 3.84,
                // fontSize: fp(18),
                paddingHorizontal : hp(10),
                shadowOpacity: 0.5,
                shadowColor: colors.textColor3,
                borderColor: '#eaeaea',
                borderRadius: hp(12),
                // fontFamily: Font.regular,
                backgroundColor: colors.white,
                shadowOffset: { width: 0, height: 5 },
                marginVertical: hp(-2),
                width:'100%'
            },
            errorStyle: {
                color: colors.primary,
                fontFamily: Font.regular,
                fontSize: fp(14),
                margin: hp(5),
                padding: 0,
            },
            fontFamily: Font.regular,
            fontSize: fp(18),
        },
    },
});
