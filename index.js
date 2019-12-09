const API = require('./api')
const assert = require("assert")

module.exports = (config = {}) => {

  config = {
    baseURL: 'https://cryptapi.io/api/',
    supportedTickers: ['btc', 'bch', 'ltc', 'eth', 'xmr', 'iota'],
    ...config
  }

  const api = API(config)

  const getTickerInfo = ticker => {
    assert(ticker, 'requires ticker')

    return api.get(`/${ticker}/info`)
  }

  const tickerCreateAddress = ticker => (address, callback, options = {}) => {
    assert(ticker, 'requires ticker')
    assert(address, 'requires address')
    assert(callback, 'requires callback')

    return api.get(`/${ticker}/create`, {
      address, callback, ...options
    })
  }

  const tickerLogs = ticker => callback => {
    assert(ticker, 'requires ticker')
    assert(callback, 'requires callback')

    return api.get(`/${ticker}/create`, {
      callback
    })
  }

  return config.supportedTickers.reduce((memo, ticker) => {
    memo[`${ticker}Info`] = () => getTickerInfo(ticker)
    memo[`${ticker}CreateAddress`] = tickerCreateAddress(ticker)
    memo[`${ticker}Logs`] = tickerLogs(ticker)
    return memo
  }, {
    getSupportedTickers: () => config.supportedTickers,
    _createAddress: (ticker, address, callback, options) => {
      const ca = tickerCreateAddress(ticker)
      return ca(address, callback, options)
    },
    _getInfo: (ticker) => getTickerInfo(ticker),
    _tickerLogs: (ticker, callback) => {
      const ca = tickerLogs(ticker)
      return ca(callback)
    },
  })
}