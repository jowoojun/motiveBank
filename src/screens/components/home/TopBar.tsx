// src/screens/components/TopBar.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 
import { dimensions, fonts } from '../../../../constants/base'

interface Props { }

interface State{ }

class TopBar extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.left}></Text>
        <View style={styles.centerView} />
        <Icon name="notifications" size={30} color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between', 
    height: dimensions.fullHeight / 18,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  left:{
    width: '3%'
  },
  center:{
    fontSize: fonts.xxm
  },
  centerView:{
    alignItems: 'center',
    justifyContent: 'center', 
  }
});

export default TopBar;