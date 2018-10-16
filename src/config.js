// @flow
import type { Config } from './types'

export default (config: Config) => {
  return {
    target: 'https://google.com',
    endpoint: 'https://google.com',
    tick: 500,
    onDocumentReceived: () => {},
    ...config
  }
}
