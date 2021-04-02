// src/utils/currencyFormat
const currencyFormat = (num:number) => {
  return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' 원'
}

export default currencyFormat;