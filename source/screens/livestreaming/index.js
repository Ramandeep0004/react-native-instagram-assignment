
import { Button } from '@rneui/themed';
import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { hp, hzp, vp, wp } from '../../assets/fontsize';
import axios from "axios";


const LiveStreaming = (props) => {
    const [playserver, setPlayserver] = useState("http://192.168.1.2/live/");
    const [pushserver, setPushserver] = useState("http://192.168.1.2/live/");
    const [stream, setStream] = useState("demo_295");

    const streamKey = '5b2a4a75-86c2-177c-72a2-45ab2b5e2583';
    const url = `rtmps://global-live.mux.com:443/app/${streamKey}`;


    const handleStream = async () => {
        console.log('---------------------------------->>>>>>>>>>>>>>>>>>>>');

        var postData = {
            "playback_policy": [
                "public"
            ],
            "new_asset_settings": {
                "playback_policy": [
                    "public"
                ]
            }
        };

        let axiosConfig = {
            headers: {
                "Authorization": "Basic 507f2a48-413d-4d62-8631-1da471378594",
                "Host": "global-live.mux.com",
            }
        };

        axios.post('https://api.mux.com/video/v1/live-streams', postData, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    };




    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                padding: 24,
                backgroundColor: "orange",
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    color: "#fff",
                    fontSize: 25,
                    marginBottom: 150,
                }}
            >
                {"React Native\nLive Stream Video example"}
            </Text>
            <Text style={{ color: "#fff", fontSize: 18 }}>
                Please enter a stream name.
            </Text>
            <View
                style={{
                    borderWidth: 1,
                    borderColor: "blue",
                    marginTop: 20,
                    marginBottom: 100,
                }}
            >
                <TextInput
                    style={{ color: "#fff", height: 40 }}
                    placeholder="Write stream name here"
                    placeholderTextColor="#555"
                    value={stream}
                    onChangeText={(stream) => setStream(stream)}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    onPress={() =>
                        props.navigation.navigate("liveUserScreen", {
                            playserver: playserver,
                            stream: stream,
                        })
                    }
                    title="Join Stream"
                    buttonStyle={{
                        borderRadius: wp(5),
                        paddingVertical: vp(18),
                        paddingHorizontal: hzp(18),
                        backgroundColor: '#3797EF',
                    }}
                    containerStyle={{
                        width: hp(150),
                        borderRadius: wp(10),
                        marginHorizontal: hp(15),
                        shadowRadius: 5,
                        // borderRadius: 12,
                        // height: hp(60),
                        elevation: 5,
                        shadowOpacity: 0.5,
                        shadowColor: '#000',
                        justifyContent: 'center',
                        shadowOffset: { width: 0, height: 5 },
                    }}
                />
                <Button
                    onPress={() =>

                        handleStream()
                        // props.navigation.navigate("streamContent", {
                        //     pushserver: pushserver,
                        //     stream: stream,
                        // })
                    }
                    title="Stream a Video"
                    buttonStyle={{
                        borderRadius: wp(5),
                        paddingVertical: vp(18),
                        paddingHorizontal: hzp(18),
                        backgroundColor: '#3797EF',
                    }}
                    containerStyle={{
                        width: hp(150),
                        borderRadius: wp(10),
                        marginHorizontal: hp(15),
                        shadowRadius: 5,
                        // borderRadius: 12,
                        // height: hp(60),
                        elevation: 5,
                        shadowOpacity: 0.5,
                        shadowColor: '#000',
                        justifyContent: 'center',
                        shadowOffset: { width: 0, height: 5 },
                    }}
                />
            </View>
        </View>
    );
};

export default LiveStreaming;