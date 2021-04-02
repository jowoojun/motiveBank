// src/screens/components/home/TotalAssetButton.tsx
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { dimensions, colors, borders, fonts } from '../../../../constants/base'
import currencyFormat from '../../../utils/currencyFormat'

interface Props {

}

interface State{

}

class TotalAssetButton extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity style={styles.assetButton}>
        <View style={styles.totalAssetView}>
          <Text style={styles.totalAssetText}>당신의 순자산</Text>
          <Text style={styles.totalAssetMoney}>{currencyFormat(100000000)}</Text>
        </View>
        <View style={styles.arrowView}>
          <Icon name="chevron-forward-outline" size={30} color="white" />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  assetButton: {
    height: dimensions.fullHeight / 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0,
    borderRadius: borders.baseBorderRadius,
    backgroundColor: colors.totalAssetButton
  },
  totalAssetView:{
    marginLeft: '5%',
  },
  totalAssetText:{
    color: colors.textGray,
    fontSize: fonts.xs,
    fontWeight: '500',
  },
  totalAssetMoney:{
    color: colors.textWhite,
    fontWeight: '700',
    fontSize: fonts.xm,
  },
  arrowView:{
    marginRight: '2%'
  }
})

export default TotalAssetButton