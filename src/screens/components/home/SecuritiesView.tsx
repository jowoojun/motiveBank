// src/screens/SecuritiesView.tsx
import * as React from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AssetItem from './AssetItem';

import { colors, fonts } from '../../../../constants/base'
import currencyFormat from '../../../utils/currencyFormat'

const defaultURL = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
const sampleData = {
  data: [
    {
      "id": "XRP",
      "name": "XRP",
      "price_usd": "6358.12",
      "iconUri": "https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true"
    },
    {
      "id": "EOS",
      "name": "EOS",
      "price_usd": "2184.5",
      "iconUri": "https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true"
    },
    {
      "id": "litecoin",
      "name": "Litecoin",
      "price_usd": "462.30",
      "iconUri": "https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true"
    },
    {
      "id": "teslacoin",
      "name": "Teslacoin",
      "price_usd": "50.4",
      "iconUri": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
  ]
};

interface Props{ 
  style: {}
}
interface State{ 
  coinData: {id: string, name:string, price_usd: string, iconUri: string}[],
  isLoading: boolean
  totalMoney: number
}

interface AssetItemProps{
  name: string, 
  price_usd: string,
  iconUri: string
}

class SecuritiesView extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      coinData: [{name:'', id:'', price_usd:'', iconUri:defaultURL}],
      isLoading: false,
      totalMoney: 0,
    };
    this._getAccountData = this._getAccountData.bind(this)
  }

  componentDidMount() {
    this._getAccountData(4);
  }

  _getAccountData = async (limit: number) => {
    this.setState({
      isLoading: true,
    });

    try {
      let response = sampleData

      let totalMoney = 0
      for(let i of response.data){
        totalMoney += Number(i.price_usd)
      }
      
      await this.setState({
        totalMoney: totalMoney,
        coinData: response.data,
        isLoading: false,
      });
    } catch(error) {
      console.error('_getCoinData', error);
    }
  }

  render(){
    const AccountItems = this.state.coinData.map((item:AssetItemProps, index) => {
      return(
        <AssetItem
          key={index}
          name={item.name}
          price={Number(item.price_usd)}
          iconUri={item.iconUri}
        />
      )
    })

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.accountSummaryContainer}>
          <Text style={styles.accountText}>증권</Text>
          <View style={styles.accountMoneyContainer}>
            <Text style={styles.accountMoeny}>{currencyFormat(this.state.totalMoney)}</Text>
            <Icon name="chevron-forward-outline" size={24} color="#666699" />
          </View>
        </TouchableOpacity>
        <View style={styles.accountList}>
          {AccountItems}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-around', 
    paddingTop: 28,
  },
  accountSummaryContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountText: {
    fontSize: fonts.m,
    fontWeight: "600",
  },
  accountMoneyContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountMoeny:{
    color: colors.textGray,
    fontSize: fonts.xxs,
  },
  accountList:{
    marginTop: '3%',
    borderBottomColor: colors.borderHeavyGrey,
    borderBottomWidth: 1,
  }
});
export default SecuritiesView