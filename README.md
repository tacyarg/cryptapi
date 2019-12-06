# cryptapi
cryptapi nodejs wrapper

## Installation
```js
const cryptapi = require('cryptapi')()

// each ticker has 3 methods
// tickerInfo, tickerCreateAddress, tickerLogs

cryptapi.btcInfo()
  .then(console.log)
  .catch(console.error)
```

## Interface

```
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