import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calcula o número de caracteres nas palavras digitadas!</Text>
        <TextInput style={styles.input} placeholder="Digite aqui para calcular!" onChangeText={(text) => this.setState({text})}/>
        <Text style={styles.text}>
          {this.state.text.split(' ').map((word) => word && word.length).join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  input: {
    height: 60,
    padding: 10,
    fontSize: 20,
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
  title: {
    paddingBottom: 20,
    fontSize: 16,
    alignSelf: 'center',
  }
});
