import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, YellowBox } from 'react-native';
import Cards from '../constants/Cards';

export default class GameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000); 
  } 
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.mainmenuBtn} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text>Main Menu</Text>
        </TouchableOpacity>
    <Text style={styles.timerText}>Seconds Elapsed: {this.state.time}</Text>

    <View style={styles.cardRow}>
      <Text style={styles.cardNumber}>1</Text>
      <Text style={styles.cardNumber}>2</Text>
    </View>
    <View style={styles.cardRow}>
      <Text style={styles.cardNumber}>3</Text>
      <Text style={styles.cardNumber}>4</Text>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    alignItems: 'center',
  },
  mainmenuBtn: {
    width:80,
    height: 25,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 32,
   color: 'white',
  },
  cardRow: {
    flexDirection: 'row',
    paddingTop: 50,
  },
  cardNumber:{
    fontSize: 62,
    color: 'white',
    paddingLeft: 40,
  }
});
