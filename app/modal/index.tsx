import ThemedView from '@/presentation/shared/ThemedView';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href={'/modal/modal-window'} className='mx-4'>
        <Text className='text-light-text dark:text-dark-text my-2 text-xl'>Open Modal</Text>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
