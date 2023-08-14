import { Header, Icon, Image, Input } from '@rneui/themed';
import { Text, TouchableOpacity, ImageBackground, FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';


export const Search = (props) => {

    let list = [
        {
            id: 1,
            name: 'IGTV',
            status: 1,
            icon: {
                type: IconsType.feather,
                name: Icons.tv2
            }
        },
        {
            id: 2,
            name: 'Shop',
            status: 1,
            icon: {
                type: IconsType.fontAwesome5,
                name: Icons.shoppingBag
            }
        },
        {
            id: 3,
            name: 'Style',
            status: 0,
            icon: {
                type: IconsType.fontAwesome5,
                name: Icons.shoppingBag
            }
        },
        {
            id: 4,
            name: 'Sports',
            status: 0,
            icon: {
                type: IconsType.fontAwesome5,
                name: Icons.shoppingBag
            }
        },
        {
            id: 5,
            name: 'Auto',
            properities: '1500 Properities',
            status: 0,
            icon: {
                type: IconsType.fontAwesome5,
                name: Icons.shoppingBag
            }
        },
    ]

    let list2 = [
        {
            id: 1,
            name: 'Joshnu_l',
            image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '120 Properities',
            status: 0,
            address: 'Tokyo, Japan'
        },
        {
            id: 2,
            name: 'Williams',
            image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            properities: '1999 Properities',
            status: 1,
            address: 'Tokyo, Japan'
        },
        {
            id: 4,
            name: 'Mullar',
            image: 'https://images.unsplash.com/photo-1632333528660-f0bed1510411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 2,
            address: 'Tokyo, Japan'
        },
        {
            id: 5,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 6,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1603005901058-02e1cfc65270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 7,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1628707351135-e963f2aa4387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 8,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1614750443485-9c2f8fd9dac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 9,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1667053508464-eb11b394df83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc5fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 11,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1676445708961-adf92f887170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDUxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id:12,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1526094114998-bbde692632d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjM0fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 13,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1673092147872-5ddb03194341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE0fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id:14,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1653379671837-224a212bf5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 15,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id:16,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1653379671837-224a212bf5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },

    ]


    return (
        <View style={styles.conatainer}>
            <View style={styles.body}>
                <View style={styles.rowMian}>
                    <View style={styles.search}>
                        <Input
                            placeholder='Search'
                            inputContainerStyle={styles.inputContainerStyle}
                            leftIcon={
                                < Icon
                                    type={IconsType.fontisto}
                                    name={Icons.search3}
                                    color={colors.textColor3}
                                    size={Dimension.medium}
                                />
                            }
                            style={styles.inputstyle}
                        />
                    </View>
                    <View style={styles.foucs}>
                        <Icon
                            type={IconsType.materialCommunity}
                            name={Icons.imageFilterCenterFocusStrongOutline}
                            color={colors.black}
                            size={Dimension.Large1}
                        />
                    </View>
                </View>
                <View style={styles.topIconsRow}>
                    <FlatList
                        contentContainerStyle={styles.flat}
                        data={list}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        // keyExtractor={(id) => id}
                        renderItem={({ item }) => (
                            <View style={styles.serachTags}>
                                <View style={styles.tagsRow}>
                                    {
                                        item.status === 1 ?
                                            <View style={styles.iconsmIan}>
                                                <Icon
                                                    type={item.icon?.type}
                                                    name={item.icon?.name}
                                                    color={colors.black}
                                                    size={Dimension.medium}
                                                />
                                            </View>
                                            :
                                            null
                                    }
                                    <Text style={styles.tag}>{item.name}</Text>
                                </View>
                            </View>
                        )
                        }
                    />
                </View>

                    <FlatList
                        contentContainerStyle={styles.flat}
                        data={list2}
                        numColumns={3}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(index, id) => ( index, id)}
                        renderItem={({ item, index }) => (
                            <View style={styles.mainBody}>
                                {
                                    index === 1 ?
                                        <View style={styles.itemContainer3}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={styles.image}
                                            />
                                        </View>
                                        :
                                        index === 2 ?
                                            <View style={styles.absulateImage}>
                                                <View style={styles.itemContainer2}>
                                                    <Image
                                                        source={{ uri: item.image }}
                                                        style={styles.image}
                                                    />
                                                </View>
                                            </View>
                                            :
                                            <View style={styles.itemContainer2}>
                                                <Image
                                                    source={{ uri: item.image }}
                                                    style={styles.image}
                                                />
                                            </View>
                                }
                            </View>
                        )
                        }
                    />
            </View>
        </View>
    )
}
