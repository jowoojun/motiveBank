// src/screens/HomeScreen.tsx
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getStatusBarHeight } from "react-native-status-bar-height";

import TopBar from './components/home/TopBar';

interface Props{ }
interface State{ }

class HomeScreen extends React.Component<Props, State> {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar title="Motive Bank" />
        <View style={{ flex: 1, backgroundColor: 'white',justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white',
    height: getStatusBarHeight(true)
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen