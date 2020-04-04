import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Game24!</Text>
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
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
});
