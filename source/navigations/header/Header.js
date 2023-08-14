import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, HeaderProps, Icon, Image } from '@rneui/themed'
import { colors } from '../../assets/colors';
import { Icons, IconsType } from '../../assets/icons';
import { fp, hp, hzp, vp } from '../../assets/fontsize';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native"
import { Font } from '../../assets/fontfamily';
import { base } from '../../assets/base';
import { Dimension } from '../../assets/dimension';



export const HeaderComponet = (props) => {


  return (
    <>
      <Header
        placement="center"
        containerStyle={styles.container}
        style={styles.header}
        leftComponent={
          props.left === 'back'
            ?
            <View style={styles.iconMian}>
              <Icon
                type={IconsType.material}
                name={Icons.arrowBackIos}
                color={colors.textColor}
                size={hp(22)}
                onPress={() => props.navigation.goBack()}
              />
            </View>
            :
            undefined
        }
        centerComponent={
          props.centreIcon ?
            <View style={styles.centerComponentConatiner}>
              <View style={styles.centerRow}>
                <View style={styles.centreIcon}>
                  {
                    props.chatscreen ?
                      null
                      :
                      <Icon
                        type={IconsType.fontAwesome}
                        name={Icons.lock}
                        color={colors.black}
                        size={Dimension.large}
                      />
                  }
                </View>
                <View style={styles.userNameManin}>
                  <Text style={styles.userName}>jacob_w</Text>
                </View>
                <View style={styles.centreIcon}>
                  <Icon
                    type={IconsType.fontAwesome}
                    name={Icons.angleDown}
                    color={colors.black}
                    size={Dimension.Large}
                  />
                </View>
              </View>
            </View>
            :
            { text: props.title, style: styles.title }}
        rightComponent={
          props.right === 'search'
            ?
            <View style={styles.iconMian}>
              <Icon
                type={IconsType.feather}
                name={Icons.search}
                color={colors.black}
                size={hp(25)}
              // onPress={() => navigation.navigate('')}
              />
            </View>
            :
            props.right === 'profile'
              ?
              <View style={styles.iconMian}>
                <Icon
                  type={IconsType.ionIcon}
                  name={Icons.mdMenuOutline}
                  color={colors.black}
                  size={hp(25)}
                // onPress={() => navigation.navigate('search')}
                />
              </View>
              :
              props.right === 'menu' ?
                <View style={styles.iconMian}>
                  <Icon
                    type={IconsType.simpleLineIcon}
                    name={Icons.menu}
                    color={colors.black}
                    size={hp(25)}
                    onPress={() => props.navigation.openDrawer()}
                  />
                </View>
                :
                props.right === 'plus' ?
                  <View style={styles.iconMian}>
                    <Icon
                      type={IconsType.antDesign}
                      name={Icons.plus}
                      color={colors.black}
                      size={Dimension.Large}
                      onPress={() => props.navigation.openDrawer()}
                    />
                  </View>
                  :
                  undefined
        }
        statusBarProps={{
          barStyle: 'dark-content',
          backgroundColor: colors.white,
          translucent: true
        }}
      />
    </>
  );
};


const styles = StyleSheet.create({
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
    // width: '%',
    borderRadius: 10,
  },
  icon: {
    height: hp(50),
    width: hp(50),
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: Font.regular,
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
  }
});
export default Header;