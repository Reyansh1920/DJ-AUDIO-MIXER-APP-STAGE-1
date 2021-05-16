import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnycolorButton extends Component {
  displayalert = () => {
   alert("Play Sound")
  }
  render(){
    return(
      <Button color={this.props.color} title="Sound" onPress =

      {this.displayalert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnycolorButton color = "red"/>
        <AnycolorButton color = "maroon"/>
        <AnycolorButton color = ""/>
        <AnycolorButton color = "purple"/>
        
      </View>
    );
  }
}



