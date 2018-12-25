import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default class InsightItem extends Component {

  render() {
    const styles = {
      container: {
        alignSelf: "center",
        position: "absolute",
        top: this.props.top,
        left: this.props.left,
      },
      img: {
        width: this.props.width,
        height: this.props.height,
        justifyContent: "center"
      },
      title: {
        color: "#fff",
        fontSize: 11,
        alignSelf: "center",
        width: 60,
        textAlign: "center",
        // fontWeight: 'bold'
      }
    }


    return (
      <TouchableOpacity activeOpacity={.8} onPress={this.props.onPress} style={styles.container}>
        {
          this.props.checked ?
            <ImageBackground
              style={styles.img}
              resizeMode="contain"
              source={this.props.src_fill}
            >
              <Text style={styles.title}>{this.props.title}</Text>
            </ImageBackground>
            :
            <ImageBackground
              style={styles.img}
              resizeMode="contain"
              source={this.props.src_fill}
            >
              <Text style={styles.title}>{this.props.title}</Text>
            </ImageBackground>
        }

      </TouchableOpacity>
    )
  }
}