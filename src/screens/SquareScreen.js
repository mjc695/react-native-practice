import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 10

const SquareScreen = () => {

  const [red, setRed] = useState(200)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const setColor = (color, increment) => {
    switch (color) {
      case 'red':
        red + increment > 255 || red + increment < 0 ? null :
          setRed(red + increment)
        return;
      case 'green':
        green + increment > 255 || green + increment < 0 ? null :
          setGreen(green + increment)
        return;
      case 'blue':
        blue + increment > 255 || blue + increment < 0 ? null :
          setBlue(blue + increment)
        return;
    }
  }

  return (
    <View>
      <Text>
        Square
      </Text>
      <ColorCounter
        color='Red'
        colorVal={red}
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        colorVal={green}
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', - 1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        colorVal={blue}
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />

      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green}, ${blue})` }} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
