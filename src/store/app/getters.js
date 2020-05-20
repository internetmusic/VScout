export function validators (state) {
  return state.validators
}

export function pendingValidators (state) {
  return state.pendingValidators
}

export function blockchains (state) {
  return state.blockchains
}

export function currentBlockchain (state) {
  return state.currentBlockchain
}

export function networkEndpoint (state) {
  return state.networkEndpoint
}

export function lastBlock (state) {
  return state.lastBlock
}

export function blockTime (state) {
  return state.blockTime
}

export function avarageBlockTime (state) {
  const sum = state.lastBlockTime.reduce((a, b) => a + b, 0)
  return (sum / state.lastBlockTime.length) || 0
}

export function txsFor24H (state) {
  return state.txsFor24H
}

export function totalTxsCount (state) {
  return state.totalTxsCount
}

export function txsHistory (state) {
  return key => state.txsHistory[key]
}

export function txHKey (state) {
  return state.txHKey
}