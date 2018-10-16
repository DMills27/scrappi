import createConfig from '../src/config'
import { expect } from 'chai'

describe('configuration', () => {
  it('should provide a valid config by default', () => {
    let config = createConfig({})
    expect(config).to.have.property('target')
    expect(config).to.have.property('endpoint')
    expect(config).to.have.property('onDocumentReceived')
  })
})
