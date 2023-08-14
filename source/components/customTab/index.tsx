import { Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { Font } from '../../assets/fontfamily';
import { fp, hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';


export const CustomTab = (props: any) => {


    return (
        <View style={props.customtabConatinerStyle ? props.customtabConatinerStyle : styles.conatainer}>
            <View style={props.tabRowStyle ? props.tabRowStyle : styles.row}>
                <View style={props.icon1 ? [base.col6, styles.firtstIconsStyle]
                    :
                    props.value == 'following' ?
                        [base.col6, {
                            alignItems: 'center', borderBottomWidth: 0.9,
                            borderBottomColor: colors.black,
                            paddingBottom: hp(8)
                        }]
                        :
                        [base.col6, {
                            alignItems: 'center', borderBottomWidth: 0.9,
                            borderBottomColor: colors.textColor3,
                            paddingBottom: hp(8)
                        }]
                }>
                    {
                        props.icon1 ?
                            <Icon
                                type={IconsType.materialCommunity}
                                name={Icons.grid2}
                                color={colors.textColor3}
                                size={Dimension.Large1}
                            />
                            :
                            null
                    }
                    {
                        props.text1 ?
                            <Text style={props.value == 'following'  ? styles.text2 : styles.text1} onPress={() => props.onSelect('following')}>{props.text1}</Text>
                            :
                            null
                    }
                </View>
                <View style={props.icon2 ? [base.col6, styles.secondIconsStyle]
                    : props.value == 'you' ?
                        [base.col6, {
                            alignItems: 'center', borderBottomWidth: 0.9,
                            borderBottomColor: colors.black,
                            paddingBottom: hp(8)
                        }]
                        :
                        [base.col6, {
                            alignItems: 'center', borderBottomWidth: 0.9,
                            borderBottomColor: colors.textColor4,
                            paddingBottom: hp(8)
                        }]
                }>
                    {
                        props.icon2 ?
                            <Icon
                                type={IconsType.ionIcon}
                                name={Icons.iosImageoutline}
                                color={colors.textColor}
                                size={Dimension.Large1}
                            />
                            :
                            null
                    }
                    {
                        props.text2 ?
                            <Text style={props.value == 'you'  ? styles.text2 : styles.text1} onPress={() => props.onSelect('you')}>You</Text>
                            :
                            null
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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