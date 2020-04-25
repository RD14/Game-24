import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, YellowBox } from 'react-native';
import Cards from '../constants/Cards';

export default class GameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      card1: 1,
      card2: 2,
      card3: 3,
      card4: 4,
    };

    this.changeNumbers = this.changeNumbers.bind(this);

    setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
      if(this.state.seconds===60){
        this.setState({seconds:0});
        this.setState({minutes:this.state.minutes+1});
      }
    }, 1000); 
  } 

  componentDidMount() {
    this.changeNumbers();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.mainmenuBtn} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text>Main Menu</Text>
        </TouchableOpacity>
    <Text style={styles.timerText}>{this.state.minutes}m {this.state.seconds}s</Text>

    <View style={styles.cardRow}>
      <Text style={styles.cardNumber}>{this.state.card1}</Text>
      <View style={styles.numberSpacer}></View>
      <Text style={styles.cardNumber}>{this.state.card2}</Text>
    </View>
    <View style={styles.cardRow}>
      <Text style={styles.cardNumber}>{this.state.card3}</Text>
      <View style={styles.numberSpacer}></View>
      <Text style={styles.cardNumber}>{this.state.card4}</Text>
    </View>

    <TouchableOpacity style={styles.newNumberBtn} onPress={this.changeNumbers}>
          <Text style={styles.newNumberText}>New Numbers</Text>
        </TouchableOpacity>

      </View>
    );
  }

  changeNumbers() {
    let newNumbers = Cards.all[Math.floor(Math.random()* Cards.all.length)];
    this.setState({
      card1: newNumbers[0],
      card2: newNumbers[1],
      card3: newNumbers[2],
      card4: newNumbers[3 ],
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    alignItems: 'center',
  },
  mainmenuBtn: {
    width:90,
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

  },
  newNumberBtn: {
    backgroundColor: 'teal',
    borderRadius: 6,
  },
  newNumberText: {
    fontSize: 38,
    color: 'black',
  },
  numberSpacer: {
    width:50,
  }
});
