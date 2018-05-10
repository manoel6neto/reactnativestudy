import React from 'react';
import { Image, View } from 'react-native';

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every 5 seconds
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 5000);
  }

  render() {
    if (this.state.isShowingText) {
      let pic = {uri:'http://virtualmarketingpro.com/blog/airtonramos/wp-content/uploads/sites/690/2014/07/10308731_320189584797580_4508932394400843854_n.jpg'};
      return (
        <Image source={pic} resizeMode='cover' style={{width: 500, height:800}}/>
      );
    } else {
      let pic = {uri:'http://www.foxhq.com/leanne-crow-big-boobs-workout/9.jpg'};
      return (
        <Image source={pic} resizeMode='cover' style={{width: 430, height:720}}/>
      );
    }
  }
}

export default class BlinkApp extends React.Component {
  render() {
    return (
      <Blink/>
    );
  }
}
