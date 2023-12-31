
import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import { NodePlayerView } from "react-native-nodemediaclient";



const LiveUserStream = (props) => {
  const [playerRef, setPlayerRef] = useState(null);

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
    };
  }, []);


  console.log(playerRef, '.................................playerRef user view screeen ');
  return (
    <View style={{ flex: 1 }}>
      <NodePlayerView
        style={{ flex: 1, backgroundColor: "#333" }}
        ref={(vp) => {
          setPlayerRef(vp);
        }}
        inputUrl={props.route.params.playserver + props.route.params.stream}
        scaleMode={"ScaleAspectFill"}
        bufferTime={300}
        maxBufferTime={1000}
        autoplay={true}
        onStatus={(code, msg) => {
          console.log("onStatus------> " + code + " msg=------> " + msg,  '-----------------------------> at user live view screen');
        }}
      />

      <Button
        onPress={() => {
          props.navigation.goBack();
        }}
        title="Back"
      />
    </View>
  );
};

export default LiveUserStream;