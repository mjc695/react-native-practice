import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ColorCounter = ({ color, colorVal, onIncrease, onDecrease }) => {
  return (
    <View>
      <Button
        title={`Increase ${color}`}
        onPress={onIncrease}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={onDecrease}
      />
      <Text>{color}: {colorVal}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter
