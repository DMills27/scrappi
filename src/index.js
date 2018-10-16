// @flow
import fetch from 'node-fetch'
import { createConfig } from './config'
import { post } from './utils'

function scrappi(config: Config = initialConfig) {
  const { target, endpoint, interval, onDocumentReceived } = createConfig(
    config
  )
  return fetch(target)
    .then(res => res.text())
    .then(html => onDocumentReceived(html))
    .then(json => post(endpoint, json))
    .catch(error => console.log(error))
}

export default scrappi
