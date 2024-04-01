import { Header, Icon, Image, Input } from '@rneui/themed';
import { FlatList, TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';
import { useState } from 'react'
import { Images } from '../../assets/images';


export const AllPosts = (props) => {
    let list2 = [
        {
            id: 1,
            name: 'Joshnu_l',
            image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '120 Properities',
            status: 0,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 2,
            name: 'Williams',
            image: 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1999 Properities',
            status: 1,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 3,
            name: 'Mullar',
            image: 'https://images.unsplash.com/photo-1632333528660-f0bed1510411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 2,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 4,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan'
        },
        {
            id: 5,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1603005901058-02e1cfc65270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 6,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1628707351135-e963f2aa4387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'multi'
        },
        {
            id: 7,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1629194966581-6273cca496f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHx3YWxscGFwZXIlMjBoZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'multi'
        },
        {
            id: 8,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1667053508464-eb11b394df83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc5fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 9,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1676445708961-adf92f887170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDUxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 10,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1526094114998-bbde692632d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjM0fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 11,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1525451545902-3f8f9620c6ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'video',
            video: {
                url: Images.video
            }
        },
        {
            id: 12,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1653379671837-224a212bf5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 13,
            name: 'Yuhal, YL',
            image: 'https://plus.unsplash.com/premium_photo-1666866587910-2f333c109ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'multi'
        },
        {
            id: 14,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'video',
            video: {
                url: Images.video2
            }
        },
        {
            id: 15,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1627490764473-2b58242bbc2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 16,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 17,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1546423237-abf72876d79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
        {
            id: 18,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'video',
            video: {
                url: Images.video3
            }
        },

    ]


    const handleVideoPlayer = (item) => {
        let array = [...list2]
        let filterData = array.filter((data) => data.type === 'video' && data.id >= item.id)
        props.navigation.navigate("videoPlayerScreen", { itemsList: filterData })
    };

    return (
        <View style={styles.conatainer}>
            <View style={styles.body}>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={list2}
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index, id) => (index, id)}
                    renderItem={({ item, index }) => (
                        <View style={styles.mainBody}>
                            <View style={styles.itemContainer2}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.image}
                                />
                            </View>
                            {
                                item.type === 'video' ?
                                    <View style={styles.tags}>
                                        <TouchableOpacity onPress={() => handleVideoPlayer(item)}>
                                            <Icon
                                                type={IconsType.entypo}
                                                name={Icons.videoCamera}
                                                color={colors.white}
                                                size={Dimension.large}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    item.type === 'multi' ?
                                        <View style={styles.tags}>
                                            <Icon
                                                type={IconsType.materialCommunity}
                                                name={Icons.checkboxMultipleBlankOutline}
                                                color={colors.white}
                                                size={Dimension.large}
                                                style={{ transform: [{ rotateY: '180deg' }] }}
                                            />
                                        </View>
                                        :
                                        null
                            }
                        </View>
                    )
                    }
                />
            </View>
        </View>
    )
}
