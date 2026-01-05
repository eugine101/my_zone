import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import React from 'react'

import ImageBackgrounds from '../../assets/images/zone.png'
const Home = () => {
  return (
    <View>
      <ImageBackground
      source={ImageBackgrounds}
      style={styles.card}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Beautiful Place</Text>
      </View>
    </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    card: {
    height: 200,
    marginRight: 10,
    marginLeft:10,
    top:10,
    borderRadius: 16,
    overflow: 'hidden', // 🔥 very important
    marginBottom: 16,
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    color: 'purple',
    fontSize: 24,
    fontWeight: 'bolder',
  },
})