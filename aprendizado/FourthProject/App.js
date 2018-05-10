import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video} from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class App extends React.Component {
  state = {
    mute: false,
    shouldPlay: true,
  }

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
       shouldPlay: !prevState.shouldPlay
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }

  render() {
    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Reac Native Video Player</Text>
        <Video
          source={{ uri:'http://convenios.physisbrasil.com.br/esicar/layout/assets/vd/123.mp4' }}
          shouldPlay
          resizeMode="cover"
          style={{ width, height: 300 }}
        />
        <View style={styles.controlBar}>
          <MaterialIcons
              name={this.state.mute ? "volume-mute" : "volume-up"}
              size={45}
              color="white"
              onPress={this.handleVolume}
            />
            <MaterialIcons
              name={this.state.shouldPlay ? "pause" : "play-arrow"}
              size={45}
              color="white"
              onPress={this.handlePlayAndPause}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
