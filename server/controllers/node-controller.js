const axios = require('axios').default
const fs = require('fs')

let id = 1
axios.defaults.headers['Content-Type'] = 'application/json'

const body = (method) => {
  return {
    jsonrpc: '2.0',
    method,
    id: id++
  }
}

module.exports = {
  // POST
  info: async (endpoint) => {
    try {
        const resP = await axios
          .post(endpoint + '/ext/info', body('info.peers'))
        if (resP.data.error) {
          throw new Error(resP.data.error)
        }
        const peers = resP.data.result
        const resH = await axios
          .post(endpoint + '/ext/health', body('health.getLiveness'))
        if (resH.data.error) {
          throw new Error(resH.data.error)
        }
        const health = resH.data.result
        const res = await axios
          .post(endpoint + '/ext/info', body('info.getNodeID'))
        if (res.data.error) {
          throw new Error(res.data.error)
        }
        const nodeID = res.data.result.nodeID
        const res2 = await axios
          .post(endpoint + '/ext/info', body('info.getNetworkID'))
        if (res2.data.error) {
          throw new Error(res2.data.error)
        }
        const networkID = res2.data.result.networkID
        const res3 = await axios
          .post(endpoint + '/ext/info', body('info.getNetworkName'))
        if (res3.data.error) {
          throw new Error(res3.data.error)
        }
        const networkName = res3.data.result.networkName
        const res4 = await axios
          .post(endpoint + '/ext/info', body('info.getNodeVersion'))
        if (res4.data.error) {
          throw new Error(res4.data.error)
        }
        const version = res4.data.result.version
        const data = {
            peers,
            health,
            nodeID,
            networkID,
            networkName,
            version
        }
        const info = JSON.stringify(data)
        fs.writeFileSync('node-info.json', info)
    } catch (err) {
      const data = JSON.stringify(err)
      fs.writeFileSync('logs.json', data)
    }
  },
  // GET
  nodeInfo: (req, res) => {
    fs.readFile('node-info.json', (err, data) => {
      if (err) {
        res.status(400).send(err)
        res.end()
      }
      try {
        const info = JSON.parse(data)
        res.status(200).send(info)
        res.end()
      } catch (err) {
        res.status(400).send(err)
        res.end()
      }
    })
  },
  baseUrl: () => {
    return '/api/node'
  }
}