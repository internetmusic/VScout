const { network } = require('./../../modules/config').default

export default function () {
  return {
    nodeID: '',
    subnets: [],
    subnetID: network.defaultSubnetID,
    stakedAVA: 0,
    validatedStake: 0,
    delegatedStake: 0,
    nodeHealth: {},
    validators: [],
    delegators: [],
    blockchains: [],
    currentSubnet: { id: network.defaultSubnetID },
    assetsByChain: {},
    endpointsMemory: [],
    pendingValidators: [],
    defaultValidators: [],
    pendingDelegators: [],
    currentBlockchain: { subnetID: network.defaultSubnetID },
    isBlockchainView: true,
    hasNetworkConnection: true,
    hasNodeConnection: true,
    networkEndpoint: network.endpointUrls[0],
    nodeInfo: {
      networkID: '',
      networkName: '',
      nodeVersion: '',
      peers: []
    }
  }
}
