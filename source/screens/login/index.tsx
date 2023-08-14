import { Button, Icon, Image, Input, Slider } from '@rneui/themed';
import { Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';
import { styles } from './style';




export const LoginMain = (props: any) => {


    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.MainTittle}>
                    <Text style={styles.header}>Instagram</Text>
                </View>
                <View style={styles.profilecontainer}>
                    <View style={styles.profileMian}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1494515740382-c1c0585affeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxwbGFudCUyMGluJTIwdGhlJTIwcG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                                style={styles.image}
                            />
                        </View>
                        <Text style={styles.name}>Hary Kang</Text>
                    </View>
                </View>
                <View style={styles.buttncontainer}>
                    <Button
                        title={'Log in'}
                        titleStyle={styles.titleStyle}
                        buttonStyle={styles.buttonStyle}
                        onPress={() => props.navigation.navigate('LoginScreen')}
                    />
                </View>
                <View style={styles.switchAccount}>
                    <Text style={styles.switchACC}>Switch accounts</Text>
                </View>
            </View>
            <View style={styles.accountMian}>
                <Text style={styles.account}>Don't have an account ? <Text style={styles.signU}> Sign up</Text> </Text>
            </View>
        </View>
    )

}
