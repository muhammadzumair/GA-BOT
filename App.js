import React from 'react';
import { View, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/store/store';

import Navigation from './src/Navigation'
// import SplashScreen from 'react-native-splash-screen'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   SplashScreen.hide();
  // }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar hidden />
          <Navigation />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
