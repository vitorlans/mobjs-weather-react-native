import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Weather from './screens/Weather';
import Search from './screens/Search';

const Routes = {
  WeatherScreen: {
    name: 'TEMPO',
    description: 'Where you see the weather.',
    screen: Weather,
  },
  SearchScreen: {
    name: 'PROCURAR',
    description: 'Where you looking for the weather.',
    screen: Search,
  }
}



class Startup extends Component {

  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    return (
      <View >
        <Text>
          TEXT
        </Text>
        <Button onPress={() => { this.props.navigation.navigate('SearchScreen') }} title='Press Me' />
      </View>
    );
  }
};

const AppNavigator = StackNavigator({
  ...Routes,
  Index: {
    screen: Startup
  }
}, {
    initialRouteName: 'Index',
    headerMode: 'screen'
  });

export default AppNavigator