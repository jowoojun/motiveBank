import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  backgroundColor: '#FFFFFF',
  totalAssetButton: '#00FF00',
  textBase: '#000000',
  textGray: '#666699',
  textWhite: '#FFFFFF',

  placeholderGrey: '#4E4E4E',

  borderGray: '#e0e0e0',
  borderHeavyGrey: '#D6D6D6',
  
  buttonColor: '#FFFFFF',
    
  textBlack: '#000000',
}

export const borders = {
  baseBorderRadius: 10
}

export const size = {
  assetItem: 80,
  assetItemImage: 50
}

var font;
if(dimensions.fullWidth < 320){
  font = {
    s:12,
    xs:14,
    xxs: 16,
    m: 18,
    xm:20,
    xxm:22,
    l: 24,
    xl:26,
    xxl: 28,
  }
}else if(dimensions.fullWidth < 350){
  font = {
    s:16,
    xs:18,
    xxs: 20,
    m: 22,
    xm:24,
    xxm:26,
    l: 28,
    xl:30,
    xxl: 32,
  }
}else{
  font = {
    s:14,
    xs:16,
    xxs: 18,
    m: 22,
    xm:26,
    xxm:28,
    l: 32,
    xl:34,
    xxl: 36,
  }
}

export const fonts = font;