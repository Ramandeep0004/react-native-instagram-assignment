import React from 'react';
import { View, Text } from 'react-native';
import { Header, Icon } from '@rneui/themed'
import styles from './styles';
import { Icons, IconsType } from '../../assets/icons';
import { colors } from '../../assets/colors';
import { hp, wp } from '../../assets/fontsize';
import { Dimension } from '../../assets/dimension';


export const HeaderComponet = (props) => {
  return (
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
          props.left === 'camera' ?
            <View style={{ marginLeft: wp(5), marginTop: hp(5) }}>
              <Icon
                type={IconsType.simpleLineIcon}
                name={Icons.camera3}
                color={colors.black}
                size={Dimension.Large}
                onPress={() => props.navigation.navigate('liveStreaming')}
              />
            </View>
            :
            null
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
          { text: props.title, style: props.centerTextStyle ? props.centerTextStyle : styles.title }}
      rightComponent={
        props.right === 'search' ?
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
          props.right === 'profile' ?
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
                  // onPress={() => props.navigation.openDrawer()}
                  />
                </View>
                :
                props.right === 'igtv&plus' ?
                  <>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ flexDirection: "row" }}>
                        <Icon
                          type={IconsType.feather}
                          name={Icons.monitor}
                          color={colors.black}
                          size={Dimension.Large}
                          onPress={() => props.navigation.navigate('IGTV')}
                        />
                        <View style={styles.notiFiDot}>
                          <View style={styles.dot} />
                        </View>
                      </View>
                      <View style={styles.iconMian}>
                        <Icon
                          type={IconsType.ionIcon}
                          name={Icons.mdPaperPlaneOutline}
                          color={colors.black}
                          size={Dimension.Large}
                          onPress={() => props.navigation.navigate('chat')}
                        />
                      </View>
                    </View>
                  </>
                  :
                  null
      }
      statusBarProps={{
        barStyle: 'dark-content',
        backgroundColor: colors.transparent,
      }}
    />
  );
};
