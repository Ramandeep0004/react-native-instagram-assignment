
import { Button, Icon, Image } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { CustomTab } from '../../components/customTab';
import { styles } from './style';




const LikesScreen = () => {
    const [tab, setTab] = useState('you')

    let list = [
        {
            tittle: 'New',
            data: [
                {
                    name: 'New',
                    image: 'https://images.unsplash.com/photo-1679829040916-5df2c824ad84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                    id: 0,
                    messageSatus: 0,
                    notification: 0,
                    image2: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                }
            ]
        },
        {
            tittle: 'Today',
            data: [
                {
                    name: 'Today',
                    image: 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    secondImage: 'https://images.unsplash.com/photo-1653379671837-224a212bf5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: 1,
                    messageSatus: 0,
                    notification: 0,
                    image2: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                }
            ]
        },
        {
            tittle: 'This Week',
            data: [
                {
                    name: 'This Week',
                    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    id: 2,
                    messageSatus: 0,
                    notification: 1,
                    image2: 'https://images.unsplash.com/photo-1603005901058-02e1cfc65270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600'
                },
                {
                    name: 'This Week',
                    image: 'https://images.unsplash.com/photo-1528271537-64e11fc31bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    id: 3,
                    messageSatus: 1,
                    notification: 2,
                    image2: 'https://images.unsplash.com/photo-1603005901058-02e1cfc65270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600'
                }
            ]
        },
        {
            tittle: 'This Month',
            data: [
                {
                    name: 'This Month',
                    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    id: 4,
                    messageSatus: 0,
                    notification: 3,
                    image2: 'https://images.unsplash.com/photo-1632333528660-f0bed1510411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                }
            ]
        }
    ]

    let list2 = [
        {
            name: 'Vamila_k',
            secondname: 'Chish Myke',
            count: 67,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 0,
            messageSatus: 0,
            notification: 0,
            comment: 0,
            multiple: true,
            follow: 0,
            image2: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imagees: [
                {
                    path: 'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://images.unsplash.com/photo-1631793945537-b8a496b97edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://plus.unsplash.com/premium_photo-1661819730738-eec3bf1fcf3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
            ]
        },
        {
            name: 'Phillip_L',
            secondname: 'Chish Myke',
            count: 690,
            image: 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            secondImage: 'https://images.unsplash.com/photo-1598207951491-255eaf139751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 1,
            messageSatus: 0,
            notification: 1,
            comment: 0,
            follow: 0,
            multiple: false,
            image2: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            name: 'This Week',
            image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id: 2,
            messageSatus: 0,
            notification: 0,
            comment: 0,
            follow: 1,
            multiple: false,
            image2: 'https://images.unsplash.com/photo-1603005901058-02e1cfc65270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600'

        },
        {

            name: 'Latis_kariappa',
            secondname: 'mesoKK',
            count: 899,
            image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 4,
            messageSatus: 0,
            notification: 0,
            comment: 0,
            follow: 0,
            multiple: true,
            imagees: [
                {
                    path: 'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://images.unsplash.com/photo-1631793945537-b8a496b97edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://plus.unsplash.com/premium_photo-1661819730738-eec3bf1fcf3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://images.unsplash.com/photo-1579538506280-84e461ad0077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://plus.unsplash.com/premium_photo-1664304480311-c31d523a5a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    path: 'https://images.unsplash.com/photo-1621232082074-1a7750ecc557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                },
            ]

        },
        {
            name: 'Famizl Ali',
            secondname: 'mesoKK',
            count: 77,
            image: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            secondImage: 'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 6,
            messageSatus: 0,
            notification: 1,
            follow: 0,
            comment: 0,
            multiple: false,
            image2: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

        },
        {
            name: 'Jassika_V',
            secondname: 'Waston_J',
            count: 559,
            image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            secondImage: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 7,
            messageSatus: 0,
            notification: 1,
            follow: 0,
            comment: 0,
            multiple: false,
            image2: 'https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            name: 'MMMpp_I',
            secondname: 'Waston_J',
            count: 559,
            image: 'https://images.unsplash.com/photo-1535368362808-e21d5f250bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHx1c2VyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            secondImage: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 8,
            messageSatus: 0,
            notification: 0,
            follow: 0,
            comment: 1,
            commeT: 'Good job Man👍',
            multiple: false,
            image2: 'https://images.unsplash.com/photo-1524154217857-45f012d0f167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            name: 'BHytyvv_K',
            secondname: 'MMMpp_I',
            count: 559,
            image: 'https://images.unsplash.com/photo-1523111343671-c0872e1ac556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHx1c2VyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            secondImage: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 9,
            messageSatus: 0,
            notification: 0,
            commeT: 'Nice!',
            follow: 0,
            comment: 1,
            multiple: false,
            image2: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx1c2VyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
    ]


    const renderItem = ({ section, index }) => {
        return (
            <FlatList
                contentContainerStyle={styles.flat}
                data={section.data}
                showsHorizontalScrollIndicator={false}
                // keyExtractor={(index, id) => ( index, id)}
                renderItem={({ item, index }) => (
                    <View style={styles.newlist}>
                        <View style={[styles.newlistroW, item.notification === 1 ? '' : { alignItems: 'center' }]}>
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
                                {
                                    item.name === 'New' ?
                                        <Text style={styles.notifi}><Text style={styles.nitifi1}>Harry_k</Text> liked your photo. <Text style={styles.time}>1h</Text></Text>
                                        :
                                        item.name === 'Today' ?
                                            <Text style={styles.notifi}><Text style={styles.nitifi1}>Harry_k, Zinfa</Text> and <Text style={styles.nitifi1}>278 others</Text>  liked your photo. <Text style={styles.time}>3h</Text></Text>
                                            :
                                            item.name === 'This Week' && item.notification === 2 ?
                                                <Text style={styles.notifi}><Text style={styles.nitifi1}>Jinfa_M</Text> stated following you<Text style={styles.time}> 2</Text></Text>
                                                :
                                                item.name === 'This Week' && item.notification === 1 ?
                                                    <View>
                                                        <Text style={styles.notifi}><Text style={styles.nitifi1}>Mary Hnah</Text> mentened you in a comment : <Text style={styles.tag}>@hardeep </Text>It's you 😂<Text style={styles.time}> 5d</Text></Text>
                                                        <View style={styles.row}>
                                                            <Icon
                                                                type={IconsType.antDesign}
                                                                name={Icons.hearto}
                                                                color={colors.textColor3}
                                                                size={Dimension.docicon}
                                                            />
                                                            <Text style={styles.rply}>Reply</Text>
                                                        </View>
                                                    </View>
                                                    :
                                                    item.name === 'This Month' && item.notification === 3 ?
                                                        <Text style={styles.notifi}><Text style={styles.nitifi1}>Mary Hnah</Text> started following you. <Text style={styles.time}>2w</Text></Text>
                                                        :
                                                        null

                                }
                            </View>
                            <View style={[styles.col3, { alignItems: 'flex-end' }]}>
                                {
                                    item.messageSatus === 1 ?
                                        <View style={styles.message}>
                                            <Button
                                                title={'Message'}
                                                buttonStyle={styles.buttonStyle}
                                                titleStyle={styles.titleStyle}
                                                containerStyle={styles.containerStyle}
                                            />
                                        </View>
                                        :
                                        item.notification === 3 ?
                                            <View style={styles.message}>
                                                <Button
                                                    title={'Follow'}
                                                    buttonStyle={styles.buttonStyle2}
                                                    titleStyle={styles.titleStyle2}
                                                    containerStyle={styles.containerStyle}
                                                />
                                            </View>
                                            :
                                            <View style={styles.imageContainer2}>
                                                <Image
                                                    source={{ uri: item.image2 }}
                                                    style={styles.image}
                                                />
                                            </View>
                                }
                            </View>
                        </View>
                        {
                            item.secondImage ?
                                <View style={styles.absulateImage}>
                                    <View style={styles.imageMain3}>
                                        <View style={styles.imageContainer3}>
                                            <Image
                                                source={{ uri: item.secondImage }}
                                                style={styles.image}
                                            />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                    </View>
                )
                }
            />
        )
    }

    return (
        <View style={styles.conatainer}>
            <View style={styles.body}>
                <CustomTab
                    text1={'Following'}
                    text2={'You'}
                    value={tab}
                    onSelect={(value) => setTab(value)}
                />
                {
                    tab === 'you' ?
                        <View style={styles.mianBody}>
                            <View style={styles.followeRequests}>
                                <Text style={styles.text2}>Follow Requests</Text>
                            </View>

                            <SectionList
                                sections={list}
                                style={styles.sectionList}
                                contentContainerStyle={{
                                    flexGrow: 1,
                                    paddingBottom: hp(190)
                                }}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                                renderSectionHeader={({ section }) => {
                                    if (section.data.length > 0) {
                                        return (
                                            <View>
                                                {
                                                    section.tittle === 'This Week' || section.tittle === 'This Month' || section.tittle === 'Today' ?
                                                        <Text style={styles.header}>{section.tittle}</Text>
                                                        :
                                                        <Text style={styles.header2}>{section.tittle}</Text>
                                                }
                                            </View>
                                        );
                                    } else null;
                                }}
                                renderItem={renderItem}
                            />
                        </View>
                        :
                        <View style={styles.list2}>
                            <FlatList
                                contentContainerStyle={styles.flat}
                                data={list2}
                                showsHorizontalScrollIndicator={false}
                                // keyExtractor={(index, id) => ( index, id)}
                                renderItem={({ item, index }) => (
                                    <View style={[styles.newlist, { marginVertical: hp(10) }]}>
                                        <View style={[styles.newlistroW, { alignItems: 'flex-start' }]}>
                                            <View style={styles.col2}>
                                                <View style={styles.imageMain}>
                                                    {
                                                        item.comment === 1 ?
                                                            <LinearGradient
                                                                colors={[colors.darkPurple, colors.yellow]}
                                                                style={styles.LinetStyle}
                                                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                                            >
                                                                <View style={styles.imageContainer}>
                                                                    <Image
                                                                        source={{ uri: item.image }}
                                                                        style={styles.image}
                                                                    />
                                                                </View>
                                                            </LinearGradient>
                                                            :
                                                            <View style={styles.imageContainer}>
                                                                <Image
                                                                    source={{ uri: item.image }}
                                                                    style={styles.image}
                                                                />
                                                            </View>
                                                    }
                                                </View>
                                            </View>
                                            <View style={styles.col7}>
                                                {
                                                    item.multiple ?
                                                        <>
                                                            <Text style={styles.notifi}><Text style={styles.nitifi1}>{item.name}</Text> liked {item.imagees.length} posts. <Text style={styles.time}>3h</Text></Text>
                                                            <View style={[styles.row1]}>
                                                                {item.imagees.map((data, i) => {
                                                                    return (
                                                                        <View key={i} style={[styles.imageContainer2, { marginRight: hp(5), marginVertical: hp(2) }]}>
                                                                            <Image
                                                                                source={{ uri: data.path }}
                                                                                style={styles.image}
                                                                            />
                                                                        </View>
                                                                    )
                                                                })}

                                                            </View>
                                                        </>

                                                        :
                                                        item.notification === 1 ?
                                                            <Text style={styles.notifi}><Text style={styles.nitifi1}>{item.name}, {item.secondname}</Text> and <Text style={styles.nitifi1}>{item.count} others</Text> liked your photo. <Text style={styles.time}>3h</Text></Text>
                                                            :
                                                            item.follow === 1 ?
                                                                <Text style={styles.notifi}><Text style={styles.nitifi1}>Jinfa_M</Text> stated following you<Text style={styles.time}> 2</Text></Text>
                                                                :
                                                                item.comment === 1 ?
                                                                    <View>
                                                                        <Text style={styles.notifi}><Text style={styles.nitifi1}>{item.name}</Text> mentened you in a comment : <Text style={styles.tag}>@jacob_w </Text>{item.commeT}<Text style={styles.time}> 5d</Text></Text>

                                                                    </View>
                                                                    :
                                                                    //             item.name === 'This Month' && item.notification === 3 ?
                                                                    //                 <Text style={styles.notifi}><Text style={styles.nitifi1}>Mary Hnah</Text> started following you. <Text style={styles.time}>2w</Text></Text>
                                                                    //                 :
                                                                    null

                                                }
                                            </View>
                                            <View style={[styles.col3, { alignItems: 'flex-end' }]}>
                                                {
                                                    item.multiple === false && item.notification === 1 || item.comment === 1 ?
                                                        <View style={styles.imageContainer2}>
                                                            <Image
                                                                source={{ uri: item.image2 }}
                                                                style={styles.image}
                                                            />
                                                        </View>
                                                        :
                                                        null
                                                }
                                            </View>
                                        </View>
                                        {
                                            item.notification === 1 ?
                                                <View style={styles.absulateImage}>
                                                    <View style={styles.imageMain3}>
                                                        <View style={styles.imageContainer3}>
                                                            <Image
                                                                source={{ uri: item.secondImage }}
                                                                style={styles.image}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                                :
                                                null
                                        }
                                    </View>
                                )
                                }
                            />
                        </View>
                }
            </View>
        </View>
    );
}
export default LikesScreen;
