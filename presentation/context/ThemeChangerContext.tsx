import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;

    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemeChangerContext = createContext<ThemeChangerContextType>({} as ThemeChangerContextType);

export const useThemeChangerContext = () => {
    const themeChanger = useContext(ThemeChangerContext);

    return themeChanger;
}

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

    const currentTheme = isSystemThemeEnabled ? colorScheme : isDarkMode ? 'dark' : 'light';

    const backgroundColor = isDarkMode ? DarkTheme.colors.background : DefaultTheme.colors.background;

    useEffect(() => {
      AsyncStorage.getItem('theme').then((theme) => {
        if (!theme) return;

        setIsDarkMode(theme === 'dark');
        setIsSystemThemeEnabled(theme === 'system');
        setColorScheme(theme as 'light' | 'dark' | 'system');
      });
    }, [])

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    isSystemTheme: isSystemThemeEnabled,
                    toggleTheme: async() => {
                        setColorScheme(isDarkMode ? 'light' : 'dark');
                        setIsDarkMode(!isDarkMode);

                        await AsyncStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
                    },
                    setSystemTheme: async() => {
                        setIsSystemThemeEnabled(!isSystemThemeEnabled);
                        setColorScheme('system');
                        await AsyncStorage.setItem('selected-item', 'system');
                    }
                }}
            >
                {children}
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}