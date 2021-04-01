// src/App.tsx
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler'; // navigation을 위해 import하는 코드로 index.js에 있어도 무방

import AppNavigator from './navigation/AppNavigator'  // 별도로 관리하는 네비게이션 코드

 const App = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle={'dark-content'}  />} 
      <AppNavigator /> 
    </View>
  );
 };

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


 export default App;
