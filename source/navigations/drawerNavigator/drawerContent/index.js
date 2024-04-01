import React from 'react';
import { View, Text } from 'react-native';
import { Header, Icon,  } from '@rneui/themed'
import { colors } from '../../../assets/colors';
import { Icons, IconsType } from '../../../assets/icons';
import { Dimension } from '../../../assets/dimension';
import { styles } from './styles';
import { base } from '../../../assets/base';


export const DrawerContent = () => {
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

export default Header;