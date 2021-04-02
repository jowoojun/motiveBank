// src/screens/AccountScreen.tsx
import * as React from 'react';
import { Text, View } from 'react-native';

interface Props{ }
interface State{ }

class AccountScreen extends React.Component<Props, State> {
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
      </View>
    );
  }
}

export default AccountScreen