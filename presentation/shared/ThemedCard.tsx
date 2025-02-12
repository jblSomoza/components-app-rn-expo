import { View, Text, ViewProps } from 'react-native'
import React from 'react'

interface Props extends ViewProps {
    className?: string;
}

const ThemedCard = ({ className, children}: Props) => {
  return (
    <View
        className={`bg-white dark:bg-black/10 p-2 rounded-xl shadow shadow-black/5 ${className}`}
    >
      {children}
    </View>
  )
}

export default ThemedCard