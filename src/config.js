const initialConfig = {
  target: 'https://google.com',
  endpoint: 'https://google.com',
  interval: 500,
  onDocumentReceived: () => {}
}

function createConfig(config: Config) {
  return {
    ...config,
    ...initialConfig
  }
}

module.exports = { createConfig }
