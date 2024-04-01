import { Button, Icon, Image } from '@rneui/themed';
import { View } from 'react-native-ui-lib';
import { styles } from './style';
import { Text, FlatList } from "react-native"
import { Icons, IconsType } from '../../assets/icons';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { CustomTab } from '../../components/customTab';
import { Images } from '../../assets/images';


export const Profile = (props) => {
    let list2 = [
        {
            id: 1,
            name: 'Joshnu_l',
            image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '120 Properities',
            status: 0,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 2,
            name: 'Williams',
            image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            properities: '1999 Properities',
            status: 1,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 4,
            name: 'Mullar',
            image: 'https://images.unsplash.com/photo-1632333528660-f0bed1510411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 2,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 5,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 6,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1603005901058-02e1cfc65270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'video'
        },
        {
            id: 7,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1628707351135-e963f2aa4387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 8,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1614750443485-9c2f8fd9dac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 9,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1667053508464-eb11b394df83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc5fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 11,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1676445708961-adf92f887170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDUxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 12,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1526094114998-bbde692632d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjM0fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 13,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1673092147872-5ddb03194341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE0fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 14,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1653379671837-224a212bf5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 15,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },
        {
            id: 16,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1653379671837-224a212bf5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'image'
        },

    ];


    const handleVideoPlay = () => {
        let itemsArray = [{
            id: 11,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1525451545902-3f8f9620c6ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdhbGxwYXBlciUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 3,
            address: 'Tokyo, Japan',
            type: 'video',
            video: {
                url: Images.video4
            }
        }]
        props.navigation.navigate("videoPlayerScreen", { itemsList: itemsArray })
    };


    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.topRow}>
                    <View style={styles.col4}>
                        <View style={styles.imageMian}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.col3}>
                        <Text style={styles.text1}>50</Text>
                        <Text style={styles.text2}>Posts</Text>
                    </View>
                    <View style={styles.col3}>
                        <Text style={styles.text1}>860</Text>
                        <Text style={styles.text2}>Followers</Text>
                    </View>
                    <View style={styles.col3}>
                        <Text style={styles.text1}>162</Text>
                        <Text style={styles.text2}>Following</Text>
                    </View>
                </View>
                <View style={styles.userDetail}>
                    <Text style={styles.name}>Jacob West</Text>
                    <Text style={styles.work}>Digital goodies desiner <Text style={styles.tag}>@Globiz tech.</Text></Text>
                    <Text style={styles.bio}>Everything is design</Text>
                </View>
                <Button
                    title={'Edit Profile'}
                    titleStyle={styles.titleStyle}
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.containerStyle}
                    onPress={() => props.navigation.navigate('EditProfile')}
                />
                <View style={styles.imageTagsRow}>
                    <View style={[styles.col3]}>
                        <View style={styles.imageMian2}>
                            <Icon
                                type={IconsType.antDesign}
                                name={Icons.plus}
                                color={colors.textColor}
                                size={Dimension.Large1}
                            />
                        </View>
                        <Text style={styles.tagsName}>New</Text>
                    </View>
                    <View style={[styles.col3]}>
                        <View style={styles.imageMian2}>
                            <View style={styles.imageContainer2}>
                                <Image
                                    source={{ uri: 'https://plus.unsplash.com/premium_photo-1669122520187-2a2c721865b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                        <Text style={styles.tagsName}>Friends</Text>
                    </View>
                    <View style={[styles.col3]}>
                        <View style={styles.imageMian2}>
                            <View style={styles.imageContainer2}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                        <Text style={styles.tagsName}>Sports</Text>
                    </View>
                    <View style={[styles.col3]}>
                        <View style={styles.imageMian2}>
                            <View style={styles.imageContainer2}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                        <Text style={styles.tagsName}>Design</Text>
                    </View>
                </View>
            </View>
            <View style={styles.filesContainer}>
                <CustomTab
                    icon1={'Following'}
                    icon2={'You'}
                    customtabConatinerStyle={styles.customtabConatiner}
                    tabRowStyle={styles.tabRow}
                />
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={list2}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
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
                                    <View style={styles.videoIcons}>
                                        <Icon
                                            type={IconsType.entypo}
                                            name={Icons.videoCamera}
                                            color={colors.white}
                                            size={Dimension.semilarge}
                                            onPress={() => handleVideoPlay()}
                                        />
                                    </View>
                                    :
                                    null
                            }
                        </View>
                    )}
                />
            </View>
        </View>
    )
};
