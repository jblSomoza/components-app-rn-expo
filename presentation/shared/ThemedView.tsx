import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safeArea?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  style,
  className,
  margin = false,
  safeArea = false,
  bgColor,
  children,
}: Props) => {
  const background = bgColor ?? useThemeColor({}, "background");
  const safeAreaStyle = useSafeAreaInsets();

  return (
    <View
      style={[
        {
            backgroundColor: background,
            flex: 1,
            paddingTop: safeArea ? safeAreaStyle.top : 0,
            marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
