import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import HS from './Screens/HomeScreen';
import MS from './Screens/MenuScreen';
import CS from './Screens/CustomiseScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  Home:{screen: HS},
  Menu:{screen: MS},
  Customise: {screen: CS},
})

const AppContainer =   createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
