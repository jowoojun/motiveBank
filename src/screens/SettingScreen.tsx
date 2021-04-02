// src/screens/SettingScreen.tsx
import * as React from 'react';
import { Text, View } from 'react-native';

interface Props{ }
interface State{ }

class SettingScreen extends React.Component<Props, State> {
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default SettingScreen