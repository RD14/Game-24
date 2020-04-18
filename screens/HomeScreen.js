import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Game24!</Text>
      <Text styles={styles.stars}>🌟🌟🌟🌟 </Text>
      <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('GameScreen')}>
      <Text style={styles.gameText}>Go To Game!</Text>
      </TouchableOpacity>
    </View>
  );
}

// We need this when using a custom font
const fontFamilyPicker = Platform.select({
  android: { fontFamily: 'Roboto' },
  web: { fontFamily: './assets/fonts/Roboto' }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
  },
  gameText: {
    fontSize:30,
  
  },
  titleText: {
   // backgroundColor:'green',
    fontSize: 40,
  },
  gameButton: {
    width: 220,
    height: 45,
    textAllign:'center',
    backgroundColor: "gold",
    borderRadius: 6,
  },
  stars:{

  }
});
