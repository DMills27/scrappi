import nock from 'nock'
import cheerio from 'cheerio'
import { expect } from 'chai'
import request from 'superagent'
import scrappi from '../src/index'

const target = 'https://google.com'
const endpoint = 'http://myapp.endpoint.com'
const mockPayload = {
  _id: '78e5b9e6-0fd9-45f8-a73e-ccb1c4a23b9c',
  timestamp: 1500000000000,
  data: {}
}
const mockConfig = {
  target,
  endpoint,
  interval: 500,
  onDocumentReceived: () => {}
}

describe('scrapi', () => {
  describe('onDocumentReceived', () => {
    it('should provide fetched html', async () => {
      let result = await scrappi({
        ...mockConfig,
        onDocumentReceived: html => {
          expect(html).to.be.a('string')
          return {}
        }
      })
    })
  })
  describe('Post', () => {
    it('should post to a given endpoint', async () => {
      //Set up Mock endpoint
      nock(`${endpoint}`)
        .post('/data/receive', mockPayload)
        .reply(200, {
          message: 'Successful POST'
        })

      let result = await scrappi({
        target,
        endpoint: `${endpoint}/data/receive`,
        onDocumentReceived: html => mockPayload,
        once: true,
        post: json => {
          request
            .post(`${endpoint}/data/receive`)
            .send(json) // sends a JSON post body
            .set('accept', 'json')
            .end((err, res) => {
              //Check status here
              expect(res.status).to.be(200)
            })
        }
      })
    })
  })
  describe('Once', () => {
    it('should run once time if enabled', async () => {
      //Set up Mock endpoint
      let scope = nock(`${endpoint}`)
        .post('/data/receive', mockPayload)
        .reply(200, {
          message: 'Successful POST'
        })

      let result = await scrappi({
        target,
        endpoint: `${endpoint}/data/receive`,
        onDocumentReceived: html => mockPayload,
        once: true,
        post: json => {
          request
            .post(`${endpoint}/data/receive`)
            .send(json) // sends a JSON post body
            .set('accept', 'json')
            .end((err, res) => {
              //Check status here
            })
        }
      })
      expect(scope.isDone())
    })
  })
})
