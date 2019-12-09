# cryptapi

[cryptapi](https://cryptapi.io/docs) nodejs wrapper

> Bitcoin, Bitcoin Cash, Litecoin, Ethereum, Monero, IOTA, ...

## Installation & Use

```bash
npm install cryptapi
```

```bash
yarn add cryptapi
```

```js
const cryptapi = require('cryptapi')()

// each ticker has 3 methods
// tickerInfo, tickerCreateAddress, tickerLogs
// https://cryptapi.io/docs

cryptapi.btcInfo()
  .then(console.log)
  .catch(console.error)

cryptapi.btcCreateAddress(address, callback, options)
  .then(console.log)
  .catch(console.error)

cryptapi.btcLogs(callback)
  .then(console.log)
  .catch(console.error)
```

## Interface

```js
{
  "btcInfo",
  "btcCreateAddress",
  "btcLogs",
  "bchInfo",
  "bchCreateAddress",
  "bchLogs",
  "ltcInfo",
  "ltcCreateAddress",
  "ltcLogs",
  "etcInfo",
  "etcCreateAddress",
  "etcLogs",
  "xmrInfo",
  "xmrCreateAddress",
  "xmrLogs",
  "iotaInfo",
  "iotaCreateAddress",
  "iotaLogs"
}
```
