import { Header, Icon, Image, Input, LinearProgress } from '@rneui/themed';
import { FlatList, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { View } from 'react-native-ui-lib';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { hp, vp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';
import { useState } from 'react'
import VideoPlayerModal from '../../components/VideoPlayModal';


export const Status = (props) => {
    const [modal, setModal] = useState(false);

    let list2 = [
        {
            id: 4,
            name: 'Mullar',
            image: 'https://images.unsplash.com/photo-1632333528660-f0bed1510411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            properities: '1500 Properities',
            status: 2,
            address: 'Tokyo, Japan',
            type: 'imege'
        },
    ]


    return (
        <View style={styles.conatainer}>
            <View style={styles.body}>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={list2}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // keyExtractor={(index, id) => (index, id)}
                    renderItem={({ item, index }) => (
                        <View style={styles.mainBody}>
                            <View style={styles.ImageMain}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.image}
                                />
                            </View>
                            <View style={styles.progresBar}>
                                <LinearProgress
                                    style={{ height: vp(3), width: '100%', borderRadius: vp(5) }}
                                    variant="determinate"
                                    value={1}
                                    color={colors.white}
                                />
                            </View>
                        </View>
                    )
                    }
                />
                <View style={styles.rowMian}>
                    <View style={styles.search}>
                        <Input
                            placeholder='Send Message'
                            inputContainerStyle={styles.inputContainerStyle}
                            leftIcon={
                                <View style={styles.mesageIconMian}>
                                    < Icon
                                        type={IconsType.feather}
                                        name={Icons.camera}
                                        color={colors.textColor3}
                                        size={Dimension.large}
                                    />
                                </View>
                            }
                            style={styles.inputstyle}
                        />
                    </View>
                    <View style={styles.foucs}>
                        <Icon
                            type={IconsType.ionIcon}
                            name={Icons.mdPaperPlaneOutline}
                            color={colors.white}
                            size={Dimension.Large}
                        />
                    </View>
                    <View style={styles.foucs}>
                        <Icon
                            type={IconsType.entypo}
                            name={Icons.dotsThreeHorizontal}
                            color={colors.white}
                            size={Dimension.large}
                        />
                    </View>
                </View>
            </View>
            {modal ? (
                <VideoPlayerModal
                    open={modal}
                    close={() => setModal(false)}
                    onNavigate={''}
                />
            ) : null}
        </View>
    )
}
