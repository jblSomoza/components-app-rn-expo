import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const Switches = () => {
  const [state, setState] = useState({
    isActive: false,
    isHundry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        <ThemedSwitch
          text='Active'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-2'
        />

        <ThemedSwitch
          text='Hungry'
          value={state.isHundry}
          onValueChange={(value) => setState({ ...state, isHundry: value })}
          className='mb-2'
        />

        <ThemedSwitch
          text='Happy'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-2'
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
