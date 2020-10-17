import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, FlatList } from 'react-native'

const ColorScreen = () => {

  const [colors, setColors] = useState([])

  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      {/*
      Using a FlatList is much better and a key extractor makes it much easier
          {colors.map((colorBlock, key) => {
        return <View key={key} style={{ height: 100, width: 100, backgroundColor: colorBlock }} />
      })} */}
      <FlatList
        keyExtractor={(item) => item}
        data={colors} // takes an Array
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />
        }}
      />
      {/* <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} /> */}
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({})

export default ColorScreen
