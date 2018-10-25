// @flow
import type { Config } from './types'
import uuid from 'uuid'

export default (config: Config) => {
  return {
    target: 'https://google.com',
    endpoint: null,
    tick: 500,
    verbose: true,
    once: false,
    onDocumentReceived: () => {
      let _id = uuid.v4()
      let timestamp = Date.now()
      return {
        _id,
        timestamp,
        data: {}
      }
    },
    post: () => {},
    ...config
  }
}
