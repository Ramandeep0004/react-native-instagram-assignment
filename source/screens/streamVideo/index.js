
import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import { NodeCameraView } from "react-native-nodemediaclient";



const StreamContent = (props) => {
  const [playerRef, setPlayerRef] = useState(null);

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
    };
  }, []);


  console.log(playerRef, '..................................liveStreaming ref');
  return (
    <View style={{ flex: 1, backgroundColor: "#333" }}>
      <NodeCameraView
        style={{ flex: 1 }}
        ref={(vb) => setPlayerRef(vb) }
        outputUrl={props.route.params.pushserver + props.route.params.stream}
        camera={{ cameraId: 1, cameraFrontMirror: true }}
        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
        video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
        autopreview={true}
        onStatus={(code, msg) => {
          console.log("onStatus=-----> " + code + " msg=-------> " + msg, '-----------------------------> at live stream screen');
        }}
      />
      <View>
        <Button
          onPress={() => {
            playerRef.switchCamera();
          }}
          color="red"
          title="Reverse Camera"
        />
        <Button
          onPress={() => {
            playerRef.start();
          }}
          color="green"
          title="Publish"
        />
        <Button
          onPress={() => {
            props.navigation.goBack();
          }}
          title="Back"
        />
      </View>
    </View>
  );
};

export default StreamContent;