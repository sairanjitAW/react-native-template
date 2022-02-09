import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <Text>React native</Text>
    </View>
  )
}

export default App
