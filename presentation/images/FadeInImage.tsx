import {
  View,
  Text,
  ActivityIndicator,
  StyleProp,
  Image,
  ImageStyle,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { useAnimation } from "@/hooks/useAnimation";

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: FadeInImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={{
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {isLoading &&
          <ActivityIndicator size="large" color="#ccc" style={{ position: 'absolute' }} />
        }

      <Animated.Image source={{ uri }} style={[style, {opacity: animatedOpacity}]} onLoadEnd={() => {
        fadeIn({ duration: 1000 });
        setIsLoading(false);
      }} />
    </View>
  );
};

export default FadeInImage;
