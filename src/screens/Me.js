import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MoreInsightItem from '../components/MoreInsighItem';

const DATA = [
  {
    title: "Google Analytics",
    bg: require('../assets/more_insights/bg1.png'),
    locked: false,
  },
  {
    title: "Salesforce",
    bg: require('../assets/more_insights/bg2.png'),
    locked: true,
  },
  {
    title: "Twitter",
    bg: require('../assets/more_insights/bg3.png'),
    locked: false,
  },
  {
    title: "Amazon",
    bg: require('../assets/more_insights/bg4.png'),
    locked: false,
  },
  {
    title: "Youtube Analytics",
    bg: require('../assets/more_insights/bg3.png'),
    locked: false,
  },
  {
    title: "iTunes",
    bg: require('../assets/more_insights/bg1.png'),
    locked: false,
  }
]


class Me extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/Intro_bg.png')}>
        <ScrollView style={{ paddingHorizontal: "10%" }}>
          <View style={styles.row}>
            <View style={{ width: "30%" }}>
              <Text style={styles.num}>0</Text>
              <Text style={styles.text}>Current Day Streak</Text>
            </View>

            <View style={{ width: "30%" }}>
              <Text style={styles.num}>49</Text>
              <Text style={styles.text}>Total Insights</Text>
            </View>

            <View style={{ width: "30%" }}>
              <Text style={styles.num}>242</Text>
              <Text style={styles.text}>Total Launches</Text>
            </View>
          </View>

          <Text style={styles.title}>Me</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {
              DATA.map((val, idx) => {
                return <MoreInsightItem
                  onPress={() => this.props.navigation.navigate('analytics')}
                  key={idx}
                  bg={val.bg}
                  title={val.title}
                />
              })
            }
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>

        <ImageBackground
          source={require('../assets/more_insights/gradient.png')}
          style={styles.bottomBar}
        />
      </ImageBackground>
    )
  }
}

const styles = {
  bottomBar: {
    width: "100%",
    position: "absolute",
    bottom: -50,
    height: 100
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    color: "#fff",
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  num: {
    color: "#fff",
    textAlign: "center",
    fontSize: 35
  },
  text: {
    textAlign: "center",
    color: "#fff"
  }
}

function mapStateToProps({ auth }) {
  const { isLogin, userData, error } = auth;
  return { isLogin, userData, error };
}


export default connect(mapStateToProps)(Me);