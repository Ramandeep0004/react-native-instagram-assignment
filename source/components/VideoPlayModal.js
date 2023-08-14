import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import Modal from "react-native-modal";
import { colors } from '../assets/colors';
import { fp, hp, hzp, vp, wp } from '../assets/fontsize';
import { Icons, IconsType } from '../assets/icons';
import { Button, Icon, Image, Slider } from '@rneui/themed';
import { Dimension } from '../assets/dimension';
import { Font } from '../assets/fontfamily';
import { Images } from '../assets/images';
import VideoPlayer from 'react-native-video-player';
import { useIsFocused } from '@react-navigation/native';

const VideoPlayerModal = props => {
    const [videoUrl, setUrl] = useState(null);

    let isFocus = useIsFocused();
    useEffect(() => {
        if (props && props.item) {
            let firstUrl = props && props.item && props.item[0].video
            setUrl(firstUrl)
        }
        else {
            props.close()
        }
    }, [isFocus]);


    const handleNextVideo = () => {
        let array = [...props.item]
        let arrayInnex = array.findIndex((item) => item.video.url === videoUrl.url)
        let currentLength = arrayInnex + 1
        if (currentLength < array.length) {
            let nextVideodata = array[currentLength].video
            setUrl(nextVideodata);
        }
        else {
            props.close()
        }
    };


    return (
        <>
            <StatusBar hidden={true} animated={true} backgroundColor={colors.black} />
            <Modal isVisible={props.open} style={styles.modal} backdropColor={colors.black} backdropOpacity={100} >
                {
                    videoUrl ?
                        <View style={styles.maincontainer}>
                            <VideoPlayer
                                video={videoUrl.url}
                                videoWidth={hp(530)}
                                videoHeight={900}
                                resizeMode={'cover'}
                                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                                autoplay
                                showDuration
                                customStyles={{
                                    seekBarProgress: {
                                        color: colors.white,
                                        backdropColor: colors.white
                                    }
                                }}
                            />
                            <View style={styles.topTextMian}>
                                <View style={styles.iconsRow2}>
                                    <View style={styles.content1}>
                                        <Text style={styles.header}>Interviews with leading designers of large companies</Text>
                                    </View>
                                    <View style={styles.content2}>
                                        <Icon
                                            type={IconsType.antDesign}
                                            name={Icons.close}
                                            color={colors.white}
                                            size={Dimension.Large}
                                            onPress={() => props.close()}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.userInfo}>
                                <View style={styles.iconsRow}>
                                    <View style={styles.tag1}>
                                        <View style={styles.imageContainer}>
                                            <Image
                                                source={{ uri: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                                                style={styles.image}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.tag2}>
                                        <Text style={styles.name}>amanda_design</Text>
                                        <Text style={styles.dob}>September 13</Text>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={styles.Follow}>Follow</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.botomIcons}>
                                <View style={styles.iconsRow1}>
                                    <View style={styles.text1Mian}>
                                        <Text style={styles.text1}>37,366 views </Text>
                                    </View>
                                    <View style={styles.text2Mian}>
                                        <Text style={styles.text1}>366 comments</Text>
                                    </View>
                                </View>
                                <View style={styles.iconsRow}>
                                    <View style={styles.icon1}>
                                        <Icon
                                            type={IconsType.fontAwesome}
                                            name={Icons.heartO}
                                            color={colors.white}
                                            size={Dimension.Large}
                                        />
                                    </View>
                                    <View style={styles.icon1}>
                                        <Icon
                                            type={IconsType.ionIcon}
                                            name={Icons.mdChatbubbleOutline}
                                            color={colors.white}
                                            size={Dimension.Large}
                                            style={{ transform: [{ rotateY: '180deg' }] }}
                                            onPress={() => props.navigation.navigate('chat')}
                                        />
                                    </View>
                                    <View style={styles.icon1}>
                                        <Icon
                                            type={IconsType.ionIcon}
                                            name={Icons.mdPaperPlaneOutline}
                                            color={colors.white}
                                            size={Dimension.Large}
                                            onPress={() => props.navigation.navigate('chat')}
                                        />
                                    </View>
                                    <View style={styles.icon1}>
                                        <Icon
                                            type={IconsType.entypo}
                                            name={Icons.dotsThreeHorizontal}
                                            color={colors.white}
                                            size={Dimension.large}
                                        />
                                    </View>
                                    <View style={styles.icon3}>
                                        {
                                            props && props.item.length > 1 ?
                                                <Button
                                                    title={'Up Next'}
                                                    buttonStyle={styles.buttonStyle}
                                                    containerStyle={styles.containerStyle}
                                                    titleStyle={styles.titleStyle}
                                                    onPress={() => handleNextVideo()}
                                                />
                                                :
                                                null
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                        :
                        null
                }
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    maincontainer: {
        backgroundColor: '000000',
        width: '100%',
        height: '100%',
    },
    backgroundVideo: {
        height: hp(820),
        width: '100%',
        overflow: 'hidden',
        borderRadius: hp(15)
    },
    topTextMian: {
        position: 'absolute',
        top: hp(20),
        left: hp(20),
        right: hp(20),
    },
    userInfo: {
        position: 'absolute',
        top: hp(90),
        left: hp(20),
        right: hp(20),
    },
    botomIcons: {
        position: 'absolute',
        left: hp(10),
        bottom: hp(80),
        right: hp(10),
    },
    iconsRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(10)
    },
    iconsRow: {
        flexDirection: 'row',
        alignItems: "flex-start"
    },
    icon1: {
        width: '12%',
    },
    icon3: {
        width: '52%',
        alignItems: 'flex-end'
    },
    titleStyle: {
        color: colors.white,
        fontSize: fp(16),
        fontFamily: Font.regular,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonStyle: {
        borderRadius: wp(1),
        paddingVertical: vp(6),
        paddingHorizontal: hzp(18),
        backgroundColor: 'transparent',
        width: hp(110),
    },
    containerStyle: {
        borderRadius: wp(5),
        marginHorizontal: hp(0),
        shadowRadius: hp(2),
        borderWidth: 0.5,
        borderColor: colors.white,
        // borderRadius: 12,
        // height: hp(60),
        elevation: 0,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 5 },
    },
    text1Mian: {
        marginLeft: hp(7)
    },
    text2Mian: {
        marginLeft: hp(20)
    },
    text1: {
        color: colors.textColor3,
        fontSize: fp(16),
        fontFamily: Font.regular,
    },
    header: {
        color: colors.white,
        fontSize: fp(22),
        fontFamily: Font.bold,
    },
    content1: {
        width: '85%'
    },
    content2: {
        width: '15%',
        alignItems: 'flex-end',
        marginTop: hp(3)
    },
    iconsRow2: {
        flexDirection: 'row'
    },
    iconsRow2: {
        flexDirection: 'row'
    },
    tag1: {
        width: '15%',
    },
    tag2: {
        width: '33%',
    },
    tag3: {
        width: '50%',
        alignItems: 'flex-start'
    },
    imageContainer: {
        height: hp(42),
        width: hp(42),
        borderRadius: hp(21),
        overflow: 'hidden',
        justifyContent: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    name: {
        color: colors.white,
        fontSize: fp(16),
        fontFamily: Font.medium,
    },
    dob: {
        color: colors.white,
        fontSize: fp(16),
        fontFamily: Font.light,
    },
    Follow: {
        color: colors.white,
        fontSize: fp(18),
        fontFamily: Font.medium,
    }

});

export default VideoPlayerModal;
