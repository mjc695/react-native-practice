import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {

  const [counter, setCounter] = useState(0) // using the 0 inside to set initial value as 0

  return (
    <View>
      <Button title='Increase'
        onPress={() => setCounter(counter + 1)}
      />
      <Button title='Decrease'
        onPress={() => setCounter(counter - 1)}
      />
      <Text>Current Count: {counter} </Text>
    </View>
  )
}

const style = StyleSheet.create({})

export default CounterScreen
