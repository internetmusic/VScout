import axios from 'axios'
const { network } = require('./config').default

// enpoints
const tx = 'x/transactions'
const timestamp = 'ext/bc/timestamp'
const platform = 'ext/P'

// methods
const getBlock = 'timestamp.getBlock'
const getBlockchains = 'platform.getBlockchains'
const getCurrentValidators = 'platform.getCurrentValidators'
const getPendingValidators = 'platform.getPendingValidators'

let id = 1
const jsonrpc = '2.0'
axios.defaults.headers['content-type'] = 'application/json'

const body = (method, params = {}) => {
  return {
    jsonrpc,
    method,
    params,
    id: id++
  }
}

export const testConnection = async ({ endpoint, params = {} }) => {
  try {
    const response = await axios.post(endpoint + timestamp, body(getBlock, params))
    return response.status
  } catch (err) {
    return err.message
  }
}

export const _getLastTx = async () => {
  const req = await axios.get(network.explorerBaseUrl + tx + '?sort=timestamp-desc&limit=1')
  return req.data
}

export const _getAggregates = async (s, e) => {
  const req = await axios.get(network.explorerBaseUrl + tx + `/aggregates?startTime=${s}&endTime=${e}`)
  return req.data.aggregates
}

export const _getAggregatesWithI = async (s, e, intervalSize = '1s') => {
  const req = await axios.get(network.explorerBaseUrl + tx + `/aggregates?startTime=${s}&endTime=${e}&intervalSize=${intervalSize}`)
  return req.data
}

export const request = async (endpoint, body) => {
  const response = await axios.post(endpoint, body)
  return response.data.result
}

export const _getBlock = async ({ params = {}, endpoint }) => {
  return request(endpoint + timestamp, body(getBlock, params))
}

export const _getBlockchains = async ({ endpoint }) => {
  return request(endpoint + platform, body(getBlockchains))
}

export const _getValidators = async ({ subnetID, endpoint }) => {
  return request(endpoint + platform, body(getCurrentValidators, { subnetID }))
}

export const _getPendingValidators = async ({ subnetID, endpoint }) => {
  return request(endpoint + platform, body(getPendingValidators, { subnetID }))
}