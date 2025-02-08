import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { Animated, Easing, View } from "react-native";

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => animatedTop.setValue(-100));
  };

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />

      <ThemedButton onPress={fadeIn} className="my-5 ">
        Fade In
      </ThemedButton>

      <ThemedButton className="my-5" onPress={fadeOut}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
