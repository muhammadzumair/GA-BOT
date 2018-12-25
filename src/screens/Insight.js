import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import InsightItem from '../components/InsightItem';

const DATA = [
  {
    title: "Mobile App Analytics",
    top: 20,
    width: 185,
    height: 120,
    src: require('../assets/insights/5.png'),
    src_fill: require('../assets/insights/5_fill.png'),
  },
  {
    title: "Google Analytics",
    top: 79,
    left: -15,
    width: 95,
    height: 155,
    // src: require('../assets/insights/2.png'),
    src_fill: require('../assets/insights/2_fill.png'),
  },
  {
    title: "Youtube Analytics",
    top: 82,
    left: 169,
    width: 95,
    height: 150,
    // src: require('../assets/insights/4.png'),
    src_fill: require('../assets/insights/4_fill.png'),
  },
  {
    title: "Facebook Analytics",
    left: 0,
    top: 178,
    width: 122,
    height: 160,
    // src: require('../assets/insights/3.png'),
    src_fill: require('../assets/insights/3_fill.png'),
  },
  {
    title: "Marketing Tips",
    top: 198,
    left: 136,
    width: 110,
    height: 120,
    // src: require('../assets/insights/1.png'),
    src_fill: require('../assets/insights/1_fill.png'),
  },
]


class Insight extends Component {
  state = {
    checked: [],
  };

  checkItem = item => {
    const { checked } = this.state;
    if (!checked.includes(item)) {
      this.setState({ checked: [...checked, item] });
    } else {
      this.setState({ checked: checked.filter(a => a !== item) });
    }
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/Intro_bg.png')}>
        <Text style={styles.title}>Insights</Text>
        <Text style={{position:'absolute', color:'#fff', top: 250, width: 100, textAlign: 'center'}}>What do you want to know?</Text>
        <View style={{ width: 250 }}>
          {
            DATA.map((val, idx) => {
              return (
                <InsightItem
                  key={idx}
                  // checked={this.state.checked.includes(val.title)}
                  onPress={() => this.props.navigation.navigate('analytics')}
                  title={val.title}
                  src={val.src}
                  src_fill={val.src_fill}
                  top={val.top}
                  left={val.left}
                  width={val.width}
                  height={val.height}
                />
              )
            })
          }
        </View>
      </ImageBackground>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontSize: 25,
    marginVertical: 30,
    color: "#fff",
    textAlign: "center"
  },
  circleTop: {
    top: 5,
    position: "absolute",
    width: 150,
    height: 80,
    alignSelf: "center"
  },
  circleMiddle: {
    position: "absolute",
    top: 50,
    left: 0,
    width: 100,
    height: 120
  },
  circleMiddle2: {
    top: 50,
    left: 150,
    position: "absolute",
    width: 100,
    height: 120
  },
  circleBottom: {
    left: 25,
    top: 150,
    position: "absolute",
    width: 100,
    height: 100
  },
  circleBottom2: {
    top: 150,
    left: 130,
    position: "absolute",
    width: 100,
    height: 100
  },
}

function mapStateToProps({ auth }) {
  const { isLogin, userData, error } = auth;
  return { isLogin, userData, error };
}


export default connect(mapStateToProps)(Insight);