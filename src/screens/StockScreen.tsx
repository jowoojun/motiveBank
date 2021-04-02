// src/screens/StockScreen.tsx
import * as React from 'react';
import { Text, View } from 'react-native';

interface Props{ }
interface State{ }

class StockScreen extends React.Component<Props, State>{
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Stock!</Text>
      </View>
    );
  }
}

export default StockScreen