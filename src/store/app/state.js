const { network } = require('./../../modules/config').default

export default function () {
  return {
    validators: [],
    pendingValidators: [],
    endpointsMemory: [],
    blockchains: [],
    assetsByChain: {},
    currentBlockchain: {},
    networkEndpoint: network.endpointUrls[0],
    txsFor24H: { transactionCount: 0, transactionVolume: 0 },
    prevTxsFor24H: { transactionCount: 0, transactionVolume: 0 },
    totalTxsCount: 0,
    prevTotalTxs: 0,
    txsHistory: [],
    txHKey: 'minute',
    nodeID: ''
  }
}
