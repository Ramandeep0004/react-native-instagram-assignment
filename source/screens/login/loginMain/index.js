import { Button, Icon, Input } from '@rneui/themed';
import { Text, StatusBar, Platform } from 'react-native';
import { View } from 'react-native-ui-lib';
import { base } from '../../../assets/base';
import { colors } from '../../../assets/colors';
import { Dimension } from '../../../assets/dimension';
import { Icons, IconsType } from '../../../assets/icons';
import { styles } from './style';


export const LoginScreen = (props) => {
    return (
        <View>
            <StatusBar
                translucent={true}
                backgroundColor={colors.white}
                barStyle={Platform.OS === 'ios' ? 'default' : 'dark-content'}
            />
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.MainTittle}>
                        <Text style={styles.header}>Instagram</Text>
                    </View>
                    <View style={styles.profilecontainer}>
                        <Input
                            placeholder='Name'
                        />
                        <Input
                            placeholder='Password'
                        />
                        <View style={styles.forgetPasword}>
                            <View style={base.col6}>
                            </View>
                            <View style={[base.col6, { alignItems: 'flex-end' }]}>
                                <Text style={styles.forgetPass}>Forgot password ?</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttncontainer}>
                        <Button
                            title={'Log in'}
                            titleStyle={styles.titleStyle}
                            buttonStyle={styles.buttonStyle}
                            onPress={() => props.navigation.navigate('bottomContainer')}
                        />
                    </View>
                    <View style={styles.switchAccount}>
                        <View style={styles.icnMian}>
                            <Icon
                                type={IconsType.fontAwesome}
                                name={Icons.facebook}
                                color={colors.white}
                                size={Dimension.Medium}
                            />
                        </View>
                        <Text style={styles.switchACC}>Log in with facebook</Text>
                    </View>
                    <View style={styles.OrMain}>
                        <Text style={styles.Or}>OR</Text>
                    </View>
                    <View style={styles.accountMian}>
                        <Text style={styles.account}>Don't have an account ? <Text style={styles.signU}> Sign up</Text> </Text>
                    </View>
                </View>
                <View style={styles.bottomTag}>
                    <Text style={styles.bottomTagtext}>Instagram or Facebook</Text>
                </View>
            </View>
        </View>
    )
};
