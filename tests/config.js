import createConfig from '../src/config'
import { expect } from 'chai'

describe('configuration', () => {
  it('should provide a valid config by default', () => {
    let config = createConfig({})
    expect(config).to.have.property('target')
    expect(config).to.have.property('endpoint')
    expect(config).to.have.property('verbose')
    expect(config).to.have.property('once')
    expect(config).to.have.property('onDocumentReceived')
    expect(config).to.have.property('post')
  })
  it('should be verbose by default', () => {
    let config = createConfig({})
    expect(config).to.have.property('verbose')
  })
  it('should not be once y default', () => {
    let config = createConfig({})
    expect(config.once).to.be.false
  })
})
