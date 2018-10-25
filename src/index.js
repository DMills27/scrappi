// @flow
import fetch from 'node-fetch'
import createConfig from './config'
import interval from 'interval-promise'
import type { Config } from './types'

export default async function(config: Config) {
  const {
    target,
    endpoint,
    tick,
    onDocumentReceived,
    verbose,
    once,
    post
  } = createConfig(config)
  interval(
    async () => {
      //Fetch html from target
      let html = await (await fetch(target)).text()
      if (!html) {
        console.error('Error during scraping, got', html)
      }
      //Return json from transformed html
      let json = onDocumentReceived(html)
      //Show json payload
      if (verbose) {
        console.log(
          `\n\n[+] Attemping POST \n\ttarget: ${target} \n\tendpoint: ${endpoint} \n\ttick ${tick} ms\n`
        )
        console.log('[+]Collected Payload')
        console.log(json)
      }
      if (endpoint) {
        try {
          let result = await post(json)
        } catch (error) {
          console.log(error)
        }
      }
    },
    tick,
    once ? { iterations: 1 } : {}
  )
}
