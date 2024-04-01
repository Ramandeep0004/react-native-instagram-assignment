import { Icon, Image } from '@rneui/themed';
import { FlatList, TouchableOpacity, Text, StatusBar } from 'react-native';
import { View } from 'react-native-ui-lib';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { hp, vp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';
import { Images } from '../../assets/images';


export const IGTV = (props) => {

    let list2 = [
        {
            id: 1,
            name: 'Joshnu_l',
            image: 'https://images.unsplash.com/photo-1626670386980-fde239604c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG5hdHVyZSUyMHZpZGVvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            bio: 'Interviews with leading desing of top desigining companies',
            views: '37.8 k',
            duraton: '9:12',
            status: 0,
            address: 'Tokyo, Japan',
        },
        {
            id: 2,
            name: 'Williams',
            image: 'https://images.unsplash.com/photo-1544738578-8ebe450d005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZSUyMHZpZGVvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            bio: 'Regualr studio shooting comparison',
            status: 1,
            views: '52.3 k',
            address: 'Tokyo, Japan',
            duraton: '5:23',
        },
        {
            id: 4,
            name: 'Mullar',
            image: 'https://images.unsplash.com/photo-1600721308040-9b5e04fb544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZSUyMHZpZGVvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            bio: '1500 bio',
            status: 2,
            views: '37.8 k',
            address: 'Tokyo, Japan',
            duraton: '43.30',
        },
        {
            id: 5,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1515993304381-bcceb91cfc54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxuYXR1cmUlMjB2aWRlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            bio: '1500 bio',
            status: 3,
            views: '37.8 k',
            address: 'Tokyo, Japan',
            duraton: '43.30',
        },
        {
            id: 6,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1603005901058-02e1cfc65270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600',
            bio: '1500 bio',
            status: 3,
            views: '37.8 k',
            address: 'Tokyo, Japan',
            duraton: '43.30',
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
        <>
            <StatusBar
                translucent
                backgroundColor='transparent'
                barStyle={'light-content'}
            />
            <View style={styles.conatainer}>
                <View style={styles.body}>
                    <View style={styles.ImageMain}>
                        <Image
                            source={{ uri: 'https://thumbs.dreamstime.com/b/bruit-de-tv-19532351.jpg' }}
                            style={styles.image}
                        />
                    </View>
                    <FlatList
                        contentContainerStyle={styles.flat}
                        data={list2}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(index, id) => (index, id)}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => handleVideoPlay()}>
                                <View style={styles.mainBody}>
                                    <TouchableOpacity onPress={() => handleVideoPlay()}>
                                        <View style={styles.itemImage}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={styles.image}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.durationVideo}>
                                        <Text style={styles.username}>{item.duraton}</Text>
                                    </View>
                                    <View style={styles.itemDetail}>
                                        <Text style={styles.bio} numberOfLines={2}>{item.bio}</Text>
                                        <Text style={styles.username}>{item.name}</Text>
                                        <Text style={styles.username}>{item.views}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                        }
                    />
                    <View style={styles.absulateHeader}>
                        <View style={styles.rowMian}>
                            <View style={styles.toptag}>
                                <Icon
                                    type={IconsType.simpleLineIcon}
                                    name={Icons.arrowLeft}
                                    color={colors.white}
                                    size={Dimension.large}
                                    onPress={() => props.navigation.goBack()}
                                />
                            </View>
                            <View style={styles.headerMian}>
                                <Text style={styles.headr}>IGTV</Text>
                            </View>
                            <View style={styles.toptag2}>
                                <Icon
                                    type={IconsType.feather}
                                    name={Icons.search}
                                    color={colors.white}
                                    size={Dimension.Large}
                                />
                            </View>
                            <View style={styles.toptag2}>
                                <Icon
                                    type={IconsType.antDesign}
                                    name={Icons.plus}
                                    color={colors.white}
                                    size={Dimension.large}
                                    style={{ marginTop: hp(3) }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
};
