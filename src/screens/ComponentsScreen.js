import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.greeting}>Getting started with react native! </Text>
      <Text style={styles.name}>My name is Monferd</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  }
})

export default ComponentsScreen
