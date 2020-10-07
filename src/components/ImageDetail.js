import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ImageDetail = ({ title, imageSource }) => {
  console.log(title, imageSource)
  return (
    <View>
      <Image
        source={imageSource}
      />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageDetail
