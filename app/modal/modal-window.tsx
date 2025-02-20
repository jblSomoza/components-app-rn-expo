import { View, Text } from 'react-native'
import React from 'react'
import ThemedView from '@/presentation/shared/ThemedView'
import ThemedText from '@/presentation/shared/ThemedText'

const ModalScreen = () => {
  return (
    <ThemedView className='justify-center items-center flex-1' bgColor='#A52182'>
      <ThemedText type='normal'>Modal</ThemedText>
    </ThemedView>
  )
}

export default ModalScreen