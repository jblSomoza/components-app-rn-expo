import { useState } from 'react';

import { useColorScheme } from "nativewind";

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';

const ThemesScreen = () => {

  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === 'dark',
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? 'dark' : 'light');

    setDarkModeSettings({
      ...darkModeSettings,
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    setDarkModeSettings({
      ...darkModeSettings,
      systemMode: value,
      darkMode: value ? colorScheme === 'dark' : darkModeSettings.darkMode,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard>
        <ThemedSwitch
          text='Dark Mode'
          className='mb-5'
          value={darkModeSettings.darkMode}
          onValueChange={ setDarkMode }
        />

        <ThemedSwitch
          text='System Mode'
          value={darkModeSettings.systemMode}
          onValueChange={ setSystemMode }
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
