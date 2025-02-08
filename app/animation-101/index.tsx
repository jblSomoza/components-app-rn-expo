import ThemedButton from '@/presentation/shared/ThemedButton';
import { View, Text } from 'react-native';

const Animation101Screen = () => {
  return (
    <View>
      <Text>Animation101Screen</Text>
        <ThemedButton
          onPress={() => {
            console.log('Button pressed');
          }}
          className='mb-5'
        >
          Fade In
        </ThemedButton>

        <ThemedButton className='mb-5'>
          Fade Out
        </ThemedButton>

    </View>
  );
};
export default Animation101Screen;
