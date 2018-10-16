import scrappi from '../src/index'

const mockConfig = {
  target: 'https://google.com',
  endpoint: 'https://google.com',
  interval: 500,
  onDocumentReceived: () => {}
}

describe('scrapi', () => {
  var app = require('./lib/index').default
  var server

  describe('post', () => {
    before(done => {
      server = app.listen(3000, () => {
        console.log('Mock Server is starting')
        done()
      })
    })

    after(done => {
      server.close(() => {
        console.log('Mock Server is closing')
        done()
      })
    })

    it('should post to a given endpoint', async () => {
      let result = await scrappi({
        target: 'http://localhost:3000/',
        endpoint: 'http://localhost:3000/endpoint'
      })
    })
  })
  describe('onDocumentReceived', () => {
    it('should provide fetched html', async () => {
      let result = await scrappi({
        ...mockConfig,
        onDocumentReceived: html => {
          return html
        }
      })
    })
  })
})
