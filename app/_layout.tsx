import { useEffect } from "react";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import "../global.css";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import { allRoutes } from "@/constants/Routes";
import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: { flex: 1, backgroundColor },
            headerStyle: { backgroundColor },
          }}
        >
          <Stack.Screen name="index" options={{ title: "" }} />
          {allRoutes.map((route, index) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes('Slides'),
              }}
            />
          ))}
        </Stack>
        </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
