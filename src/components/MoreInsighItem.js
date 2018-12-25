import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground, ScrollView, View, Text, Image } from 'react-native';

export default class MoreInsightItem extends Component {
  render() {
    return (
      <View style={{ width: "50%", marginVertical: 10, alignItems: "center" }}>
        <TouchableOpacity onPress={this.props.onPress} activeOpacity={.8}>
          <ImageBackground
            source={this.props.bg}
            style={styles.container}
          >
            {
              this.props.icon ?
                <Image
                  style={styles.icon}
                  source={this.props.icon}
                /> : null
            }
            <Text style={styles.title}>{this.props.title}</Text>

            {
              this.props.locked ?
                <Image style={styles.lockIcon} source={require('../assets/more_insights/lock.png')} /> //: null
                : null
            }
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120
  },
  icon: {
    width: 25,
    height: 25
  },
  title: {
    fontSize: 12,
    marginTop: 2,
    color: "#fff",
  },
  lockIcon: {
    width: 13,
    height: 13,
    position: "absolute",
    bottom: 16
  }
}