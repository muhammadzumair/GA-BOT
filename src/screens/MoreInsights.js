import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import MoreInsightItem from '../components/MoreInsighItem';
import { RadioButtons } from 'react-native-radio-buttons';

const options = ["7", "30", "365"];

const DATA = [
  {
    title: "Traffic Sources",
    icon: require('../assets/more_insights/globe.png'),
    bg: require('../assets/more_insights/bg1.png'),
    locked: false,
  },
  {
    title: "Top Videos",
    icon: require('../assets/more_insights/crown.png'),
    bg: require('../assets/more_insights/bg2.png'),
    locked: true,
  },
  {
    title: "Watch Time",
    icon: require('../assets/more_insights/clock.png'),
    bg: require('../assets/more_insights/bg3.png'),
    locked: false,
  },
  {
    title: "Earnings",
    icon: require('../assets/more_insights/dollar.png'),
    bg: require('../assets/more_insights/bg4.png'),
    locked: false,
  },
  {
    title: "Viewer Retention",
    icon: require('../assets/more_insights/time.png'),
    bg: require('../assets/more_insights/bg3.png'),
    locked: false,
  },
  {
    title: "Subscribers",
    icon: require('../assets/more_insights/group.png'),
    bg: require('../assets/more_insights/bg1.png'),
    locked: false,
  },
  {
    title: "Traffic Sources",
    icon: require('../assets/more_insights/crown.png'),
    bg: require('../assets/more_insights/bg4.png'),
    locked: false,
  },
  {
    title: "Another Item",
    icon: require('../assets/more_insights/crown.png'),
    bg: require('../assets/more_insights/bg1.png'),
    locked: false,
  },
]

export default class MoreInsights extends Component {
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
        <ScrollView style={{ paddingHorizontal: "10%", marginBottom: 100 }}>
          <Text style={styles.title}>More insights for YouTube</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {
              DATA.map((val, idx) => {
                return <MoreInsightItem
                  key={idx}
                  bg={val.bg}
                  icon={val.icon}
                  title={val.title}
                  locked={val.locked}
                />
              })
            }
          </View>
        </ScrollView>

        <ImageBackground
          source={require('../assets/more_insights/gradient.png')}
          style={styles.bottomBar}
        >
          <View style={styles.bottomRow}>
            <Text style={styles.text}>Add your channel</Text>
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
      </ImageBackground>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    width: "100%",
  },
  text: {
    color: "#fff",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  title: {
    fontSize: 25,
    marginVertical: 30,
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
  }
}