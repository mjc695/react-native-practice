import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>

      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        onPress={() => navigation.navigate('ImageScreen')}
        title='Go to Image Demo'
      />
      <Button
        onPress={() => navigation.navigate('CounterScreen')}
        title='Go to Counter Demo'
      />
      <Button
        onPress={() => navigation.navigate('ColorScreen')}
        title='Go to Color Demo'
      />
      <Button
        onPress={() => navigation.navigate('SquareScreen')}
        title='Go to Square Color Demo'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
