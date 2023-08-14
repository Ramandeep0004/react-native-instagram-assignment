import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, HeaderProps, Icon, Image } from '@rneui/themed'
import { colors } from '../../assets/colors';
import { Icons, IconsType } from '../../assets/icons';
import { fp, hp, vp } from '../../assets/fontsize';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native"
import { Font } from '../../assets/fontfamily';
import { base } from '../../assets/base';
import { Dimension } from '../../assets/dimension';



export const DrawerContent = (props: any) => {


  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.username}>
          <Text style={styles.name}>jacub_w</Text>
        </View>
        <View style={styles.row1}>
          <View style={styles.col4}>
            <Icon
              type={IconsType.materialCommunity}
              name={Icons.clockMinusOutline}
              color={colors.textColor}
              size={Dimension.Large2}
            />
          </View>
          <View style={base.col9}>
            <Text style={styles.name}>Archiev</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.col4}>
            <Icon
              type={IconsType.materialCommunity}
              name={Icons.progressClock}
              color={colors.textColor}
              size={Dimension.Large2}
            />
          </View>
          <View style={base.col9}>
            <Text style={styles.name}>Your Activity</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.col4}>
            <Icon
              type={IconsType.material}
              name={Icons.centerFocusWeak}
              color={colors.textColor}
              size={Dimension.Large2}
            />
          </View>
          <View style={base.col9}>
            <Text style={styles.name}>Nametag</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.col4}>
            <Icon
              type={IconsType.ionIcon}
              name={Icons.bookmarkOutline}
              color={colors.textColor}
              size={Dimension.Large2}
            />
          </View>
          <View style={base.col9}>
            <Text style={styles.name}>Saved</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.col4}>
            <Icon
              type={IconsType.antDesign}
              name={Icons.bars}
              color={colors.textColor}
              size={Dimension.Large2}
            />
          </View>
          <View style={base.col9}>
            <Text style={styles.name}>Close Friends</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.col4}>
            <Icon
              type={IconsType.ionIcon}
              name={Icons.personAddOutline}
              color={colors.textColor}
              size={Dimension.Large1}
            />
          </View>
          <View style={base.col9}>
            <Text style={styles.name}>Discover People</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.col4}>
            <View style={styles.iconMian}>
              <Icon
                type={IconsType.fontAwesome}
                name={Icons.facebook}
                color={colors.textColor}
                size={Dimension.large}
              />
            </View>
          </View>
          <View style={base.col9}>
            <Text style={styles.name}>Open Facebook</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white
  },
  body: {
    // marginTop: hp(60),
    paddingHorizontal: hp(16)
  },
  username: {
    marginVertical: hp(10)
  },
  name: {
    fontSize: fp(20),
    color: colors.black,
    fontFamily: Font.regular,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(12)
  },
  col4: {
    width: '20%',
    alignItems: 'flex-start',
    justifyContent : 'center'
  },
  iconMian: {
    borderWidth : 1.6,
    borderColor : colors.textColor,
    backgroundColor: colors.white,
    paddingVertical: hp(5),
    marginLeft : hp(4),
    paddingHorizontal: hp(10),
    borderRadius:hp(3),
  },

});
export default Header;