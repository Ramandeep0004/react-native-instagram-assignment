
import { Button, Icon, Image, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';




const Chat = () => {


    let list2 = [
        {
            name: 'Vamila_k',
            secondname: 'Chish Myke',
            count: 67,
            time: 'now',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 0,
            comment: 'Have a nice day!',

        },
        {
            name: 'Phillip_L',
            secondname: 'Chish Myke',
            count: 690,
            time: '15m',
            image: 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 1,
            comment: ' heard this is a good movie ',
        },
        {
            name: 'This Week',
            time: '1h',
            image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id: 2,
            comment: 'Thank you bro 😍',
        },
        {

            name: 'Latis_kariappa',
            secondname: 'mesoKK',
            count: 899,
            time: '2w',
            image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 4,
            comment: 'This i spreety Mmuch beetr',
        },
        {
            name: 'Famizl Ali',
            secondname: 'mesoKK',
            count: 77,
            time: '4w',
            image: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 6,
            comment: 'Sounds good 😂😂😂',
        },
        {
            name: 'Jassika_V',
            secondname: 'Waston_J',
            count: 559,
            time: '1m',
            image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 7,
            comment: 'Yup! am traving ',
        },
        {
            name: 'MMMpp_I',
            secondname: 'Waston_J',
            count: 559,
            time: '2m',
            image: 'https://images.unsplash.com/photo-1535368362808-e21d5f250bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHx1c2VyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 8,
            comment: 'Thank yo so muxh for asking thus is racky ifm',
        },
        {
            name: 'BHytyvv_K',
            secondname: 'MMMpp_I',
            count: 559,
            time: '6m',
            image: 'https://images.unsplash.com/photo-1523111343671-c0872e1ac556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHx1c2VyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 9,
            comment: 'Yoooooooooooo',
        },
    ]


    return (
        <View style={styles.conatainer}>
            <View style={styles.body}>
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
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={list2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(index, id) => (index, id)}
                    renderItem={({ item, index }) => (
                        <View style={[styles.newlist]}>
                            <View style={styles.newlistroW}>
                                <View style={styles.col2}>
                                    <View style={styles.imageMain}>
                                        <View style={styles.imageContainer}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={styles.image}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.col7}>
                                    <Text style={styles.nitifi1}>{item.name}</Text>
                                    <View style={styles.row}>
                                        <View style={styles.col9}>
                                            <Text style={styles.time} numberOfLines={1}>{item.comment}</Text>
                                        </View>
                                        <View style={[styles.col3, { alignItems: 'center' }]}>
                                            <Text style={styles.time}>. {item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.col1, { alignItems: 'flex-end' }]}>
                                    <Icon
                                        type={IconsType.simpleLineIcon}
                                        name={Icons.camera3}
                                        color={colors.textColor3}
                                        size={Dimension.Large}
                                    />
                                </View>
                            </View>
                        </View>
                    )
                    }
                />

            </View>
            <View style={styles.absulateBttom}>
                <View style={styles.main}>
                    <View style={[base.row, {alignItems : 'center'}]}>
                        <Icon
                            type={IconsType.fontisto}
                            name={Icons.cameraFull}
                            color={colors.sky}
                            size={Dimension.large}
                        />
                        <Text style={styles.Camera}>Camera</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}
export default Chat;
