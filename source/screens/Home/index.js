import { Icon, Image } from '@rneui/themed';
import { useEffect } from 'react'
import { Text, PermissionsAndroid, FlatList, View } from 'react-native';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { fp, hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';
import InstaStory from 'react-native-insta-story';
import { useIsFocused } from '@react-navigation/native';
import { HeaderComponet } from '../../components/header';


export const Home = (props) => {

    let list2 = [
        {
            id: 1,
            name: 'Joshnu_l',
            image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            properities: '120 Properities',
            status: 0,
            address: 'Tokyo, Japan'
        },
        {
            id: 2,
            name: 'Williams',
            image: 'https://images.unsplash.com/photo-1679829040916-5df2c824ad84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            properities: '1999 Properities',
            status: 1,
            address: 'Tokyo, Japan'
        },
        {
            id: 4,
            name: 'Mullar',
            image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 0,
            address: 'Tokyo, Japan'
        },
        {
            id: 5,
            name: 'Yuhal, YL',
            image: 'https://images.unsplash.com/photo-1528271537-64e11fc31bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 0,
            address: 'Tokyo, Japan'
        },
    ];


    const data = [
        {
            user_id: 1,
            user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
            user_name: "Your Story",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://images.unsplash.com/photo-1588130651809-25d0494cce12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHN0YXR1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://images.unsplash.com/photo-1600699565011-e22510eb3b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHN0YXR1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                }]
        },
        {
            user_id: 2,
            user_image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            user_name: "Williams",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://images.unsplash.com/photo-1634463393306-e5ea75c835c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHN0YXR1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://images.unsplash.com/photo-1609008661273-11d1e837d668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHN0YXR1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                }]
        },
        {
            user_id: 3,
            user_image: 'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            user_name: "Kirdppp_d",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://images.unsplash.com/photo-1646927509586-08adb766512a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxzdGF0dXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://images.unsplash.com/photo-1610047500454-b722b841ebd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHN0YXR1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                }]
        },
        {
            user_id: 4,
            user_image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            user_name: "Mullar",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                }]
        },
        {
            user_id: 5,
            user_image: 'https://images.unsplash.com/photo-1528271537-64e11fc31bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            user_name: "Yuhal, YL",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                }]
        },
    ];



    let isFocus = useIsFocused();
    useEffect(() => {
        if (isFocus) {
            getCameraPermission();
            getAduioRecordPermission()
        }
    }, [isFocus]);


    const getCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };


    const getAduioRecordPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    {
                        title: 'Permissions for record audio',
                        message: 'Give permission to your device to record audio',
                        buttonPositive: 'ok',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('permission granted RECORD_AUDIO');
                } else {
                    console.log('permission denied');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    };


    return (
        <>
            <HeaderComponet
                left={'camera'}
                right={"igtv&plus"}
                title={'Instagram'}
                centerTextStyle={styles.title}
                navigation={props.navigation}
            />
            <View style={styles.conatainer}>
                <InstaStory
                    data={data}
                    duration={10}
                    avatarSize={hp(70)}
                    onStart={item => console.log(item)}
                    onClose={item => console.log('close: ', item)}
                    customSwipeUpComponent={<Text>Swipe</Text>}
                    showAvatarText={true}
                    unPressedBorderColor={colors.purple}
                    textStyle={{
                        colors: colors.secondPrimary
                    }}
                />
                {/* <View>
                    <Text style={{ marginHorizontal: 59, marginVertical: hp(30) }}>Go LIVE</Text>
                </View> */}
                <View style={styles.bodyMain}>
                    <FlatList
                        contentContainerStyle={styles.flat2}
                        data={list2}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(index, id) => (index, id)}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <View style={styles.userContainer}>
                                    <View style={styles.userRow}>
                                        <View style={[styles.col2, { alignItems: 'center' }]}>
                                            <View style={styles.userImage}>
                                                <Image
                                                    source={{ uri: item.image }}
                                                    style={styles.image}
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.col7, { alignItems: 'flex-start' }]}>
                                            <View style={styles.nameRow}>
                                                <Text style={styles.userName} numberOfLines={1}>{item.name}</Text>
                                                <View style={styles.icnMian}>
                                                    <Icon
                                                        type={IconsType.materialCommunity}
                                                        name={Icons.checkInnstagram}
                                                        color={colors.sky}
                                                        size={Dimension.Vsmall}
                                                    />
                                                </View>
                                            </View>
                                            <Text style={styles.userName2} numberOfLines={1}>{item.address}</Text>
                                        </View>
                                        <View style={[styles.col3]}>
                                            <Icon
                                                type={IconsType.materialCommunity}
                                                name={Icons.dotsHorizontal}
                                                color={colors.black}
                                                size={Dimension.Large}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.imageContainer2} >
                                    <View style={styles.bodyImageMain}>
                                        <Image
                                            source={{ uri: 'https://images.unsplash.com/photo-1679829040916-5df2c824ad84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }}
                                            style={styles.image}
                                        />
                                    </View>
                                </View>

                                <View style={styles.userBottmeIconsConatiner}>
                                    <View style={styles.icons1}>
                                        <Icon
                                            type={IconsType.evilicon}
                                            name={Icons.heart2}
                                            color={colors.black}
                                            size={Dimension.Large3}
                                        />
                                    </View>
                                    <View style={styles.icons1}>
                                        <Icon
                                            type={IconsType.ionIcon}
                                            name={Icons.chatbubbleOutline2}
                                            color={colors.black}
                                            size={Dimension.Large}
                                        />
                                    </View>
                                    <View style={styles.icons1}>
                                        <Icon
                                            type={IconsType.ionIcon}
                                            name={Icons.mdPaperPlaneOutline}
                                            color={colors.black}
                                            size={Dimension.Large}
                                        />
                                    </View>
                                    <View style={base.col8}>
                                        <Icon
                                            type={IconsType.materialCommunity}
                                            name={Icons.dotsHorizontal}
                                            color={colors.black}
                                            size={Dimension.large}
                                        />
                                    </View>
                                    <View style={styles.icons1}>
                                        <Icon
                                            type={IconsType.fontAwesome}
                                            name={Icons.bookmarkO}
                                            color={colors.black}
                                            size={Dimension.Large}
                                        />
                                    </View>
                                </View>
                                <View style={styles.userLikesRow}>
                                    <View style={styles.userLikesImage}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View style={styles.likesMian}>
                                        <Text style={styles.likesBy}>Liked by <Text style={styles.likesBy2}>harman_J</Text> and <Text style={styles.likesBy2}>56,049 others</Text></Text>
                                    </View>
                                </View>
                                <View style={styles.about}>
                                    <Text style={styles.aboutText} numberOfLines={2}>John_h <Text style={styles.aboutText2}>The games in Javan was amazing And I wanna share some images</Text></Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </>
    )
};
