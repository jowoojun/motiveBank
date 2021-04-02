// src/screens/HomeScreen.tsx
import * as React from 'react';
import { View, StyleSheet, Text, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from "react-native-status-bar-height";

import TopBar from './components/home/TopBar';
import TotalAssetButton from './components/home/TotalAssetButton';
import AccountView from './components/home/AccountView';
import SecuritiesView from './components/home/SecuritiesView';

import { colors } from '../../constants/base';

interface Props{ }
interface State{
  refreshing: boolean
}

class HomeScreen extends React.Component<Props, State> {
  accounts: any
  securities: any
  constructor(props: Props){
    super(props)
    this.state = {
      refreshing: false
    }
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    
    this.accounts._getAccountData(4).then(() => {
      this.securities._getSecuritiesData(4).then(() => {
        this.setState({refreshing: false});
      })
    })
  }

  _refreshData = () => {
    
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar />
        <ScrollView style={styles.contentContainer} refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <TotalAssetButton />
          <AccountView style={styles.accountView} ref={ref => this.accounts = ref} />
          <SecuritiesView style={styles.accountView} ref={ref => this.securities = ref} />
          <View style={styles.footer}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.backgroundColor,
    height: getStatusBarHeight(true)
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer:{
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  accountView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', 
  },
  footer:{
    paddingBottom: 40
  }
});

export default HomeScreen