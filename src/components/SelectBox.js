import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

class SelectBox extends Component {
  state = {
    toggledOn: this.props.checked
  }

  render() {
    const styles = {
      box: {
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        width: 95,
        height: 95,
        flex: 1,
        zIndex: 999,
        overflow: "visible",
      },
      boxActive: {
        backgroundColor: "#9ecbff",
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        transform: [
          { rotate: '360deg' },
        ],
      },
      toggle: {
        fontSize: 13,
        color: '#fff',
        textAlign: "center",
      },
      toggledOn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
      },
      gradientWrap: {
        borderRadius: 200,
        width: "100%",
        height: "100%",
        justifyContent: "center"
      }
    }

    return (
      <Animatable.View
        easing="ease-in-out-quad"
        animation={this.props.checked ? 'pulse' : null}
        iterationCount="infinite"
        direction="alternate"
      >
        <TouchableOpacity
          style={{
            width: this.props.width,
            height: this.props.height,
            marginTop: this.props.top || null,
            left: this.props.left || null,
          }}
          activeOpacity={.9}
          onPress={this.props.onPress}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={this.props.colors}
            style={{ width: 95, height: 95, borderRadius: 200, margin: 5 }}>

            <View
              style={[styles.box, this.props.checked && styles.boxActive]}
            >
              <Text
                style={[styles.toggle, this.props.checked && styles.toggledOn]}
              >
                {this.props.title}
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ Animatable.View>
    )
  }
}


export default SelectBox