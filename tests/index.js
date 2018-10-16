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
        done()
      })
    })

    after(done => {
      server.close(() => {
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
    it('should provide fetched html', () => {
      let result = scrappi({
        ...mockConfig,
        onDocumentReceived: html => {
          console.log('Heeey\n\n')

          console.log(html)
        }
      })
    })
  })
})
