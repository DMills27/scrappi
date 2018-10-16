'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrappi() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialConfig;

  var _createConfig = (0, _config.createConfig)(config),
      target = _createConfig.target,
      endpoint = _createConfig.endpoint,
      interval = _createConfig.interval,
      onDocumentReceived = _createConfig.onDocumentReceived;

  return (0, _nodeFetch2.default)(config.target).then(function (res) {
    return res.text();
  }).then(function (html) {
    return onDocumentReceived(html);
  }).then(function (json) {
    return post(endpoint, json);
  });
}

module.exports = scrappi;