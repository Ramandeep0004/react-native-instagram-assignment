import { Button, Header, Icon, Image } from '@rneui/themed';
import { View } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { styles } from './style';
import { Text, FlatList } from "react-native"
import { Icons, IconsType } from '../../assets/icons';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { CustomTab } from '../../components/customTab';




export const EditProfile = (props: any) => {


    return (
        <View style={styles.container}>
            <Header
                placement="center"
                containerStyle={styles.containerHaeder}
                style={styles.header}
                leftComponent={
                    <View>
                        <Text style={styles.cancel} onPress={() => props.navigation.goBack()}>Cancel</Text>
                    </View>
                }
                centerComponent={{ text: 'Edit Profile', style: styles.title }}
                rightComponent={
                    <View>
                        <Text style={styles.Done}>Done</Text>
                    </View>
                }
                statusBarProps={{
                    barStyle: 'dark-content',
                    backgroundColor: colors.white,
                    translucent: true
                }}
            />
            <View style={styles.body}>
                <View style={styles.imageMian}>
                    <View style={styles.imageContainer2}>
                        <Image
                            source={{ uri: 'https://plus.unsplash.com/premium_photo-1669122520187-2a2c721865b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.edittext}>
                    <Text style={styles.change}>Change profile photo</Text>
                </View>
                <View style={styles.detailOne}>
                    <View style={styles.row1}>
                        <View style={base.col4}>
                            <Text style={styles.name}>Name</Text>
                        </View>
                        <View style={[base.col8, {
                            alignItems: 'flex-start', borderBottomWidth: 0.3,
                            borderColor: colors.textColor4
                        }]}>
                            <Text style={styles.name} numberOfLines={4}>Jakob West</Text>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={base.col4}>
                            <Text style={styles.name} >Username</Text>
                        </View>
                        <View style={[base.col8, {
                            alignItems: 'flex-start', borderBottomWidth: 0.3,
                            borderColor: colors.textColor4
                        }]}>
                            <Text style={styles.name}>Jakob_W</Text>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={base.col4}>
                            <Text style={styles.name}>Website</Text>
                        </View>
                        <View style={[base.col8, {
                            alignItems: 'flex-start', borderBottomWidth: 0.3,
                            borderColor: colors.textColor4
                        }]}>
                            <Text style={styles.name}>www.instagram.com</Text>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={base.col4}>
                            <Text style={styles.name} numberOfLines={4}>Bio</Text>
                        </View>
                        <View style={[base.col8, { alignItems: 'flex-start' }]}>
                            <Text style={styles.name}>Digital goodies designer <Text style={styles.tag}>@Globiz Tech.</Text> Everything is designed.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.switch}>
                    <Text style={styles.Switchtxet}>Switch to Profesional Account</Text>
                </View>
                <View style={styles.detailOne}>
                    <View style={styles.row1}>
                        <View style={styles.private}>
                            <Text style={styles.privateInfo}>Private Information</Text>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={base.col4}>
                            <Text style={styles.name}>Email</Text>
                        </View>
                        <View style={[base.col8, {
                            alignItems: 'flex-start', borderBottomWidth: 0.3,
                            borderColor: colors.textColor4
                        }]}>
                            <Text style={styles.name}>jakobW@gmail.ocm</Text>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={base.col4}>
                            <Text style={styles.name}>Phone</Text>
                        </View>
                        <View style={[base.col8, {
                            alignItems: 'flex-start', borderBottomWidth: 0.3,
                            borderColor: colors.textColor4
                        }]}>
                            <Text style={styles.name}>+1 202 555 789</Text>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={base.col4}>
                            <Text style={styles.name}>Gender</Text>
                        </View>
                        <View style={[base.col8, { alignItems: 'flex-start' }]}>
                            <Text style={styles.name}>Male</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

}
