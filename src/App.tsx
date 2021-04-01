/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 const App = () => {
   
  return (
    <SafeAreaView >
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello, World!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
 };

 export default App;
