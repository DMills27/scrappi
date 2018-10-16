// @flow
import fetch from 'node-fetch'
import createConfig from './config'
import { post } from './utils'
import interval from 'interval-promise'
import type { Config } from './types'

export default async function(config: Config) {
  const { target, endpoint, tick, onDocumentReceived } = createConfig(config)
  interval(async () => {
    let html = await (await fetch(target)).text()
    if (!html) {
      console.error('Error during scraping, got', html)
    }
    let json = onDocumentReceived(html)
    if (endpoint) {
      try {
        let result = await post(endpoint, json)
      } catch (error) {
        console.log(error)
      }
    }
  }, tick)
}
