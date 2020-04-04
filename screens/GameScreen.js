import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default class GameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text>Main Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
