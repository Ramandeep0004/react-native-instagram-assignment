import { Header, Icon, Image, Input } from '@rneui/themed';
import { useEffect } from 'react'
import { Text, TouchableOpacity, PermissionsAndroid, FlatList } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { ProfileHeader } from 'react-native-story-view';
import { Footer } from 'react-native-story-view/lib/components/Footer';
import { MultiStory } from 'react-native-story-view/lib/components/MultiStory';
import { View } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { fp, hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';
import InstaStory from 'react-native-insta-story';
import { Font } from '../../assets/fontfamily';
import { useIsFocused } from '@react-navigation/native';


export const Home = (props) => {

    // let list = [
    //     {
    //         id: 1,
    //         name: 'Your Story',
    //         image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //         properities: '120 Properities',
    //         status: 0
    //     },
    //     {
    //         id: 2,
    //         name: 'Williams',
    //         image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //         properities: '1999 Properities',
    //         status: 1
    //     },
    //     {
    //         id: 3,
    //         name: 'Kirdppp_d',
    //         image: 'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //         properities: '1500 Properities'
    //     },
    //     {
    //         id: 4,
    //         name: 'Mullar',
    //         image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    //         properities: '1500 Properities',
    //         status: 0
    //     },
    //     {
    //         id: 5,
    //         name: 'Yuhal, YL',
    //         image: 'https://images.unsplash.com/photo-1528271537-64e11fc31bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    //         properities: '1500 Properities',
    //         status: 0
    //     },
    // ]

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
    ]

    const options = {
        maxWidth: 1000,
        maxHeight: 1500,
        quality: 0.3,
        includeBase64: true,
        mediaType: 'photo',
    };


    const camera = () => {
        // setProgress(0);
        launchCamera(options, async response => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else if (response.assets[0].fileSize > 2000000) {
                new Toaster().error(t('Image must be less than 2mb'))
            }
            else {
                // uploadImage(response.assets[0]);
            }
        });
    };


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
        }, {
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
  

    const getAduioRecordPermission = async () =>{
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
    }

    return (
        <>
            <Header
                placement="center"
                containerStyle={styles.container2}
                style={styles.header}
                leftComponent={
                    <View style={styles.iconMian}>
                        <Icon
                            type={IconsType.simpleLineIcon}
                            name={Icons.camera3}
                            color={colors.black}
                            size={Dimension.Large}
                            onPress={() => props.navigation.navigate('liveStreaming')}
                        />
                    </View>

                }
                centerComponent={{ text: 'Instagram', style: styles.title }}
                rightComponent={
                    <>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={IconsType.feather}
                                    name={Icons.monitor}
                                    color={colors.black}
                                    size={Dimension.Large}
                                    onPress={() => props.navigation.navigate('IGTV')}
                                />
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
                        <View style={styles.notiFiDot}>
                            <View style={styles.dot} />
                        </View>
                    </>
                }
                statusBarProps={{
                    barStyle: 'dark-content',
                    backgroundColor: colors.white,
                    translucent: true
                }}
            />
            <View style={styles.conatainer}>
                {/* <View style={styles.rowContainer}>
                    <View style={styles.profilelistmain}>
                        <FlatList
                            contentContainerStyle={styles.flat}
                            data={list}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            // keyExtractor={(id) => id}
                            renderItem={({ item }) => (
                                <View style={styles.mainRow}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('status')}>
                                        <View style={styles.imageContainer} >
                                            <LinearGradient
                                                colors={item.status === 1 ? [colors.darkPurple, colors.lightRed] : [colors.purple, colors.yellow]}
                                                style={styles.LinetStyle}
                                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                            >
                                                <View style={styles.imageSubContaner}>
                                                    <View style={styles.imageMain}>
                                                        <Image source={{ uri: item.image }}
                                                            style={styles.image} />
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                    </TouchableOpacity>
                                    {
                                        item.status === 1 ?
                                            <View style={styles.liveStatus}>
                                                <View style={styles.livecontainer}>
                                                    <LinearGradient
                                                        colors={[colors.red2, colors.lightRed]}
                                                        style={styles.LinetStyle}
                                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                                    >
                                                        <View style={styles.liveMian}>
                                                            <Text style={styles.live}>LIVE</Text>
                                                        </View>
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                            :
                                            null
                                    }
                                    <View style={styles.nameMian}>
                                        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                                    </View>
                                </View>

                            )
                            }
                        />
                    </View>
                </View> */}
                <InstaStory
                    data={data}
                    duration={10}
                    avatarSize={hp(70)}
                    onStart={item => console.log(item)}
                    onClose={item => console.log('close: ', item)}
                    customSwipeUpComponent={
                        <View>
                            <Text>Swipe</Text>
                        </View>
                    }
                    style={{ marginTop: 10 }}
                    showAvatarText={true}
                    unPressedBorderColor={colors.purple}
                    textStyle={{
                     colors : colors.secondPrimary
                    }}
                    
                />
               <View>
                 <Text style={{marginHorizontal : 59, marginVertical : hp(30)}}>Go LIVE</Text>
               </View>
                <View style={styles.bodyMain}>
                    <FlatList
                        contentContainerStyle={styles.flat2}
                        data={list2}
                        showsHorizontalScrollIndicator={false}
                        // keyExtractor={(id) => id}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <View style={styles.userContainer}>
                                    <View style={styles.userRow}>
                                        <View style={[styles.col2, { alignItems: 'center' }]}>
                                            <View style={styles.userImage}>
                                                <Image source={{ uri: item.image }}
                                                    style={styles.image} />
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
                        )
                        }
                    />
                </View>
            </View>

        </>
    )
}
