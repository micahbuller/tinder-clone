import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";


const SenderMessage = ({ message }) => {
  return (
    <View
      style={[
        tw("bg-purple-600 rounded-lg rounded-tr-none mx-3 px-5 py-3 ml-14 my-2"),
        { alignSelf: "flex-start", marginLeft: "auto" },
      ]}
    >
      <Text style={tw("text-white")}>{message.message}</Text>
    </View>
  );
};

export default SenderMessage;
