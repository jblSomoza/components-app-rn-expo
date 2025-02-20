import { View, Text, Platform } from 'react-native'
import React from 'react'
import ThemedView from '@/presentation/shared/ThemedView'
import ThemedText from '@/presentation/shared/ThemedText'
import { StatusBar } from 'expo-status-bar'
import ThemedButton from '@/presentation/shared/ThemedButton'
import { router } from 'expo-router'

const ModalScreen = () => {
  return (
    <ThemedView className='justify-center items-center flex-1' bgColor='#A52182'>
      <ThemedText type='normal'>Otro Modal</ThemedText>

      <ThemedButton
        onPress={() => { router.dismiss(); }}
        className='my-4 mx-4'
      >
        Cerrra
      </ThemedButton>

      <StatusBar style={ Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  )
}

export default ModalScreen