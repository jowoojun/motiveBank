import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { colors, borders, fonts, size } from '../../../../constants/base'
import currencyFormat from '../../../utils/currencyFormat';

interface Props{
  name: string;
  price: number
  iconUri: string
}

interface State{ }

class AssetItem extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
  }

  render(){
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.img} source={{ uri: this.props.iconUri }} />
        </View>
        <View style={styles.contentView}>
          <Text style={[styles.text, styles.name ]}>{this.props.name || 'Name'}</Text>
          <Text style={[styles.text, styles.price ]}>{currencyFormat(this.props.price || 0)}</Text>
        </View>
        <View style={styles.blankView}>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: size.assetItem,
    flexDirection: 'row', 
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  text: {
    color: colors.textBase,
  },
  imageView:{
    alignItems: 'center',
    justifyContent: 'center',
    width: size.assetItemImage, height: size.assetItem
  },
  img: {
    width: size.assetItemImage,
    height: size.assetItemImage,
  },  
  contentView:{
    width: '55%', height: size.assetItem
  },
  name:{
    flex: 0.7, 
    fontSize: fonts.xxs, 
    paddingTop: 15, 
    color: colors.textGray
  },
  price:{
    flex: 1.4, 
    fontSize: fonts.m, 
    fontWeight: '500'
  },
  blankView:{
    width: '20%', height: size.assetItem
  }
});

export default AssetItem;