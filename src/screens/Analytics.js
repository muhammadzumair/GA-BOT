import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

const options = ["7", "30", "365"];

export default class Analytics extends Component {
  state = {
    selectedOption: null
  }

  setSelectedOption = (selectedOption) => {
    this.setState({
      selectedOption
    });
  }

  renderOption = (option, selected, onSelect, index) => {
    const style = selected ?
      {
        margin: 3,
        backgroundColor: "#fff",
        width: 40,
        height: 40,
        borderRadius: 100,
        color: "#333",
        borderWidth: 1,
        borderColor: "#fff",
        textAlign: "center",
        paddingTop: 8,
        fontSize: 16,
      } :
      {
        fontSize: 16,
        paddingTop: 8,
        margin: 3,
        width: 40,
        height: 40,
        borderRadius: 100,
        color: "#fff",
        borderWidth: 1,
        borderColor: "#fff",
        textAlign: "center",
      };

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <Text style={style}>{option}</Text>
      </TouchableWithoutFeedback>
    );
  }

  renderContainer = (optionNodes, selected) => {
    return <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 5 }}>{optionNodes}</View>;
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/Intro_bg.png')}>
        <Text style={styles.title}>YouTube Channel</Text>

        <View style={styles.wrap}>
          <ImageBackground style={styles.img} source={require('../assets/analytics/cd.png')}>
            <Text style={styles.leftText}>Top YouTube Keywords</Text>
          </ImageBackground>

          <ImageBackground style={styles.img} source={require('../assets/analytics/ab.png')}>
            <Text style={styles.rightText}>YouTube Demographics</Text>
          </ImageBackground>
        </View>

        <View style={styles.wrap}>
          <ImageBackground style={styles.img} source={require('../assets/analytics/gh.png')}>
            <Text style={[styles.leftText, { marginTop: -10 }]}>YouTube Views</Text>
          </ImageBackground>

          <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('moreInsights')}>
            <ImageBackground style={styles.img} source={require('../assets/analytics/ef.png')}>
            <Text style={[styles.rightText, { marginTop: -10 }]}>More...</Text>
          </ImageBackground>
          </TouchableOpacity>
        </View>


      <ImageBackground
        source={require('../assets/more_insights/gradient.png')}
        style={styles.bottomBar}
      >
        <View style={styles.bottomRow}>
          <Text style={{ color: "#fff" }}>Add your channel</Text>
          <Image style={styles.icon} source={require('../assets/more_insights/add.png')} />
        </View>

        <RadioButtons
          options={options}
          onSelection={this.setSelectedOption}
          selectedOption={this.state.selectedOption}
          renderOption={this.renderOption}
          renderContainer={this.renderContainer}
        />
      </ImageBackground>
      </ImageBackground >
    )
  }
}

const styles = {
  container: {
    flex: 1,
    width: "100%"
  },
  wrap: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: 'center'
  },
  img: {
    margin: 10,
    width: 145,
    height: 145,
    justifyContent: "center",
    alignItems: "center"
  },
  leftText: {
    color: "#fff",
    width: 70,
    fontSize: 15,
    textAlign: "center",
    marginLeft: 20,
    marginTop: 10
  },
  rightText: {
    fontSize: 15,
    color: "#fff",
    width: 99,
    textAlign: "center",
    marginRight: 20,
    marginTop: 10
  },
  title: {
    fontSize: 25,
    marginTop: 50,
    marginBottom: 30,
    color: "#fff",
    textAlign: "center"
  },
  bottomBar: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 150
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 3
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
}