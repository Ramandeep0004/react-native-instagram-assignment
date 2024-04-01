import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import { Button, Icon, Image } from '@rneui/themed';
import VideoPlayer from 'react-native-video-player';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './styles';
import { Icons, IconsType } from '../../assets/icons';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const VideoPlayerScreen = props => {
    let navigationParam = props && props.route && props.route.params
    let itemList = navigationParam && navigationParam.itemsList ? navigationParam.itemsList : null
    const [videoUrl, setVideoUrl] = useState(null);

    let isFocus = useIsFocused();
    useEffect(() => {
        if (itemList) {
            let firstUrl = itemList && itemList[0].video
            setVideoUrl(firstUrl)
        }
        else {
            props.navigation.goBack()
        }
    }, [isFocus]);


    const handleNextVideo = () => {
        let array = [...itemList]
        let arrayInnex = array.findIndex((item) => item.video.url === videoUrl.url)
        let currentLength = arrayInnex + 1
        if (currentLength < array.length) {
            let nextVideodata = array[currentLength].video
            setVideoUrl(nextVideodata);
        }
        else {
            props.navigation.goBack()
        }
    };


    return (
        <>
            {
                videoUrl ?
                    <View style={styles.maincontainer}>
                        <StatusBar backgroundColor={"transparent"} />
                        <VideoPlayer
                            video={videoUrl.url}
                            videoWidth={screenWidth}
                            videoHeight={screenHeight}
                            resizeMode={'cover'}
                            thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                            autoplay
                            loop
                            showDuration={true} 
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
                                        onPress={() => props.navigation.goBack()}
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
                                        itemList && itemList.length > 1 ?
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
        </>
    );
};



export default VideoPlayerScreen;
