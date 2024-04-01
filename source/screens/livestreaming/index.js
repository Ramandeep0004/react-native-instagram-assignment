
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import axios from "axios";
import { styles } from './style';


const LiveStreaming = (props) => {
    const [playserver, setPlayserver] = useState("http://192.168.1.2/live/");
    const [pushserver, setPushserver] = useState("http://192.168.1.2/live/");
    const [stream, setStream] = useState("demo_295");

    const streamKey = '5b2a4a75-86c2-177c-72a2-45ab2b5e2583';
    const url = `rtmps://global-live.mux.com:443/app/${streamKey}`;


    const handleStream = async () => {
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
        <View style={styles.constainer} >
            <StatusBar
                backgroundColor={"transparent"}
            />
            <Text style={styles.textStyle} >
                {"React Native\nLive Stream Video example"}
            </Text>
            <Text style={styles.textStyle1}>
                Please enter a stream name.
            </Text>
            <View style={styles.textInput}>
                <TextInput
                    style={{ color: "#fff", height: 40 }}
                    placeholder="Write stream name here"
                    placeholderTextColor="#555"
                    value={stream}
                    onChangeText={(stream) => setStream(stream)}
                />
            </View>
            <View style={styles.buttonMain} >
                <Button
                    onPress={() =>
                        props.navigation.navigate("liveUserScreen", {
                            playserver: playserver,
                            stream: stream,
                        })
                    }
                    title="Join Stream"
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.buttoncontainerStyle}
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
                    buttonStyle={styles.buttonStyle2}
                    containerStyle={styles.buttonContainerStyle}
                />
            </View>
        </View>
    );
};

export default LiveStreaming;